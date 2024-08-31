"use client";

import { useEffect, useState } from "react";
import "./BigHeader.css";
import { FocusCardsDemo } from "./FocusCardsDemo";
import Footer from "./Footer";

export function BigHeader() {
    
    const [scrollBackground, setScrollBackground] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined" && window.scrollY > (window.innerHeight * 0.05)) {
                setScrollBackground(true);
            } else {
                setScrollBackground(false);
            }
        };

        if (typeof window !== "undefined") {
            handleScroll();

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <div
            className={`w-full flex flex-col items-center justify-center transition-background ${
                scrollBackground ? "bg-black" : ""
            }`}
        >
            <div className="text-center h-screen flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100">
                    Ethan Bittles
                </h1>
                <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-gray-300">
                    Hi! My name is Ethan Bittles and I am a computer engineer at Georgia Tech who likes to draw and learn languages (just because I like it doesn't mean I'm good at it {"\u{1F605}"})
                </p>
            </div>
           <div className="my-10 w-full flex items-center justify-center cards">
                <FocusCardsDemo />
           </div>
           <Footer />
        </div>
    );
}
