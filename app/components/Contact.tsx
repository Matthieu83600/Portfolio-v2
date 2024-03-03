"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "./HeadingDivider";
import ContactWrapper from "./ContactForm";

export function ContactSection() {
    const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <section id="contact" className="section">
                <HeadingDivider title="Me contacter" />
                <div
                    tabIndex="0"
                    ref={ref}
                    className="text-xl font-light leading-relaxed"
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <ContactWrapper />
                </div>
            </section>
        </LazyMotion>
    )
}