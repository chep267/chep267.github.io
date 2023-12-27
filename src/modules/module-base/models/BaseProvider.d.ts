/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction } from 'react';

type BaseContextProps = {
    data: {
        openSider: boolean;
    };
    method: {
        toggleSider: Dispatch<SetStateAction<boolean>>;
    };
};

export type { BaseContextProps };
