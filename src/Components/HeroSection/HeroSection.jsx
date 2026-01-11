import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroText from "../HeroText/HeroText";
import { useEffect, useRef } from "react";
import Petals from "../Petals/Petals";
import "./HeroSection.css";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);


export default function HeroSection() {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const hutRef = useRef(null);
    const rocksRef = useRef(null);
    const transitionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.6,
                },
            })
            .to(bgRef.current, { y: -100, ease: "none" }, 0)
            .to(hutRef.current, { y: -180, ease: "power1.out" }, 0)
            .to(rocksRef.current, { y: -260, ease: "power4.out"}, 0)
            .to(transitionRef.current, { y: -260, ease: "power4.out" }, 0)
            .to(contentRef.current, { opacity: 0, duration: 0.2, ease: "power3.out", }, 0);
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="bg-layer" ref={bgRef} />
            <div className="hut-layer" ref={hutRef} />
            <div className="rocks-layer" ref={rocksRef} />
            <div className="hero-transition" ref={transitionRef} />

            <div className="hero-content" ref={contentRef}>
                <Petals count={20} />
                <HeroText />
            </div>
        </section>
    );
}
