/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import classnames from 'classnames';

/** lib components */
import { Button } from '@mui/material';

/** constants */
import { emptyObject } from '@module-base/constants/defaultValue';
import { PIKACHU_LOGO } from '@module-game/constants';

/** styles */
import useStyles from './styles';

/** types */
import type { PikachuItemType, PikachuItemStatusType } from '@module-game/models';

type Props = {
    status: PikachuItemStatusType;
    item: PikachuItemType;
    onSelect(item: PikachuItemType): void;
};

export default function PikachuItem(props: Props) {
    const { status, item, onSelect } = props;
    const classes = useStyles();
    const isEmpty = item.value === 0;

    const itemStyle = React.useMemo(() => {
        return isEmpty ? emptyObject : { backgroundImage: `url(${PIKACHU_LOGO[item.value]})` };
    }, [isEmpty]);

    return (
        <Button
            disabled={isEmpty}
            className={classnames(
                classes.item,
                { [classes.itemEmpty]: isEmpty },
                { [classes.itemSelected]: status === 'select' || status === 'success' || status === 'error' },
                { [classes.itemError]: status === 'error' },
                { [classes.itemSuccess]: status === 'success' }
            )}
            style={itemStyle}
            onClick={() => onSelect(item)}
        />
    );
}
