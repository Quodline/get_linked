import iconBars from "../assets/icon-bars.svg";
import cn from "classnames";
import iconTimes from "../assets/icon-times.svg";
import {ReactNode, useState} from "react";
import {Link, useLocation} from "react-router-dom";

interface Prop {
    registerButtonComponent?: ReactNode
}

function Header({registerButtonComponent}: Prop) {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();

    return <>
        <nav
            className="bg-transparent px-[4.8rem] py-[2.8rem] lg:mt-[3.7rem] lg:h-[10.4rem] lg:pl-[12.8rem] lg:pr-[18rem] flex justify-between items-center">
            <Link to="/" className="pl-[.6rem]">
                <h1 className="font-clash-display text-2xl font-bold lg:text-[3.6rem]">
                    get<span className="text-brand-pink">linked</span>
                </h1>
            </Link>
            <div className="pt-[.8rem] pb-[2.9rem] lg:pr-[8.85rem] lg:flex justify-end flex-1 hidden">
                <a className="navbar-link" href="#">Timeline</a>
                <a className="navbar-link" href="#">Overview</a>
                <a className="navbar-link" href="#">FAQs</a>
                <a className={cn("navbar-link", {active: location.pathname === '/contact'})} href="/src/pages/Contact">Contact</a>
            </div>
            {registerButtonComponent ||
                <Link to="/register" className="hidden lg:inline button-primary">Register</Link>}
            <button className="lg:hidden mt:[.6rem]" onClick={() => setShowNav(true)}>
                <img src={iconBars} alt="Menu"/>
            </button>
        </nav>
        <nav
            className={"bg-brand-dark pl-[4.7rem] fixed top-0 w-screen overflow-scroll transition-all duration-1000 lg:hidden" + ' ' + cn({
                'h-screen': showNav,
                'h-0': !showNav,
                'opacity-0': !showNav,
            })}>
            <div className="px-[5.1rem] py-[3.9rem] flex justify-end">
                <button onClick={() => setShowNav(false)}
                        className="w-[2.3rem] h-[2.3rem] inline-grid place-items-center bg-[url('/gradient-circle.svg')]">
                    <img src={iconTimes} alt="Close"/>
                </button>
            </div>
            <div className="pt-[.8rem] pb-[2.9rem] flex flex-col">
                <a className="navbar-link" href="#">Timeline</a>
                <a className="navbar-link" href="#">Overview</a>
                <a className="navbar-link" href="#">FAQs</a>
                <a className="navbar-link" href="/src/pages/Contact">Contact</a>
            </div>
            <Link to="/register" className="button-primary">Register</Link>
        </nav>
    </>
}

export default Header;
