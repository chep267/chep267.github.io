/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack, Paper } from '@mui/material';

/** components */
import PokemonItem from './PokemonItem';

/** hooks */
import { usePokemon } from '@module-game/hooks/usePokemon';

/** styles */
import useStyles from './styles';

type PokemonBoardGameProps = {
    className?: string;
};

export default function PokemonBoardGame(props: PokemonBoardGameProps) {
    const { className } = props;
    const classes = useStyles();
    const { data, method } = usePokemon();

    return (
        <Paper className={classnames(classes.board, className)}>
            {data.boardGame.map((row, rowIndex) => {
                return (
                    <Stack key={`boardGame-${data.gameKey}-row-${rowIndex}`} className={classes.row}>
                        {row.map((item, colIndex) => {
                            const status = method.getItemStatus(item);
                            return (
                                <PokemonItem
                                    key={`boardGame-${data.gameKey}-row-${rowIndex}-col-${colIndex}`}
                                    status={status}
                                    item={item}
                                    onSelect={method.chooseItem}
                                />
                            );
                        })}
                    </Stack>
                );
            })}
        </Paper>
    );
}
