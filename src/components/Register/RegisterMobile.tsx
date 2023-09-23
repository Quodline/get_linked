import thumbsUpMan from "../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import walking from "../../assets/walking.png";

function RegisterMobile({ data, fields, handlers }: RegisterPageProp) {
    return <div className="mobile-view lg:hidden flex flex-col px-8 xs:px-[6.7rem] pt-[2.4rem]">
        <h1 className="font-clash-display text-[1.5rem] text-brand-purple-2 font-bold mb-[3.1rem]">Register</h1>
        <img src={thumbsUpMan} alt="" className="self-center w-[19.5rem] h-[19.5rem]"/>
        <div className="flex justify-center items-end flex-wrap text-[1.2rem]">
            <span>Be part of this movement!</span>
            <img src={walking} alt="" className="pl-2 pb-1"/>
        </div>
        <h2 className="text-[2rem] text-center">CREATE YOUR ACCOUNT</h2>
        <div className="flex flex-col mt-[2.3rem] space-y-[1.8rem]">
            <div className="form-group">
                <label htmlFor="teamName">Team's Name</label>
                <input id="teamName" className="input-control" placeholder="Enter the name of your group"
                       value={fields.teamName} onChange={handlers.setTeamName}/>
                <div className="form-error">{data.errors.team_name}</div>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" className="input-control" placeholder="Enter your phone number"
                       value={fields.phoneNumber} onChange={handlers.setPhoneNumber}/>
                <div className="form-error">{data.errors.phone_number}</div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" className="input-control" placeholder="Enter your email address"
                       value={fields.email} onChange={handlers.setEmail}/>
                <div className="form-error">{data.errors.email}</div>
            </div>
            <div className="form-group">
                <label htmlFor="projectTopic">Project Topic</label>
                <input id="projectTopic" className="input-control" placeholder="What is your group project topic"
                       value={fields.projectTopic} onChange={handlers.setProjectTopic}/>
                <div className="form-error">{data.errors.project_topic}</div>
            </div>
            <div className="flex space-x-[1.9rem]">
                <div className="form-group basis-3/5">
                    <label htmlFor="category">Category</label>
                    <select id="category" className="input-control bg-brand-dark text-gray-500 !px-4"
                            value={fields.category} onChange={handlers.setCategory}>
                        <option>Select your category</option>
                        {data.categories.map(({id, name}) =>
                            <option key={id} value={id}>{name}</option>
                        )}
                    </select>
                    <div className="form-error">{data.errors.category}</div>
                </div>
                <div className="form-group flex-1">
                    <label htmlFor="size">Group Size</label>
                    <select id="size" className="input-control bg-brand-dark text-gray-500 !px-4"
                            value={fields.groupSize} onChange={handlers.setGroupSize}>
                        <option>Select</option>
                        {[1,2,3,4,5,6,7,8,9,10].map(n =>
                            <option key={n} value={n}>{n}</option>)}
                    </select>
                    <div className="form-error">{data.errors.group_size}</div>
                </div>
            </div>
        </div>
        <div className="mt-[1.5rem] text-brand-purple-2 text-[.9rem] italic text-center">Please review your registration
            details before submitting
        </div>
        <div className="flex items-center my-[1.2rem]">
            <input type="checkbox" id="terms" className="mx-4" value={fields.privacyPolicyAccepted}
                   onChange={handlers.setPrivacyPolicyAccepted}/>
            <label htmlFor="terms" className="text-[1rem]">I agreed with the event terms and conditions and privacy
                policy</label>
        </div>
        <div className="form-error">{data.errors.privacy_policy_accepted}</div>
        <button className="button__primary self-center mt-[.2rem] mb-[2.4rem]" onClick={handlers.submitForm}>Submit</button>
    </div>;
}

export default RegisterMobile;
