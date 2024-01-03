/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import { Stack, IconButton } from '@mui/material';
import { West as WestIcon } from '@mui/icons-material';

/** components */
import { InputSearch } from '@module-base/components';

/** hooks */
import { useUiThreadSearch } from '@module-messenger/hooks';

/** styles */
import useStyles from './styles';

export default function ThreadSearch() {
    const classes = useStyles();
    const {
        data: { isFocusSearch },
        method: { setFocusSearch, setSearching, setSearchKey },
    } = useUiThreadSearch();

    return (
        <Stack className={classnames('.ThreadSearch', classes.inputSearch, { [classes.inputSearch_blur]: !isFocusSearch })}>
            <IconButton onClick={() => setFocusSearch(false)}>
                <WestIcon />
            </IconButton>
            <InputSearch onFocus={() => setFocusSearch(true)} onChangeValue={setSearchKey} onLoading={setSearching} />
        </Stack>
    );
}
