/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';
import { useIntl } from 'react-intl';

/** lib components */
import { Stack, Typography, Button } from '@mui/material';

/** utils */
import { gameMessage } from '@module-game/utils';

/** hooks */
import { usePokemon } from '@module-game/hooks';

/** styles */
import useStyles from './styles';

/** types */
type PokemonTimerProps = {
    className?: string;
};

export default function PokemonGameVictory(props: PokemonTimerProps) {
    const { className } = props;
    const classes = useStyles();
    const { data, method } = usePokemon();
    const { formatMessage } = useIntl();

    return (
        <Stack className={classnames(classes.gameVictory, { [classes.gameVictoryShow]: data.status === 'next' }, className)}>
            <Typography variant="h1" color="warning.main" textAlign="center">
                {formatMessage(gameMessage['module.game.pokemon.text.game.victory'])}
            </Typography>
            <Stack direction="row" gap={2}>
                <Button variant="outlined" onClick={method.restartGame}>
                    {formatMessage(gameMessage['module.game.pokemon.button.restart'])}
                </Button>
                <Button variant="outlined" color="success" onClick={method.nextGame}>
                    {formatMessage(gameMessage['module.game.pokemon.button.next'])}
                </Button>
            </Stack>
        </Stack>
    );
}
