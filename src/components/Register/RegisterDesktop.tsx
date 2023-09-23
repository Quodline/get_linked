import Header from "../Header.tsx";
import {Link} from "react-router-dom";

import thumbsUpMan from "../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import walking from "../../assets/walking.png";

function RegisterDesktop({data, fields, handlers}: RegisterPageProp) {
    return <div className="desktop_view hidden lg:flex flex-col flex-1 pb-[5.7rem] pr-[10.4rem]">
        <div className="flex-1 flex items-center text-[1.4rem]">
            <div className="absolute top-0 w-screen">
                <Header registerButtonComponent={
                    <Link to="/register"
                          className="bg-[url('./assets/Register-Button.png')] w-[17.2rem] h-[5.3rem] inline-grid place-items-center">Register</Link>
                }/>
            </div>
            <div className="basis-[45.8%] self-stretch grid place-items-center left-image pt-[14.1rem]">
                <img src={thumbsUpMan} alt=""/>
            </div>
            <div className="bg-[#FFFFFF07] px-[9.1rem] py-[1.9rem] mt-[14.1rem] flex-1">
                <h2 className="font-semibold font-clash-display text-brand-purple-2 text-[3.2rem] py-[4.6rem]">Register</h2>
                <div className="flex items-end text-[1.2rem]">
                    <span>Be part of this movement!</span>
                    <img src={walking} alt="" className="pl-2 pb-1"/>
                </div>
                <h2 className="mt-[1.9rem] mb-[1rem] text-[2rem]">CREATE YOUR ACCOUNT</h2>
                <div className="flex flex-col py-[2.3rem] space-y-[2.9rem]">
                    <div className="flex space-x-[3.2rem]">
                        <div className="form-group">
                            <label htmlFor="teamName">Team's Name</label>
                            <input required id="teamName" className="input-control" value={fields.teamName}
                                   onChange={handlers.setTeamName} placeholder="Enter the name of your group"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input required id="phone" className="input-control" value={fields.phoneNumber}
                                   onChange={handlers.setPhoneNumber} placeholder="Enter your phone number"/>
                        </div>
                    </div>
                    <div className="flex space-x-[3.2rem] flex-1">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input required id="email" className="input-control" value={fields.email}
                                   onChange={handlers.setEmail} placeholder="Enter your email address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectTopic">Project Topic</label>
                            <input required id="projectTopic" className="input-control" value={fields.projectTopic}
                                   onChange={handlers.setProjectTopic} placeholder="What is your group project topic"/>
                        </div>
                    </div>
                    <div className="flex space-x-[3.2rem]">
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select id="category" value={fields.category} onChange={handlers.setCategory}
                                    className="input-control bg-brand-dark text-gray-500">
                                <option>Select your category</option>
                                {data.categories.map(({id, name}) =>
                                    <option key={id} value={id}>{name}</option>
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">Group Size</label>
                            <select id="size" value={fields.groupSize} onChange={handlers.setGroupSize}
                                    className="input-control bg-brand-dark text-gray-500">
                                <option>Select</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n =>
                                    <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="text-[#FF26B9] text-[.1.2rem] italic">Please review your registration details
                    before submitting
                </div>
                <div className="flex py-[1.6rem] items-center">
                    <input type="checkbox" id="terms" className="mx-4" checked={fields.privacyPolicyAccepted}
                           onChange={handlers.setPrivacyPolicyAccepted}/>
                    <label htmlFor="terms" className="text-[1.2rem]">I agreed with the event terms and conditions
                        and privacy policy</label>
                </div>
                <button className="button__primary self-center mt-[.6rem] mb-[6.5rem] w-full" onClick={handlers.submitForm}>Register Now</button>
            </div>
        </div>
    </div>;
}

export default RegisterDesktop;
