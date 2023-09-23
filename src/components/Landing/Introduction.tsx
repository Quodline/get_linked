import theBigIdea from "../../assets/the big idea 1.png";
import {useEffect, useRef, useState} from "react";
import observer from "../../observer.ts";
import cn from "classnames";

function Introduction() {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLElement>(null);
    useEffect(observer(domRef, setVisible), []);

    return <section ref={domRef} id="overview" className={cn("landing-section fade-in-section", {'is-visible': isVisible})}>
        <div className="flex justify-end px-[7.1rem] py-[2.9rem] lg:pr-[10.9rem] lg:py-[6.2rem] lg:basis-1/2">
            <img src={theBigIdea} alt=""/>
        </div>
        <div className="section-content px-[4.2rem] py-[2.9rem] lg:basis-1/2">
            <h3 className="text-center lg:text-left">
                Introduction to getlinked<br/><span className="text-brand-purple-2">tech Hackathon 1.0</span>
            </h3>
            <p className="section-content-text">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                day: to shape the future. Whether you're
                a coding genius, a design maverick, or a
                concept wizard, you'll have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
    </section>;
}

export default Introduction;
