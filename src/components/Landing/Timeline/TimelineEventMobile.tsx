function TimelineEventMobile(props: TimelineEventProp) {
    return <div className="lg:hidden">
        <div className="mx-[.82rem] px-[1.9rem] pb-[1.3rem] border-l-2 border-brand-purple-2">
            <h1 className="text-brand-purple-2 font-bold leading-normal mb-[1.3rem]">{props.title}</h1>
            <p className="leading-[1.92rem]">{props.description}</p>
        </div>
        <div className="flex py-4 space-x-4">
            <span className="timeline-eventNumber">{props.id}</span>
            <span className="text-brand-purple-2 font-bold leading-normal">{props.date}</span>
        </div>
    </div>;
}

export default TimelineEventMobile;
