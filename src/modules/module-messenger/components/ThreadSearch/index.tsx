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

type ThreadSearchProps = {
    isFocusSearch: boolean;
    setFocusSearch(isFocusSearch: boolean): void;
};
export default function ThreadSearch(props: ThreadSearchProps) {
    const { isFocusSearch, setFocusSearch } = props;
    const classes = useStyles();

    return (
        <Stack className={classnames(classes.listSearch, { [classes.listSearch_hidden]: !isFocusSearch })}>
            <IconButton onClick={() => setFocusSearch(false)}>
                <WestIcon />
            </IconButton>
            <InputSearch onFocus={() => setFocusSearch(true)} />
        </Stack>
    );
}
