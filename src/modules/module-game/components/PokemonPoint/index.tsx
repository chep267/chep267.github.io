/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';
import { useIntl } from 'react-intl';

/** lib components */
import { Typography } from '@mui/material';

/** utils */
import { gameMessage } from '@module-game/utils/messages';

/** hooks */
import { usePokemon } from '@module-game/hooks/usePokemon';

/** styles */
import useStyles from './styles';

/** types */
type PokemonTimerProps = {
    className?: string;
};

export default function PokemonPoint(props: PokemonTimerProps) {
    const { className } = props;
    const { formatMessage } = useIntl();
    const classes = useStyles();

    const {
        data: { point },
    } = usePokemon();

    return (
        <Typography className={classnames(classes.point, className)} variant="h4" color="primary.main">
            {formatMessage(gameMessage['module.game.pokemon.text.game.point'], { point })}
        </Typography>
    );
}
