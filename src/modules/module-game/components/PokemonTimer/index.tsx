/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack } from '@mui/material';

/** hooks */
import { usePokemon } from '@module-game/hooks';

/** styles */
import useStyles from './styles';

/** types */
type PokemonTimerProps = {
    className?: string;
};

export default function PokemonTimer(props: PokemonTimerProps) {
    const { className } = props;
    const classes = useStyles();

    const {
        data: { duration, status },
    } = usePokemon();

    return (
        <Stack
            className={classnames(
                classes.line,
                className,
                { [classes.lineStart]: status === 'start' },
                { [classes.lineStop]: status === 'stop' }
            )}
            sx={{
                '&:before': {
                    animationDuration: `${duration}s`,
                },
            }}
        />
    );
}
