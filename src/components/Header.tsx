import iconBars from "../assets/icon-bars.svg";
import cn from "classnames";
import iconTimes from "../assets/icon-times.svg";
import {useState} from "react";

function Header() {
    const [showNav, setShowNav] = useState(false);

    return <>
        <nav className="border-b border-fade-gray px-[4.8rem] py-[2.8rem] lg:mt-[3.7rem] lg:h-[10.4rem] lg:pl-[12.8rem] lg:pr-[18rem] flex justify-between items-center">
            <h1 className="font-clash-display text-2xl font-bold pl-[.6rem] lg:text-[3.6rem]">
                get<span className="text-brand-pink">linked</span>
            </h1>
            <div className="pt-[.8rem] pb-[2.9rem] lg:pr-[8.85rem] lg:flex justify-end flex-1 hidden">
                <a className="navbar-link" href="#">Timeline</a>
                <a className="navbar-link" href="#">Overview</a>
                <a className="navbar-link" href="#">FAQs</a>
                <a className="navbar-link" href="#">Contact</a>
            </div>
            <button className="hidden lg:inline button-primary">Register</button>
            <button className="lg:hidden mt:[.6rem]" onClick={() => setShowNav(true)}>
                <img src={iconBars} alt="Menu"/>
            </button>
        </nav>
        <nav className={"bg-brand-dark pl-[4.7rem] fixed top-0 w-screen overflow-scroll transition-all duration-1000 lg:hidden"+' '+cn({
            'h-screen': showNav,
            'h-0': !showNav,
            'opacity-0': !showNav,
        })}>
            <div className="px-[5.1rem] py-[3.9rem] flex justify-end">
                <button onClick={() => setShowNav(false)} className="@apply w-[2.3rem] h-[2.3rem] inline-grid place-items-center bg-[url('/gradient-circle.svg')]">
                    <img src={iconTimes} alt="Close"/>
                </button>
            </div>
            <div className="pt-[.8rem] pb-[2.9rem] flex flex-col">
                <a className="navbar-link" href="#">Timeline</a>
                <a className="navbar-link" href="#">Overview</a>
                <a className="navbar-link" href="#">FAQs</a>
                <a className="navbar-link" href="#">Contact</a>
            </div>
            <button className="button-primary">Register</button>
        </nav>
    </>
}

export default Header;
