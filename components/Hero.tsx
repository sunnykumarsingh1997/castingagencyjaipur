'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
            >
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-neutral-900 dark:text-neutral-100">
                    PINKY<br />RAWAT
                </h1>
                <div className="h-1 w-24 bg-neutral-900 dark:bg-neutral-100 mb-8" />
                <p className="text-xl md:text-3xl font-light text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                    Web Designer & Developer specializing in <span className="font-medium text-neutral-900 dark:text-neutral-100">Power BI</span> and <span className="font-medium text-neutral-900 dark:text-neutral-100">AI Data Architecture</span>.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative w-full md:w-[500px] aspect-[3/4] mt-12 md:mt-0"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl -z-10 blur-2xl" />
                <Image
                    src="/hero-image.png"
                    alt="Pinky Rawat"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                />
            </motion.div>
        </section>
    );
}
