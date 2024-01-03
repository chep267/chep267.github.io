/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useParams } from 'react-router-dom';

/** lib components */
import { Stack } from '@mui/material';

/** components */
import ImagePreview from '@module-messenger/components/ConversationFooter/ListFiles/ImagePreview';

/** hooks */
import { useMessenger } from '@module-messenger/hooks';

/** styles */
import useStyles from './styles';

export default function ListFiles() {
    const { tid = '' } = useParams();
    const classes = useStyles();
    const { ui, method } = useMessenger();

    const draft = tid ? ui.drafts[tid] : null;

    const onRemoveFile = React.useCallback(
        (fid: string) => {
            method.removeFiles({ tid, fileIds: [fid] });
        },
        [tid]
    );

    if (!draft?.fileIds?.length) {
        return null;
    }

    return (
        <Stack className={classes.list_wrap}>
            {draft.fileIds.map((fid) => {
                return <ImagePreview key={fid} file={draft?.files?.[fid]} fid={fid} onRemoveFile={onRemoveFile} />;
            })}
        </Stack>
    );
}
