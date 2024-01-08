/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Skeleton } from '@mui/material';

/** styles */
import { useStyles } from './styles';

/** types */
import type { ImageBaseProps, ReactEventHandler } from '@module-base/models';

export default function ImageBase(props: ImageBaseProps) {
    const { alt = '', loading = 'lazy', onLoad, ...other } = props;
    const classes = useStyles();

    const [isLoading, setLoading] = React.useState(true);

    const onLoadImage = React.useCallback<ReactEventHandler<HTMLImageElement>>(
        (event) => {
            onLoad?.(event);
            setLoading(false);
        },
        [onLoad]
    );

    return (
        <>
            {isLoading ? (
                <Skeleton className={classnames(classes.loading, 'image-base-loading')} variant="rectangular" />
            ) : null}
            <img alt={alt} onLoad={onLoadImage} loading={loading} {...other} />
        </>
    );
}
