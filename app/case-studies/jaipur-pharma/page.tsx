export default function JaipurPharmaCaseStudy() {
    return (
        <main className="min-h-screen px-6 md:px-20 py-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Jaipur Pharmaceutical Works</h1>

            <div className="prose dark:prose-invert max-w-none">
                <h2>Project Overview</h2>
                <p>Jaipur Pharmaceutical Works required a robust data architecture to manage their supply chain and production data, along with a visual dashboard for executive decision-making.</p>

                <h3>The Challenge</h3>
                <p>Data was siloed in different departments (production, inventory, sales), making it impossible to get a holistic view of the business health. Manual reconciliation was prone to errors.</p>

                <h3>The Solution</h3>
                <p>We implemented an end-to-end AI-driven data architecture and visualization solution.</p>
                <ul>
                    <li><strong>Data Warehouse:</strong> Built a centralized data warehouse to aggregate data from all departments.</li>
                    <li><strong>AI Forecasting:</strong> Integrated AI models to predict inventory demand based on historical sales data.</li>
                    <li><strong>Power BI Dashboards:</strong> Created interactive dashboards for tracking production KPIs, inventory levels, and sales performance.</li>
                </ul>

                <h3>Results</h3>
                <p>The solution reduced inventory carrying costs by 20% and improved production planning accuracy by 30%.</p>
            </div>
        </main>
    );
}
