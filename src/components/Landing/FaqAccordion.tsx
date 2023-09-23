import FaqAccordionItem from "./FaqAccordionItem.tsx";

interface Props {
    items: FaqAccordionItem[];
}

function FaqAccordion(props: Props) {
    return <div className="pt-[4.57rem]">
        {props.items.map((item, idx) => (
            <FaqAccordionItem key={idx} title={item.title} content={item.content}/>
        ))}
    </div>;
}

export default FaqAccordion;
