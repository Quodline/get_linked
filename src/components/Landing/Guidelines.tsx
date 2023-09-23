import rulesAndGuidelines from "../../assets/rules and guidelines.png";

function Guidelines() {
    return <section className="landing-section flex flex-col lg:flex-row lg:items-center">
        <div className="flex justify-start px-[4.8rem] py-[1rem] lg:basis-1/2 lg:order-1">
            <img src={rulesAndGuidelines} alt=""/>
        </div>
        <div className="section-content pb-[4.6rem] px-[4.5rem] lg:pl-[18.4rem] lg:basis-1/2">
            <h3 className="text-center lg:text-left">
                Rules and<br/><span className="text-brand-purple-2">Guidelines</span>
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
}

export default Guidelines;
