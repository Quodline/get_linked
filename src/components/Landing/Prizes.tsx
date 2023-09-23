import trophy from "../../assets/trophy.png";
import silverMedal from "../../assets/silver_medal 1.png";
import goldMedal from "../../assets/gold_medal 1.png";
import bronzeMedal from "../../assets/bronze_medal 1.png";

import "../../styles/Landing/Prize.css";
import {useEffect, useRef, useState} from "react";
import observer from "../../observer.ts";
import cn from "classnames";

function Prizes() {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLElement>(null);
    useEffect(observer(domRef, setVisible), []);

    return <section ref={domRef} id="rewards" className={cn("border-t border-fade-gray flex flex-col fade-in-section fade-in-section", {'is-visible': isVisible})}>
        <div className="section-content self-end px-[4.5rem] lg:px-[27rem] lg:basis-1/2">
            <h3 className="text-center lg:text-left mt-[7.2rem]">
                Prizes and<br/><span className="text-brand-purple-2">Rewards</span>
            </h3>
            <p className="section-content-text lg:text-[1.6rem]">
                Highlight of the prizes or rewards for winners
                and for participants.
            </p>
        </div>
        <div className="lg:flex flex-row">
            <div className="flex justify-end items-center p-[4rem] lg:basis-1/2">
                <img src={trophy} alt=""/>
            </div>
            <div
                className="flex justify-center items-center pt-[11.34rem] pb-[8.93rem] lg:pt-[26.4rem] lg:pb-[14.9rem]">
                <div className="prize">
                    <img src={silverMedal} className="prize-medal" alt=""/>
                    <h4 className="prize-title"><span>2nd</span><br/>Runner</h4>
                    <span className="prize-amount">N300,000</span>
                </div>
                <div className="relative flex justify-center w-[12.5rem] lg:!w-[29.6rem] lg:pt-[3rem]">
                    <div className="prize-gold !pt-[6.86rem]">
                        <img src={goldMedal} className="prize-medal-gold" alt=""/>
                        <h4 className="prize-title"><span>1st</span><br/>Runner</h4>
                        <span className="prize-amount !text-brand-purple py-4">N400,000</span>
                    </div>
                </div>
                <div className="prize">
                    <img src={bronzeMedal} className="prize-medal" alt=""/>
                    <h4 className="prize-title"><span>3rd</span><br/>Runner</h4>
                    <span className="prize-amount">N150,000</span>
                </div>
            </div>
        </div>
    </section>
}

export default Prizes;
