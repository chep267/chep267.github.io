/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { ImageList, ImageListItem } from '@mui/material';

/** styles */
import useStyles from '@module-messenger/components/Message/styles';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

type ImageMessageProps = {
    fileIds: TypeDocumentMessageData['fileIds'];
    files: TypeDocumentMessageData['files'];
};

export default function ImageMessage(props: ImageMessageProps) {
    const { fileIds, files } = props;
    const classes = useStyles();

    const col = fileIds.length < 5 ? 2 : 3;
    return (
        <ImageList className={classes.imageListMessage} cols={col} gap={2}>
            {fileIds.map((fid) => (
                <ImageListItem key={fid} className={classes.imageMessage}>
                    <img
                        // srcSet={`${files[fid]?.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        // src={`${files[fid]?.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${files[fid]?.url}`}
                        src={`${files[fid]?.url}`}
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
