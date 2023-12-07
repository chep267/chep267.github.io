/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

type UseCountdownType = {
    numberCountdown?: number /** thời gian đếm ngược */;
    timer?: number /**  khoảng đếm ngược */;
    isContinue?: boolean /** có  tiếp tục đếm ngược khi về 0 */;
    callback?(): void /** fn callback khi  đếm ngược khi về 0 */;
};

const useCountdown = (props: UseCountdownType) => {
    const { numberCountdown = 10, timer = 1000, callback, isContinue } = props;

    const countdownRef = React.useRef<NodeJS.Timeout>();
    const [second, setSecond] = React.useState(numberCountdown);
    const [refresh, setRefresh] = React.useState(0);

    const onStop = React.useCallback(() => clearInterval(countdownRef.current), []);

    const onRefresh = React.useCallback((number = numberCountdown) => {
        onStop();
        setSecond(number);
        setRefresh((prev) => (prev + 1) % 7);
    }, []);

    const countdownEffect = React.useCallback(() => {
        setSecond((s) => {
            if (s <= 1) {
                callback?.();
                if (isContinue) {
                    return numberCountdown;
                }
                onStop();
            }
            return s - 1;
        });
    }, [numberCountdown]);

    React.useEffect(() => {
        countdownRef.current = setInterval(countdownEffect, timer);
        return () => {
            clearInterval(countdownRef.current);
        };
    }, [refresh]);

    return {
        second,
        onRefresh,
        onStop,
    };
};

export { useCountdown };
