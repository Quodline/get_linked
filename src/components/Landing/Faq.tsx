import FaqAccordion from "./Faq/FaqAccordion.tsx";
import faqs from "../../data/faqs.ts";
import thinkingMan from "../../assets/thinking_man.png";

function Faq() {
    return <section id="faq" className="landing-section flex flex-col lg:flex-row lg:items-center">
        <div className="section-content pt-[6rem] px-[4.5rem] lg:pl-[18.4rem] lg:basis-1/2">
            <h3 className="text-center lg:text-left">
                Frequently Asked<br/><span className="text-brand-purple-2">Question</span>
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
}

export default Faq;
