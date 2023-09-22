import "./Register.css";
import walking from "../assets/walking.png";
import Header from "../components/Header.tsx";
import thumbsUpMan from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import {Link} from "react-router-dom";

function Register() {
    return <header className="flex flex-col min-h-screen">
        <div className="mobile-view lg:hidden flex flex-col px-[6.7rem] pt-[2.4rem]">
            <h1 className="font-clash-display text-[1.5rem] text-brand-pink font-bold mb-[3.1rem]">Register</h1>
            <img src={thumbsUpMan} alt="" className="self-center w-[19.5rem] h-[19.5rem]"/>
            <div className="flex justify-center items-end text-[1.2rem]">
                <span>Be part of this movement!</span>
                <img src={walking} alt="" className="pl-2 pb-1"/>
            </div>
            <h2 className="text-[2rem] text-center">CREATE YOUR ACCOUNT</h2>
            <div className="flex flex-col mt-[2.3rem] space-y-[1.8rem]">
                <div className="form-group">
                    <label htmlFor="teamName">Team's Name</label>
                    <input id="teamName" className="input-control" placeholder="Enter the name of your group"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" className="input-control" placeholder="Enter your phone number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="input-control" placeholder="Enter your email address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="projectTopic">Project Topic</label>
                    <input id="projectTopic" className="input-control" placeholder="What is your group project topic"/>
                </div>
                <div className="flex space-x-[1.9rem]">
                    <div className="form-group basis-3/5">
                        <label htmlFor="category">Category</label>
                        <select id="category" className="input-control !px-4">
                            <option>Select your category</option>
                        </select>
                    </div>
                    <div className="form-group flex-1">
                        <label htmlFor="size">Group Size</label>
                        <select id="size" className="input-control !px-4">
                            <option>Select</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-[1.5rem] text-brand-pink text-[.9rem] italic text-center">Please review your registration
                details before submitting
            </div>
            <div className="flex py-[1.2rem]">
                <input type="checkbox" id="terms" className="mx-4"/>
                <label htmlFor="terms" className="text-[1rem]">I agreed with the event terms and conditions and privacy
                    policy</label>
            </div>
            <button className="button-primary self-center mt-[.2rem] mb-[2.4rem]">Submit</button>
        </div>
        <div className="desktop_view hidden lg:flex flex-col flex-1 pb-[5.7rem] pr-[10.4rem]">
            <div className="flex-1 flex items-center text-[1.4rem]">
                <div className="absolute top-0 w-screen">
                    <Header registerButtonComponent={
                        <Link to="/register"
                              className="bg-[url('./assets/Register%20Button.png')] w-[17.2rem] h-[5.3rem] inline-grid place-items-center">Register</Link>
                    }/>
                </div>
                <div className="basis-[45.8%] self-stretch grid place-items-center left-image pt-[14.1rem]">
                    <img src={thumbsUpMan} alt=""/>
                </div>
                <div className="bg-[#FFFFFF07] px-[9.1rem] py-[1.9rem] mt-[14.1rem] flex-1">
                    <h2 className="font-semibold font-clash-display text-brand-pink text-[3.2rem] py-[4.6rem]">Register</h2>
                    <div className="flex items-end text-[1.2rem]">
                        <span>Be part of this movement!</span>
                        <img src={walking} alt="" className="pl-2 pb-1"/>
                    </div>
                    <h2 className="mt-[1.9rem] mb-[1rem] text-[2rem]">CREATE YOUR ACCOUNT</h2>
                    <div className="flex flex-col py-[2.3rem] space-y-[2.9rem]">
                        <div className="flex space-x-[3.2rem]">
                            <div className="form-group">
                                <label htmlFor="teamName">Team's Name</label>
                                <input id="teamName" className="input-control"
                                       placeholder="Enter the name of your group"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" className="input-control" placeholder="Enter your phone number"/>
                            </div>
                        </div>
                        <div className="flex space-x-[3.2rem] flex-1">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" className="input-control" placeholder="Enter your email address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectTopic">Project Topic</label>
                                <input id="projectTopic" className="input-control"
                                       placeholder="What is your group project topic"/>
                            </div>
                        </div>
                        <div className="flex space-x-[3.2rem]">
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select id="category" className="input-control">
                                    <option>Select your category</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="size">Group Size</label>
                                <select id="size" className="input-control">
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#FF26B9] text-[.1.2rem] italic">Please review your registration details
                        before submitting
                    </div>
                    <div className="flex py-[1.6rem]">
                        <input type="checkbox" id="terms" className="mx-4"/>
                        <label htmlFor="terms" className="text-[1.2rem]">I agreed with the event terms and conditions
                            and privacy policy</label>
                    </div>
                    <button className="button-primary self-center mt-[.6rem] mb-[6.5rem] w-full">Register Now</button>
                </div>
            </div>
        </div>
    </header>
}

export default Register;
