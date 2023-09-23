import events from "../../data/timeline.ts";
import TimelineEventMobile from "./Timeline/TimelineEventMobile.tsx";
import TimelineEventDesktop from "./Timeline/TimelineEventDesktop.tsx";

function Timeline() {
    return <section id="timeline" className="landing-section flex flex-col">
        <div className="section-content py-[8rem] px-[4.5rem] lg:px-0 lg:basis-1/2">
            <h3 className="text-center">Timeline</h3>
            <p className="section-content-text text-[1.4rem] leading-[2.41rem] mb-[5.6rem] lg:text-center lg:w-[34.6rem] lg:mx-auto">
                Here is the breakdown of the time we
                anticipate using for the upcoming event.</p>
            <div className="flex flex-col space-y-[2.3rem] lg:space-y-0">
                <div className="hidden lg:flex h-[9.4rem]">
                    <div className="basis-1/2"></div>
                    <div className="relative flex items-center basis-[7.5rem]">
                        <div className="w-[.4rem] h-full mx-[3.55rem] bg-brand-purple-2 absolute"></div>
                    </div>
                </div>
                {events.map((event, idx) => <div key={idx} className="timeline-event">
                        <TimelineEventMobile id={idx + 1} title={event.title} description={event.description}
                                             date={event.date}/>
                        <TimelineEventDesktop id={idx + 1} title={event.title} description={event.description}
                                              date={event.date} orientation={idx % 2 === 1 ? 'right' : 'left'}
                                              isLast={idx === events.length - 1}/>
                    </div>
                )}
            </div>
        </div>
    </section>;
}

export default Timeline;
