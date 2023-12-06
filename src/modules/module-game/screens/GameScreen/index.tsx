/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** lib components */
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

/** constants */
import { GAME_CENTER } from '@module-game/constants';

/** styles */
import useStyles from './styles';

export default function GameScreen() {
    const classes = useStyles();
    const games = Object.values(GAME_CENTER);

    return (
        <Stack className={classes.screen}>
            {games.map((game) => {
                return (
                    <Link to={game.path} key={game.path} className={classes.gameItem}>
                        <Stack className={classes.gameLogo} style={{ backgroundImage: `url(${game.icon})` }} />
                        <Typography variant="body1" pt={1}>
                            {game.name}
                        </Typography>
                    </Link>
                );
            })}
        </Stack>
    );
}
