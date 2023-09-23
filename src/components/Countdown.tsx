import {useCountdown} from "../hooks/useCountdown.tsx";

import "../styles/Countdown.css";

interface Prop {
    targetDate: Date
}

function Countdown({targetDate}: Prop) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return  <div className="countdown">
        <div className="countdown-item">{days}<small>D</small>&nbsp;&nbsp;</div>
        <div className="countdown-item">{hours}<small>H</small>&nbsp;&nbsp;</div>
        <div className="countdown-item">{minutes}<small>M</small>&nbsp;&nbsp;</div>
        <div className="countdown-item">{seconds}<small>S</small></div>
    </div>;
}

export default Countdown;
