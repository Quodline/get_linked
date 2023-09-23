import "./Landing.css";
import chain from '../assets/chain.png';
import spark from '../assets/spark.png';
import theBigIdea from '../assets/the big idea 1.png';
import rulesAndGuidelines from '../assets/rules and guidelines.png';
import judges from '../assets/judges.png';
import thinkingMan from '../assets/thinking_man.png';
import Header from "../components/Header.tsx";
import Countdown from "../components/Landing/Countdown.tsx";
import FaqAccordion from "../components/Landing/FaqAccordion.tsx";
import faqs from "../data/faqs.ts";
import TimelineEvent from "../components/Landing/TimelineEvent.tsx";
import events from "../data/timeline.ts";
import {Link} from "react-router-dom";

function Landing() {
    return <>
        <header className="flex flex-col min-h-[85.5rem] lg:min-h-[90rem]">
            <div className="border-b border-fade-gray "><Header/></div>

            <div className="flex-1 banner flex flex-col items-center lg:items-start lg:pl-[12.8rem] bg-[url('./assets/Hackathon-guy.png')] bg-contain lg:bg-auto lg:bg-right-bottom bg-no-repeat bg-bottom">
                <h1 className="mt-[3.1rem] font-montserrat text-[1.6rem] italic font-bold lg:self-end lg:text-[3.6rem] lg:pr-[5.5rem]">
                    Igniting a Revolution in HR Innovation
                </h1>
                <div className="mt-[5.8rem] font-clash-display text-[3.2rem] font-bold lg:text-[8rem]">
                    <h2 className="text-center lg:text-left">getlinked Tech</h2>
                    <h2 className="flex justify-center items-center">
                        <span>Hackathon</span>
                        <span className="text-brand-pink">1.0</span>
                        <img src={chain} alt="" className="w-[3.2rem] lg:w-[8rem]"/>
                        <img src={spark} alt="" className="w-[3.2rem] lg:w-[8rem]"/>
                    </h2>
                </div>
                <p className="font-montserrat text-[1.3rem] leading-[2.16rem] px-[6.3rem] lg:text-[2rem] lg:leading-[3.32rem] lg:px-0 lg:max-w-[52.2rem] text-center lg:text-left">
                    Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <Link to="/register" className="mt-[2.4rem] lg:mt-[4.1rem] button-primary">Register</Link>
                <Countdown />
            </div>
        </header>
        <section className="banner-section">
            <div className="flex justify-end px-[7.1rem] py-[2.9rem] lg:pr-[10.9rem] lg:py-[6.2rem] lg:basis-1/2">
                <img src={theBigIdea} alt=""/>
            </div>
            <div className="section-content px-[4.2rem] py-[2.9rem] lg:basis-1/2">
                <h3 className="text-center lg:text-left">
                    Introduction to getlinked<br/><span className="text-brand-pink">tech Hackathon 1.0</span>
                </h3>
                <p className="section-content-text">
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                    day: to shape the future. Whether you're
                    a coding genius, a design maverick, or a
                    concept wizard, you'll have the chance to transform your ideas into reality. Solving
                    real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </section>
        <section className="banner-section flex flex-col lg:flex-row lg:items-center">
            <div className="flex justify-start px-[4.8rem] py-[1rem] lg:basis-1/2 lg:order-1">
                <img src={rulesAndGuidelines} alt=""/>
            </div>
            <div className="section-content px-[4.5rem] lg:pl-[18.4rem] lg:basis-1/2">
                <h3 className="text-center lg:text-left">
                    Rules and<br/><span className="text-brand-pink">Guidelines</span>
                </h3>
                <p className="section-content-text">
                    Our tech hackathon is a melting pot of
                    visionaries, and its purpose is as clear as day:
                    to shape the future. Whether you're a coding
                    genius, a design maverick, or a concept
                    wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world
                    problems, pushing the boundaries of
                    technology, and creating solutions that can
                    change the world, that's what we're all about!</p>
            </div>
        </section>
        <section className="banner-section pb-[5.87rem] lg:pb-[17.1rem]">
            <div className="flex justify-end px-[2.9rem] pt-[7.4rem] lg:pr-[5.3rem] lg:self-end lg:basis-1/2">
                <img src={judges} alt=""/>
            </div>
            <div className="section-content px-[4.5rem] lg:basis-1/2 lg:pt-[9.2rem]">
                <h3 className="text-center lg:text-left">
                    Judging Criteria<br/><span className="text-brand-pink">Key attributes</span>
                </h3>
                <div className="judges-criteria">
                    <h4>Innovation and Creativity: </h4>
                    Evaluate the uniqueness and creativity of the solution.<br/>
                    Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                </div>
                <div className="judges-criteria">
                    <h4>Functionality: </h4>
                    Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                </div>
                <div className="judges-criteria">
                    <h4>Impact and Relevance: </h4>
                    Determine the potential impact of the solution in the real world.<br/>
                    Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                </div>
                <div className="judges-criteria">
                    <h4>Technical Complexity: </h4>
                    Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                </div>
                <div className="judges-criteria">
                    <h4>Adherence to Hackathon Rules: </h4>
                    Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any
                    other competition-specific requirements.
                </div>
                <div className='text-center pt-8 lg:text-left'>
                    <button className='button-primary px-[1.4rem] py-[.8rem] text-[1.2rem] lg:text-[1.6rem] lg:px-[4.2rem] lg:py-[1.6rem]'>Read More</button>
                </div>
            </div>
        </section>
        <section className="banner-section flex flex-col lg:flex-row lg:items-center">
            <div className="section-content pt-[6rem] px-[4.5rem] lg:pl-[18.4rem] lg:basis-1/2">
                <h3 className="text-center lg:text-left">
                    Frequently Asked<br/><span className="text-brand-pink">Question</span>
                </h3>
                <p className="section-content-text">
                    We got answers to the questions that you might
                    want to ask about <strong className="font-bold">getlinked Hackathon 1.0</strong></p>
                <FaqAccordion items={faqs}/>
            </div>
            <div className="flex justify-start px-[4.8rem] py-[4.9rem] lg:px-0 lg:py-[3.9rem] lg:basis-1/2 lg:order-1">
                <img src={thinkingMan} alt=""/>
            </div>
        </section>
        <section className="banner-section flex flex-col">
            <div className="section-content py-[8rem] px-[4.5rem] lg:pl-[18.4rem] lg:basis-1/2">
                <h3 className="text-center">Timeline</h3>
                <p className="section-content-text text-[1.4rem] leading-[2.41rem] mb-[5.6rem] lg:text-center lg:w-[34.6rem] lg:mx-auto">
                    Here is the breakdown of the time we
                    anticipate using for the upcoming event.</p>
                <div className="flex flex-col space-y-[2.3rem]">
                    {events.map((event, idx) =>
                        <TimelineEvent key={idx} id={idx+1} title={event.title} description={event.description}
                                       date={event.date}/>
                    )}
                </div>
            </div>
        </section>
    </>
}

export default Landing;
