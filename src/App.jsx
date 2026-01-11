import CharacterSection from "./Components/CharacterSection/CharacterSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import gsap from "gsap";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function initSmoothScroll() {
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        ignoreMobileResize: true,
        normalizeScroll: true,
        effects: true,
        smooth: 2.5,
    });
}

export default function App() {
    useEffect(() => {
        initSmoothScroll();
    }, []);
    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Navbar />
                    <HeroSection />
                    <CharacterSection />
                </div>
            </div>
        </>
    );
}
