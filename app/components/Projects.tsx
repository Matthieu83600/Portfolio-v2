import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { jsonData } from '../utils/dataHandler';

export function LastProjects() {
    const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: true });
    const latestProjects = jsonData.lastprojects;

    if (!latestProjects) {
        return null;
    }

	return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {latestProjects.map((project) => 
                <article
                    key={project.id}
                    ref={cardRef}
                    className="flex flex-col rounded-lg bg-gray-100 dark:bg-slate-900"
                    style={{
                        transform: isInView	? "none" : "translateY(250px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
                    }}
                >
                    <figure>
                    <div className="w-full h-full my-5 pl-5 sm:pl-10">
                            <Carousel
                                key={project.id}
                                ariaLabel="Carrousel"
                                autoPlay
                                infiniteLoop
                                interval={3000}
                                showArrows={false}
                                showIndicators={false}
                                showStatus={false}
                                showThumbs={false}
                                stopOnHover={false}
                                width="90%"
                            >
                                {project.pictures.map((image, index) => (
                                    <Image 
                                        key={index} 
                                        src={image} 
                                        alt="Vues du site internet du projet" 
                                        width={300}
                                        height={300}
                                    />
                                ))}
                            </Carousel>
                    </div>
                    </figure>
                    <div className="flex-[2] px-5 py-6 text-center flex flex-col gap-10">
                    <header className="flex-1 flex items-center justify-start flex-col gap-3">
                        <h3 tabIndex="0" className="text-2xl font-bold">
                            {project.title}
                        </h3>
                        <p tabIndex="0" className="leading-7 font-light">
                            {project.description}
                        </p>
                    </header>
                    <footer className="flex flex-col gap-10">
                        {!!project.tags.length && (
                            <div className="flex flex-wrap justify-center gap-3">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        tabIndex="0"
                                        className="px-2 text-sm leading-normal rounded bg-gray-300 dark:bg-blue-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="flex justify-around gap-10">
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-5 hover:bg-gray-300 dark:hover:bg-blue-700 rounded-lg p-2"
                                    title="Go to Github repository"
                                >
                                    <VscSourceControl />
                                    <span>Source</span>
                                </Link>
                            )}
                            {project.site && (
                                <Link
                                    href={project.site}
                                    target="_blank"
                                    className="flex items-center gap-5 hover:bg-gray-300 dark:hover:bg-blue-700 rounded-lg p-2"
                                    title="Go to live address"
                                >
                                    <FiExternalLink />
                                    <span>Demo</span>
                                </Link>
                            )}
                            </div>
                        </footer>
                    </div>
            </article>
            )}  
        </div>
	);
}