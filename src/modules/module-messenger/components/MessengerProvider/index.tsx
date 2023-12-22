/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** utils */
import { genMessage } from '@module-messenger/utils/helpers/genMessage';

/** hooks */
import { MessengerContext } from '@module-messenger/hooks/useMessenger';

/** types */
import type { PropsWithChildren } from 'react';
import type { MessengerContextProps, TypeDocumentMessageData } from '@module-messenger/models';

export default function MessengerProvider(props: PropsWithChildren) {
    const { children } = props;

    const [openThreadInfo, setOpenThreadInfo] = React.useState(true);
    const [drafts, setDrafts] = React.useState<MessengerContextProps['ui']['drafts']>({});

    const setText = React.useCallback<MessengerContextProps['method']['setText']>(({ tid, text, type }) => {
        setDrafts((prev) => {
            const message = prev[tid] || genMessage({ tid, type });
            const content = type === 'emoji' ? `${message.text}${text}` : text;
            return {
                ...prev,
                [tid]: genMessage({ ...message, text: content }),
            };
        });
    }, []);

    const setFiles = React.useCallback<MessengerContextProps['method']['setFiles']>(({ tid, fileIds, files }) => {
        setDrafts((prev) => {
            const message = prev[tid] || genMessage({ tid });
            const isEmpty = message.fileIds.length === 0;
            const mFileIds = isEmpty ? fileIds : [...message.fileIds];
            const mFiles = isEmpty ? files : { ...message.files };
            if (!isEmpty) {
                fileIds.forEach((id) => {
                    const hasFile = mFileIds.some((fid) => {
                        return fid === id || mFiles[fid]?.name === files[id]?.name;
                    });
                    if (!hasFile) {
                        mFileIds.push(id);
                        mFiles[id] = files[id];
                    }
                });
            }
            return {
                ...prev,
                [tid]: genMessage({ ...message, fileIds: mFileIds, files: mFiles }),
            };
        });
    }, []);

    const removeFiles = React.useCallback<MessengerContextProps['method']['removeFiles']>(({ tid, fileIds }) => {
        setDrafts((prev) => {
            const message = prev[tid] || genMessage({ tid });
            const mFileIds: TypeDocumentMessageData['fileIds'] = [];
            const mFiles: TypeDocumentMessageData['files'] = {};
            message.fileIds.forEach((fid) => {
                if (!fileIds.includes(fid)) {
                    mFileIds.push(fid);
                    mFiles[fid] = message.files[fid];
                }
            });
            return {
                ...prev,
                [tid]: genMessage({ ...message, fileIds: mFileIds, files: mFiles }),
            };
        });
    }, []);

    const setEmptyThread = React.useCallback<MessengerContextProps['method']['setEmptyThread']>((tid) => {
        setDrafts((prev) => ({
            ...prev,
            [tid]: genMessage({ tid, isEmpty: true }),
        }));
    }, []);

    const store = React.useMemo<MessengerContextProps>(
        () => ({
            ui: {
                openThreadInfo,
                drafts,
            },
            method: {
                setOpenThreadInfo,
                removeFiles,
                setText,
                setFiles,
                setEmptyThread,
            },
        }),
        [drafts, openThreadInfo]
    );

    return <MessengerContext.Provider value={store}>{children}</MessengerContext.Provider>;
}
