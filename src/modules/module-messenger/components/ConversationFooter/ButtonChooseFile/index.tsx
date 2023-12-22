/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useParams } from 'react-router-dom';

/** lib components */
import { IconButton } from '@mui/material';
import { Photo as PhotoIcon } from '@mui/icons-material';

/** hooks */
import { useMessenger } from '@module-messenger/hooks/useMessenger';

/** styles */
import useStyles from './styles.ts';

/** types */
import type { ChangeEvent } from 'react';
import type { TypeItemIds, TypeItems } from '@module-base/models';

export default function ButtonChooseFile() {
    const { tid } = useParams();
    const classes = useStyles();
    const { method } = useMessenger();

    const onChange = React.useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const data = event.target.files;
            if (!tid || !data) {
                return;
            }

            const fileIds: TypeItemIds = [];
            const files: TypeItems<File> = {};
            for (let i = 0, n = data.length; i < n; ++i) {
                const fid = `fid.${window.crypto.randomUUID()}`;
                fileIds.push(fid);
                files[fid] = data[i];
            }
            method.setFiles({ tid, fileIds, files });
        },
        [tid]
    );

    return (
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
    );
}
