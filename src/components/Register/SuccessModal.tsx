import "../../styles/SuccessModal.css";

import congrats from "../../assets/congratulation.png";
import wink from "../../assets/1531010992wink-emoji-woman-png 1.png";

import {Link} from "react-router-dom";

function SuccessModal() {
    return <div className="overlay">
        <div className="modalBody">
            <img src={congrats} alt="" className="self-center"/>
            <h2 className="modalBody-title">Congratulations you have successfully Registered!</h2>
            <div className="text-center pt-[2.9rem] pb-[2.3rem] lg:pb-[3.7rem] font-medium">
                <span>Yes, it was easy and you did it!<br/>check your mail box for next step&nbsp;</span>
                <img src={wink} alt="" className="h-[1.2rem] lg:h-[1.4rem] inline"/>
            </div>
            <Link to="/">
                <button className="button__primary w-full">Back</button>
            </Link>
        </div>
    </div>
}

export default SuccessModal;
