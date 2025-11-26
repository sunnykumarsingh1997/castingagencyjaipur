'use client';

import { motion } from 'framer-motion';
import { Palette, BarChart3, Database } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Creative Web Design',
        description: 'Crafting visually stunning and user-centric digital experiences that leave a lasting impression.',
        icon: Palette,
    },
    {
        id: 2,
        title: 'Power BI Dashboards',
        description: 'Transforming complex data into clear, actionable insights through interactive and intuitive dashboards.',
        icon: BarChart3,
    },
    {
        id: 3,
        title: 'AI Data Architecture',
        description: 'Building robust and scalable data infrastructures to power intelligent applications and analytics.',
        icon: Database,
    },
];

export default function Services() {
    return (
        <section className="py-20 px-6 md:px-20 relative overflow-hidden">
            {/* Background gradients for glassmorphism effect */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-16 text-center md:text-left"
                >
                    SERVICES
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-white/20 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={32} className="text-neutral-900 dark:text-neutral-100" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                                {service.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
