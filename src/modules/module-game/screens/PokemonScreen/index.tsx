/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { Stack, Paper } from '@mui/material';

/** components */
import PikachuItem from '@module-game/components/PikachuItem';

/** utils */
import usePikachu from '@module-game/hooks/usePikachu';

/** styles */
import useStyles from './styles';

export default function PokemonScreen() {
    const classes = useStyles();
    const PIKACHU = usePikachu();

    React.useEffect(() => {
        PIKACHU.method.init({ row: 7, col: 14 });
    }, []);

    return (
        <Stack className={classes.screen}>
            <Paper className={classes.mainContent}>
                {PIKACHU.data.boardGame.map((row, rowIndex) => {
                    return (
                        <Stack key={`matrix_row_${rowIndex}`} className={classes.row}>
                            {row.map((item, colIndex) => {
                                const status = PIKACHU.method.getItemStatus(item);
                                return (
                                    <PikachuItem
                                        key={`matrix_row_${rowIndex}_column_${colIndex}`}
                                        status={status}
                                        item={item}
                                        onSelect={PIKACHU.method.chooseItem}
                                    />
                                );
                            })}
                        </Stack>
                    );
                })}
            </Paper>
        </Stack>
    );
}
