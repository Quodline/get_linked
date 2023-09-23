import {RefObject} from "react";

export default function observer (domRef: RefObject<HTMLElement>, setVisible: Function) {
    return () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        domRef.current && observer.observe(domRef.current);

        return () => {
            if (domRef.current)
                observer.unobserve(domRef.current);
        };
    }
}
