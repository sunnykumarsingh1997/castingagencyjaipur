'use client';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Metacube Software',
        category: 'Power BI Dashboard',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        link: '/case-studies/metacube'
    },
    {
        id: 2,
        title: 'Surendra Kumar & Co.',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        link: '/case-studies/surendra-kumar'
    },
    {
        id: 3,
        title: 'Jaipur Pharma Works',
        category: 'AI Data Architecture',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop',
        link: '/case-studies/jaipur-pharma'
    },
];

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,   // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function SelectedWorks() {
    return (
        <section className="py-20 px-6 md:px-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 flex justify-between items-end"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        SELECTED<br />WORKS
                    </h2>
                    <a
                        href="https://www.dribbble.com/castingagencyjaipur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-lg font-medium hover:underline decoration-2 underline-offset-4"
                    >
                        View Dribbble <ExternalLink size={20} />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <a href={project.link} className="block">
                                <Tilt options={defaultOptions} className="group cursor-pointer">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-white dark:bg-neutral-800">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                        <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-sm font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {project.category}
                                            </p>
                                            <h3 className="text-2xl font-bold mt-1">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Tilt>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <a
                        href="https://www.dribbble.com/castingagencyjaipur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:underline decoration-2 underline-offset-4"
                    >
                        View Dribbble <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
