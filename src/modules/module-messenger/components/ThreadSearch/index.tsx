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
import InputSearch from '@module-base/components/InputSearch';

/** styles */
import useStyles from './styles';

/** types */
type ThreadSearchProps = {
    isFocusSearch: boolean;
    setFocusSearch(isFocusSearch: boolean): void;
    setSearchKey(searchKey: string): void;
    setSearching(isSearching: boolean): void;
};

export default function ThreadSearch(props: ThreadSearchProps) {
    const { isFocusSearch, setFocusSearch, setSearchKey, setSearching } = props;
    const classes = useStyles();

    return (
        <Stack className={classnames('.ThreadSearch', classes.listSearch, { [classes.listSearch_hidden]: !isFocusSearch })}>
            <IconButton onClick={() => setFocusSearch(false)}>
                <WestIcon />
            </IconButton>
            <InputSearch onFocus={() => setFocusSearch(true)} onChangeValue={setSearchKey} onLoading={setSearching} />
        </Stack>
    );
}
