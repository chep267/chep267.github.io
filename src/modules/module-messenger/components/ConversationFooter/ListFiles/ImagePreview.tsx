/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, IconButton } from '@mui/material';
import { Mic as MicIcon } from '@mui/icons-material';

/** styles */
import useStyles from './styles';

type ImagePreviewProps = {
    fid: string;
    file?: File;
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
            <IconButton className={classes.iconRemove} onClick={() => onRemoveFile(fid)}>
                <MicIcon color="primary" />
            </IconButton>
            <img alt="" src={URL.createObjectURL(file)} />
        </Stack>
    );
}
