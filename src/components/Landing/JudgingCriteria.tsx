import judges from "../../assets/judges.png";
import "../../styles/Landing/JudgingCriteria.css";
import {useEffect, useRef, useState} from "react";
import observer from "../../observer.ts";
import cn from "classnames";

function JudgingCriteria() {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLElement>(null);
    useEffect(observer(domRef, setVisible), []);

    return <section ref={domRef} id="criteria" className={cn("landing-section pb-[5.87rem] lg:pb-[17.1rem] fade-in-section", {'is-visible': isVisible})}>
        <div className="flex justify-end px-[2.9rem] pt-[7.4rem] lg:pr-[5.3rem] lg:self-end lg:basis-1/2">
            <img src={judges} alt=""/>
        </div>
        <div className="section-content px-[4.5rem] lg:basis-1/2 lg:pt-[9.2rem]">
            <h3 className="text-center lg:text-left">
                Judging Criteria<br/><span className="text-brand-purple-2">Key attributes</span>
            </h3>
            <div className="criterion">
                <h4>Innovation and Creativity: </h4>
                Evaluate the uniqueness and creativity of the solution.<br/>
                Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
            </div>
            <div className="criterion">
                <h4>Functionality: </h4>
                Assess how well the solution works. Does it perform its intended functions effectively and without
                major issues? Judges would consider the completeness and robustness of the solution.
            </div>
            <div className="criterion">
                <h4>Impact and Relevance: </h4>
                Determine the potential impact of the solution in the real world.<br/>
                Does it address a significant problem, and is it relevant to the target audience? Judges would
                assess the potential social, economic, or environmental benefits.
            </div>
            <div className="criterion">
                <h4>Technical Complexity: </h4>
                Evaluate the technical sophistication of the solution. Judges would consider the complexity of the
                code, the use of advanced technologies or algorithms, and the scalability of the solution.
            </div>
            <div className="criterion">
                <h4>Adherence to Hackathon Rules: </h4>
                Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including
                deadlines, use of specific technologies or APIs, and any
                other competition-specific requirements.
            </div>
            <div className='text-center pt-8 lg:text-left'>
                <button className='button__small'>Read More</button>
            </div>
        </div>
    </section>
}

export default JudgingCriteria;
