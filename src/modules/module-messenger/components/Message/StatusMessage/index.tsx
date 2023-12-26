/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import classnames from 'classnames';

/** lib components */
import {
    CheckCircleOutlined as CheckCircleOutlinedIcon,
    CheckCircleRounded as CheckCircleRoundedIcon,
    SvgIconComponent,
} from '@mui/icons-material';

/** styles */
import useStyles from './styles';

/** type */
import type { SvgIconProps } from '@mui/material';

export default function StatusMessage(props: SvgIconProps & { isMe?: boolean }) {
    const { isMe, className, color = 'primary', fontSize = 'small', ...other } = props;
    const classes = useStyles();

    const status: string = 'receive';

    const IconStatus: SvgIconComponent = status === 'received' ? CheckCircleRoundedIcon : CheckCircleOutlinedIcon;

    return (
        <IconStatus
            className={classnames(className, classes.status, { [classes.me]: isMe }, { [classes.partner]: !isMe })}
            color={color}
            fontSize={fontSize}
            {...other}
        />
    );
}
