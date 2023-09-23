import chain from "../../assets/chain.png";
import spark from "../../assets/spark.png";
import {Link} from "react-router-dom";
import Countdown from "../Countdown.tsx";

const regDate = import.meta.env.VITE_HACKATHON_REG_DATE;

function Banner() {
    return <div
        className="flex-1 banner flex flex-col items-center lg:items-start lg:pl-[12.8rem] bg-[url('./assets/Hackathon-guy.png')] bg-contain lg:bg-auto lg:bg-right-bottom bg-no-repeat bg-bottom">
        <h1 className="text-center mt-[3.1rem] font-montserrat text-[1.6rem] italic font-bold lg:self-end lg:text-[3.6rem] lg:pr-[5.5rem]">
            Igniting a Revolution in HR Innovation
        </h1>
        <div className="mt-[5.8rem] font-clash-display text-[3.2rem] font-bold lg:text-[8rem]">
            <h2 className="text-center lg:text-left">getlinked Tech</h2>
            <h2 className="flex justify-center items-center">
                <span>Hackathon</span>
                <span className="text-brand-purple-2">1.0</span>
                <img src={chain} alt="" className="w-[3.2rem] lg:w-[8rem]"/>
                <img src={spark} alt="" className="w-[3.2rem] lg:w-[8rem]"/>
            </h2>
        </div>
        <p className="font-montserrat text-[1.3rem] leading-[2.16rem] px-[6.3rem] lg:text-[2rem] lg:leading-[3.32rem] lg:px-0 lg:max-w-[52.2rem] text-center lg:text-left">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
        <Link to="/register" className="mt-[2.4rem] lg:mt-[4.1rem] button__primary">Register</Link>
        <Countdown targetDate={new Date(regDate)} />
    </div>
}

export default Banner;
