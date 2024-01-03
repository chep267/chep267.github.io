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
import { emptyObject } from '@module-base/constants';
import { POKEMON_LOGO } from '@module-game/constants';

/** styles */
import useStyles from './styles';

/** types */
import type { TypePokemonItem, TypePokemonItemStatus } from '@module-game/models';

type Props = {
    id: string;
    status?: TypePokemonItemStatus;
    item: TypePokemonItem;
    onSelect(item: TypePokemonItem): void;
};

export default function PokemonItem(props: Props) {
    const { id, status, item, onSelect } = props;
    const classes = useStyles();
    const isEmpty = item.value === 0;

    const itemStyle = React.useMemo(() => {
        return isEmpty ? emptyObject : { backgroundImage: `url(${POKEMON_LOGO[item.value]})` };
    }, [isEmpty]);

    return (
        <Button
            id={id}
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
