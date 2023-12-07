/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack } from '@mui/material';

/** components */
import PokemonProvider from '@module-game/components/PokemonProvider';
import PokemonTimer from '@module-game/components/PokemonTimer';
import PokemonBoardGame from '@module-game/components/PokemonBoardGame';
import PokemonGameOver from '@module-game/components/PokemonGameOver';

/** styles */
import useStyles from './styles';

export default function PokemonScreen() {
    const classes = useStyles();

    return (
        <PokemonProvider>
            <Stack className={classes.screen}>
                <Stack className={classes.header}>
                    <PokemonTimer className={classes.lineDuration} />
                </Stack>
                <Stack className={classes.body}>
                    <PokemonBoardGame className={classes.boardGame} />
                </Stack>
                <PokemonGameOver />
            </Stack>
        </PokemonProvider>
    );
}
