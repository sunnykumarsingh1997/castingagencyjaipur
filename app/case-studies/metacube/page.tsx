import Image from 'next/image';

export default function MetacubeCaseStudy() {
    return (
        <main className="min-h-screen px-6 md:px-20 py-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Metacube Software (M1 Office)</h1>
            <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                {/* Placeholder for actual case study image */}
            </div>

            <div className="prose dark:prose-invert max-w-none">
                <h2>Project Overview</h2>
                <p>Metacube Software, a leading product engineering services company, required a comprehensive overhaul of their internal dashboard systems for their M1 Office location. The goal was to streamline project tracking and resource allocation.</p>

                <h3>The Challenge</h3>
                <p>The existing system was fragmented, with data scattered across multiple spreadsheets and legacy tools. This led to inefficiencies in resource management and delayed project reporting.</p>

                <h3>The Solution</h3>
                <p>We designed and developed a custom Power BI dashboard integrated with a modern web interface.</p>
                <ul>
                    <li><strong>Unified Data View:</strong> Consolidated data from Jira, Salesforce, and HR systems into a single source of truth.</li>
                    <li><strong>Real-time Analytics:</strong> Enabled management to see resource utilization in real-time.</li>
                    <li><strong>Interactive UI:</strong> Built a React-based front-end wrapper for easier data entry and report generation.</li>
                </ul>

                <h3>Results</h3>
                <p>The new system reduced reporting time by 40% and improved resource utilization efficiency by 15% within the first quarter of implementation.</p>
            </div>
        </main>
    );
}
