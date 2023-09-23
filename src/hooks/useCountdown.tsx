import { useEffect, useState } from 'react';

const useCountdown = (targetDate: Date) => {
    const millisecondsFromNow = (date: Date) => date.getTime() - new Date().getTime();

    const [countDownMs, setCountDown] = useState(millisecondsFromNow(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(millisecondsFromNow(targetDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return getReturnValues(countDownMs);
};

const getReturnValues = (countDownMs: number) => {
    const days = Math.floor(countDownMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDownMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDownMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDownMs % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
};

export { useCountdown };
