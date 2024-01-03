/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** types */
import type { UseListSearchProps, KeyboardEvent } from '@module-base/models';

const defaultState: UseListSearchProps = {
    disableEventKey: false, // có tắt phím mũi tên không, mặc định là không
    total: 0, // số phần tử
    indexSelect: 0, // vị trí đang select, mặc định là chưa chọn
    indexHover: 0, // ví trí đang hover, mặc định là chưa chọn
    idSelect: '', // id đang select, mặc định là chưa chọn
};

export const useListSearch = (props: Partial<UseListSearchProps> = defaultState) => {
    const [state, setState] = React.useState<UseListSearchProps>({
        ...defaultState,
        ...props,
    });

    const onSelect = React.useCallback(({ indexSelect = 0, idSelect = '' }) => {
        setState((prev) => ({
            ...prev,
            indexSelect,
            indexHover: indexSelect,
            idSelect,
        }));
    }, []);

    const onKeyPress = React.useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            event.stopPropagation();
        }
        setState((prev) => {
            /** xử lý với 3 case Enter, ArrowDown, ArrowUp
             * Enter: select item đang hover
             * ArrowDown: hover lên trên
             * ArrowUp: hover xuống dưới
             */
            if (state.disableEventKey) {
                return prev;
            }
            if (event.key === 'Enter') {
                if (prev.indexSelect !== prev.indexHover) {
                    return {
                        ...prev,
                        indexSelect: prev.indexHover,
                    };
                }
                return prev;
            }
            if (event.key === 'ArrowDown') {
                return {
                    ...prev,
                    itemHover: prev.indexHover === prev.total ? 1 : prev.indexHover + 1,
                };
            }
            if (event.key === 'ArrowUp') {
                return {
                    ...prev,
                    itemHover: prev.indexHover > 1 ? prev.indexHover - 1 : prev.total,
                };
            }
            return prev;
        });
    }, []);

    const onRefresh = React.useCallback(() => {
        setState((prev) => ({
            indexHover: 0,
            indexSelect: 0,
            idSelect: '',
            disableEventKey: false,
            total: prev.total,
        }));
    }, []);

    const init = React.useCallback((data = defaultState) => {
        setState((prev) => ({
            ...prev,
            ...data,
        }));
    }, []);

    return {
        ...state,
        onSelect,
        onKeyPress,
        init,
        onRefresh,
    };
};
