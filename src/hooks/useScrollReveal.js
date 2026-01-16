import { useEffect, useRef } from "react";

const useScrollReveal = ({
    threshold = 0.2,
    once = true,
} = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.remove(
                        "opacity-0",
                        "translate-y-10",
                        "translate-x-10",
                        "-translate-x-10"
                    );
                    el.classList.add("opacity-100", "translate-y-0", "translate-x-0");

                    if (once) observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once]);

    return ref;
};

export default useScrollReveal;
