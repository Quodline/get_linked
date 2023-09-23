import '../../styles/Footer.css';

import {Link} from "react-router-dom";

import igIcon from "../../assets/mdi_instagram.svg";
import xIcon from "../../assets/twitter.svg";
import fbIcon from "../../assets/facebook.svg";
import linkedIcon from "../../assets/ri_linkedin-fill.svg";
import iconPhone from "../../assets/iconPhone.svg";
import iconLocate from "../../assets/iconLocate.svg";

function Footer() {
    return <footer role="contentinfo">
        <div className="pb-[3.2rem] lg:basis-1/2">
            <h1 className="font-clash-display text-[2rem] lg:text-[3rem] leading-normal font-bold">
                get<span className="text-brand-purple-2">linked</span>
            </h1>
            <p className="leading-[2.07rem] pt-[1.2rem]">Getlinked Tech Hackathon is a technology
                innovation program established by a group
                of organizations with the aim of showcasing
                young and talented individuals in the field
                of technology</p>
            <nav className="pt-[3.9rem]">
                <Link to="/#privacy" className="border-r-2 border-brand-purple-2 pr-6">Terms of use</Link>
                <Link to="/#privacy" className="pl-6">Privacy Policy</Link>
            </nav>
        </div>
        <div className="pb-[6.1rem]">
            <h1 className="section-heading">Useful Links</h1>
            <nav className="flex flex-col pt-[.8rem] space-y-[1.2rem]">
                <Link to="#overview">Overview</Link>
                <Link to="#overview">Timeline</Link>
                <Link to="#overview">FAQs</Link>
                <Link to="#overview">Register</Link>
            </nav>
            <div className="flex items-center space-x-[1.6rem] pt-[1.2rem]">
                <span className="text-brand-purple-2">Follow us</span>
                <img src={igIcon} alt="Instagram" className="w-[2.4rem] h-[2.4rem]" />
                <img src={xIcon} alt="X(Twitter)" className="w-[2.4rem] h-[2.4rem]" />
                <img src={fbIcon} alt="Facebook" className="w-[2.4rem] h-[2.4rem]" />
                <img src={linkedIcon} alt="LinkedIn" className="w-[2.4rem] h-[2.4rem]" />
            </div>
        </div>
        <div className="pb-[6rem]">
            <h1 className="section-heading pb-[.8rem]">Contact Us</h1>
            <div className="flex space-x-[1.6rem] items-center">
                <img src={iconPhone} className="w-[1.2rem] h-[1.2rem]" alt="" />
                <span>+234 679 81819</span>
            </div>
            <div className="flex space-x-[1.6rem] items-center mt-[2.2rem]">
                <img src={iconLocate} className="w-[1.2rem] h-[1.2rem]" alt="" />
                <span>27,Alara Street<br/>Yaba 100012<br/>Lagos State<br/></span>
            </div>
        </div>
        <div className="text-center mb-[5.3rem] basis-full">All rights reserved. © getlinked Ltd.</div>
    </footer>
}

export default Footer;
