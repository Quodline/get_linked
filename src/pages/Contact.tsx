import '../styles/Contact.css';

import iconAngleLeft from "../assets/icon-angle-left.svg";
import igIcon from "../assets/mdi_instagram.svg";
import xIcon from "../assets/twitter.svg";
import fbIcon from "../assets/facebook.svg";
import linkedIcon from "../assets/ri_linkedin-fill.svg";
import {Link} from "react-router-dom";
import Header from "../components/Header.tsx";

function Contact() {
    return <header className="contact-header flex flex-col min-h-screen">
        <div className="mobile-view lg:hidden">
            <Link to="/" className="w-[2.3rem] h-[2.3rem] mx-[5.1rem] my-[4.7rem]  inline-grid place-items-center bg-[url('./assets/gradient-circle.svg')]">
                <img src={iconAngleLeft} alt="Back"/>
            </Link>
            <div className="flex flex-col mx-[4.9rem] leading-normal">
                <h1 className="font-clash-display text-brand-purple-2 text-[2rem] font-semibold">
                    Questions or need<br />assistance?<br />
                    Let us know about it
                </h1>
                <p className="py-[2.4rem]">Email us below to any question related <br/>to our event</p>
                <div className="flex flex-col py-[.6rem] space-y-[2.5rem]">
                    <input className="mobile-input-control" placeholder="Team's Name"/>
                    <input className="mobile-input-control" placeholder="Topic"/>
                    <input className="mobile-input-control" placeholder="Email"/>
                    <textarea className="mobile-input-control !px-[2.4rem] !py-[2.7rem]" placeholder="Message" rows={4}/>
                </div>
                <button className="button__primary self-center my-[4.2rem]">Submit</button>
                <span className="text-brand-purple-2 text-[1.2rem] text-center pb-2">Share on</span>
                <div className="flex justify-center space-x-4 mb-[3.85rem]">
                    <img src={igIcon} alt="Instagram"/>
                    <img src={xIcon} alt="X(Twitter)"/>
                    <img src={fbIcon} alt="Facebook"/>
                    <img src={linkedIcon} alt="LinkedIn"/>
                </div>
            </div>
        </div>
        <div className="desktop_view hidden lg:flex flex-col flex-1">
            <Header/>
            <div className="flex-1 flex items-center pl-[18.8rem] text-[1.6rem]">
                <div className="basis-[45.8%]">
                    <h2 className="font-semibold font-clash-display text-brand-purple-2 text-[3.2rem]">Get in touch</h2>
                    <h3 className="my-[1.7rem]">Contact<br/>Information</h3>
                    <div>27,Alara Street<br/>Yaba 100012<br/>Lagos State</div>
                    <div className="my-[2.1rem]">Call Us : 07067981819</div>
                    <div>We are open from Monday-Friday<br/>08:00am - 05:00pm</div>
                    <div className="text-brand-purple-2 mt-[3.5rem] mb-[1.4rem]">Share on</div>
                    <div className="flex space-x-[1.9rem]">
                        <img src={igIcon} alt="Instagram"/>
                        <img src={xIcon} alt="X(Twitter)"/>
                        <img src={fbIcon} alt="Facebook"/>
                        <img src={linkedIcon} alt="LinkedIn"/>
                    </div>
                </div>
                <div className="bg-[#FFFFFF07] px-[9rem] py-[7.5rem]">
                    <h2 className="font-semibold font-clash-display text-brand-purple-2 text-[2rem]">
                        Questions or need assistance?<br/>Let us know  about it!
                    </h2>
                    <div className="flex flex-col py-[.6rem] space-y-[2.5rem] w-[43.7rem]">
                        <input className="mobile-input-control" placeholder="First Name"/>
                        <input className="mobile-input-control" placeholder="Mail"/>
                        <textarea className="mobile-input-control !px-[2.4rem] !py-[2.7rem]" placeholder="Message" rows={4}/>
                        <button className="button__primary self-center my-[3.1rem]">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Contact;
