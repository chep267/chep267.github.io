/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';
import { useIntl } from 'react-intl';

/** lib components */
import { Link } from 'react-router-dom';
import { Stack, Typography, Button } from '@mui/material';

/** constants */
import { SCREEN } from '@module-global/constants';

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

export default function PokemonGameOver(props: PokemonTimerProps) {
    const { className } = props;
    const classes = useStyles();
    const { data, method } = usePokemon();
    const { formatMessage } = useIntl();

    return (
        <Stack className={classnames(classes.gameOver, { [classes.gameOverShow]: data.status === 'stop' }, className)}>
            <Typography variant="h1" color="warning.main" textAlign="center">
                {formatMessage(gameMessage['module.game.pokemon.text.game.over'])}
            </Typography>
            <Stack direction="row" gap={2}>
                <Button variant="outlined" onClick={method.restartGame}>
                    {formatMessage(gameMessage['module.game.pokemon.button.restart'])}
                </Button>
                <Link to={SCREEN.GAME}>
                    <Button variant="outlined" color="error">
                        {formatMessage(gameMessage['module.game.pokemon.button.exit'])}
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
}
