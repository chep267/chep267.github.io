/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction, PropsWithChildren } from 'react';

/** use base */
export type SiderProviderProps = PropsWithChildren;

export type TypeSiderContext = {
    data: {
        openSider: boolean;
    };
    method: {
        setOpenSider: Dispatch<SetStateAction<boolean>>;
    };
};
