import cn from "classnames";

interface Prop extends TimelineEventProp {
    orientation?: 'left' | 'right',
    isLast?: boolean
}

function TimelineEventDesktop({id, title, description, date, orientation = 'left', isLast = false}: Prop) {
    return <div className="hidden lg:flex items-center min-h-[16.1rem]">
        <div className={cn("border-brand-purple-2 px-[11.1rem]", {
            'basis-1/2': orientation === 'left',
            'order-1': orientation === 'right',
        })}>
            <h1 className={cn("text-brand-purple-2 text-[2.4rem] font-bold leading-normal mb-[1.3rem]", {
                'text-right': orientation === 'left'
            })}>{title}</h1>
            <p className={cn("leading-[2.39rem]", {
                'text-right': orientation === 'left'
            })}>{description}</p>
        </div>
        <div className="relative self-stretch flex items-center basis-[7.5rem]">
            <div className={cn("w-[.4rem] top-0 h-full mx-[3.55rem] bg-brand-purple-2 absolute -z-10", {
                '!h-1/2': isLast,
            })}></div>
            <div className="p-[1.1rem] bg-brand-dark">
                <span className="timeline-eventNumber__desktop">{id}</span>
            </div>
        </div>
        <div className={cn("text-brand-purple-2 text-[2.4rem] font-bold leading-normal px-[12rem]", {
            'text-right -order-1 basis-1/2 shrink-0': orientation === 'right',
        })}>{date}</div>
    </div>
}

export default TimelineEventDesktop;
