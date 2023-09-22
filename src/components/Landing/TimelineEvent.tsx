interface Prop extends TimelineEvent {
    id: number
}

function TimelineEvent(props: Prop) {
    return <div>
        <div className="mx-[.82rem] px-[1.9rem] pb-[1.3rem] border-l-2 border-brand-pink">
            <h1 className="text-brand-pink font-bold leading-normal mb-[1.3rem]">{props.title}</h1>
            <p className="leading-[1.92rem]">{props.description}</p>
        </div>
        <div className="flex py-4 space-x-4">
            <span className="timeline-event-number">{props.id}</span>
            <span className="text-brand-pink font-bold leading-normal">{props.date}</span>
        </div>
    </div>;
}

export default TimelineEvent;
