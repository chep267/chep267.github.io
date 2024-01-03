/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { ImageList, ImageListItem } from '@mui/material';

/** components */
import { ImageBase } from '@module-base/components';

/** styles */
import useStyles from './styles';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

type ImageMessageProps = {
    fileIds: TypeDocumentMessageData['fileIds'];
    files: TypeDocumentMessageData['files'];
};

export default function ListImageMessage(props: ImageMessageProps) {
    const { fileIds, files } = props;
    const classes = useStyles();

    const col = fileIds.length < 4 ? fileIds.length : fileIds.length === 4 ? 2 : 3;
    return (
        <ImageList className={classes.listImage} cols={col} gap={2}>
            {fileIds.map((fid) => (
                <ImageListItem key={fid} className={classes.image}>
                    <ImageBase srcSet={`${files[fid]?.url}`} src={`${files[fid]?.url}`} />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
