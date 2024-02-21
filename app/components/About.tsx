"use client";

import { useRef } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "./HeadingDivider";
import { TimeLine } from "./Timeline";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="À propos de moi" />
                <div 
                    className="flex justify-center mt-7"
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                
                >
                        <Image
                            src="/moi.webp"
                            width={300}
                            height={0}
                            style={{width:'320px', height:'auto'}}
                            alt="ma photo"
                            className="rounded-3xl"
                        />
                </div>
				<div className="pt-10 pb-16 max-w-7xl flex flex-col gap-3">
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
						<p>
							Je m'appelle Matthieu Bonjour. Je me suis reconverti professionnellement et je viens 
                            d'obtenir mon diplôme avec l'école en ligne OpenClassrooms. 
						</p>
						<p className="my-3.5">
							Après quelques années passées dans le commerce. Notamment chez Cash Express et Darty où 
                            j'ai vendu / acheté / testé de nombreux produits multimédia, TV, divers et variés ; j'ai décidé
                            de changer de direction.
						</p>
						<p>Je suis donc, officiellement développeur intégrateur web.</p>
						<p className="my-3.5">
							Je prends, aujourd'hui énormément de plaisir à apprendre de nouveaux langages, et à les 
                            intégrer.
						</p>
						<p>
							Je suis motivé, passionné par ce que j'entreprends et j'ai hâte d'en découvrir toujours 
                            plus. N'hésitez pas à me contacter si vous recherchez un profil comme le mien. Je serais
                            ravi de répondre à vos attentes et d'intégrer une équipe.
						</p>
					</div>
				</div>
				<TimeLine />
			</section>
		</LazyMotion>
	);
}