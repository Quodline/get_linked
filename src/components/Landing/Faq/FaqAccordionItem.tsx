import {useState} from "react";
import cn from "classnames";

function FaqAccordionItem(props: FaqAccordionItem) {
    const [expanded, setExpanded] = useState(false);

    return <div className="border-b border-brand-purple-2 pt-[1.33rem] pb-[.9rem]">
        <div className="flex justify-between items-end">
            <h4 className="leading-[1.8rem] flex-1">{props.title}</h4>
            <button className="text-brand-purple-2 text-[2rem] leading-[1rem]" onClick={() => setExpanded(!expanded)}>
                {expanded ? '-' : '+'}
            </button>
        </div>
        <p className={"pt-4 transition-all duration-1000"+' '+cn({
            'scale-y-0 h-0 opacity-0': !expanded,
            'scale-y-100 h-auto': expanded,
        })}>{props.content}</p>
    </div>
}

export default FaqAccordionItem;
