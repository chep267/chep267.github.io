/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useParams } from 'react-router-dom';

/** lib components */
import { FormattedMessage } from 'react-intl';
import { IconButton, Tooltip } from '@mui/material';
import { Photo as PhotoIcon } from '@mui/icons-material';

/** utils */
import { messengerMessage } from '@module-messenger/utils/messages';

/** hooks */
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** styles */
import useStyles from './styles';

/** types */
import type { ChangeEvent } from 'react';
import type { TypeDocumentMessageData } from '@module-messenger/models';

export default function ButtonChooseFile() {
    const { tid = '' } = useParams();
    const classes = useStyles();
    const { method } = useMessenger();

    const onChange = React.useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const data = event.target.files;
            if (!tid || !data) {
                return;
            }

            const fileIds: TypeDocumentMessageData['fileIds'] = [];
            const files: TypeDocumentMessageData['files'] = {};
            for (let i = 0, n = data.length; i < n; ++i) {
                const fid = `fid.${window.crypto.randomUUID()}`;
                fileIds.push(fid);
                files[fid] = {
                    fileData: data[i],
                    url: '',
                    name: data[i].name,
                    size: data[i].size,
                    type: data[i].type,
                };
            }
            method.setFiles({ tid, fileIds, files });
        },
        [tid]
    );

    return (
        <Tooltip title={<FormattedMessage {...messengerMessage['module.messenger.component.button.chooseFile.tooltip']} />}>
            <IconButton color="primary" className={classes.btnFile} component="label" htmlFor="messenge-footer-input-file">
                <PhotoIcon />
                <input
                    accept="image/*"
                    className={classes.inputFile}
                    id="messenge-footer-input-file"
                    type="file"
                    multiple={true}
                    onChange={onChange}
                />
            </IconButton>
        </Tooltip>
    );
}
