import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // matchMedia returns a boolean based on if the window matches a certain media query passed in!
        const media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => {
            // True or false if the window matches with the value or query submitted
            setMatches(media.matches);
        }

        // EventListener every time the window changing sizes
        media.addEventListener("change", listener);

        return () => {
            // The event listener is removed when query changes, when the component using it unmount
            media.removeEventListener("change", listener);
        }
    }, [matches, query]);

    return matches
}