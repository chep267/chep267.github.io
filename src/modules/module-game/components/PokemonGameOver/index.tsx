/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack, Typography, Button } from '@mui/material';

/** hooks */
import { usePokemon } from '@module-game/hooks/usePokemon';

/** styles */
import useStyles from './styles';

/** types */
type PokemonTimerProps = {
    className?: string;
};

export default function PokemonGameOver(props: PokemonTimerProps) {
    const { className } = props;
    const classes = useStyles();
    const { data, method } = usePokemon();

    return (
        <Stack className={classnames(classes.gameOver, { [classes.gameOverShow]: data.status === 'stop' }, className)}>
            <Typography variant="h1" color="warning.main" textAlign="center">
                Game Over!
            </Typography>
            <Button variant="outlined" onClick={() => method.restartGame()}>
                Restart
            </Button>
        </Stack>
    );
}
