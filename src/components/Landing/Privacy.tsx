import userPrivacy from "../../assets/user-privacy.png";

function Privacy() {
    return <section id="privacy" className="landing-section flex flex-col lg:flex-row lg:items-center pt-[7.1rem] lg:pt-[16.9rem] lg:pb-[11.5rem]">
        <div className="section-content pb-[4.6rem] px-[4.5rem] lg:pl-[18.4rem] lg:basis-3/5">
            <h3 className="section-content-text">
                Privacy Policy and<br/><span className="text-brand-purple-2">Terms</span>
            </h3>
            <p className="section-content-text">Last updated on September 12, 2023</p>
            <p className="section-content-text mt-[2.8rem] leading-[2.26rem]">
                Below are our privacy & policy, which outline a
                lot of goodies. it’s our aim to always take of our
                participant</p>
            <div className="border rounded-[.5rem] border-brand-purple-2 mt-[3rem] px-[1.2rem] pt-[4.5rem] lg:px-[7.2rem]">
                <div className="section-content-text !leading-[2.6rem]">At getlinked tech Hackathon 1.0, we
                    value your privacy and are committed
                    to protecting your personal information.
                    This Privacy Policy outlines how we collect,
                    use, disclose, and safeguard your data
                    when you participate in our tech hackathon
                    event. By participating in our event, you
                    consent to the practices described in this
                    policy.</div>
                <div className="px-[.4rem] pt-[2.1rem]">
                    <h4 className="font-bold text-[1.3rem] text-brand-purple-2 leading-[2.81rem]">Licensing Policy</h4>
                    <h5 className="font-bold leading-[2.6rem]">Here are terms of our Standard License:</h5>
                    <ul className="flex flex-col space-y-[2.4rem] pt-[2.1rem] px-[1.8rem] lg:pt-[1.8rem] list-image-[url(./assets/green-check.png)]">
                        <li className="pl-[1.4rem]">The Standard License grants you a
                            non-exclusive right to navigate and
                            register for our event</li>
                        <li className="pl-[1.4rem]">You are licensed to use the item
                            available at any free source sites, for
                            your project developement</li>
                    </ul>
                </div>
                <div className='text-center pt-[2.8rem] pb-[4.97rem]'>
                    <button className='button__small'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-start px-[4.8rem] pb-[8.3rem] lg:basis-1/2">
            <img src={userPrivacy} alt=""/>
        </div>
    </section>
}

export default Privacy;
