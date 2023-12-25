/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

/** styles */
import useStyles from './styles';
import { TypeDocumentMessageData } from '@module-messenger/models';

type ImagePreviewProps = {
    fid: string;
    file?: TypeDocumentMessageData['files'][string];
    onRemoveFile(fid: string): void;
};

export default function ImagePreview(props: ImagePreviewProps) {
    const { file, fid, onRemoveFile } = props;
    const classes = useStyles();

    if (!file) {
        return null;
    }

    return (
        <Stack className={classes.list_item}>
            <IconButton className={classes.iconRemove} onClick={() => onRemoveFile(fid)} size="small">
                <CloseIcon fontSize="small" />
            </IconButton>
            <img alt="" src={URL.createObjectURL(file.fileData)} />
        </Stack>
    );
}
