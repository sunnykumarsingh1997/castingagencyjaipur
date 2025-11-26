import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Services from "@/components/Services";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Hero />
      <SelectedWorks />
      <Services />
      <ContactModal />

      <footer className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Casting Agency Jaipur</h3>
            <p className="text-sm text-neutral-500">
              EPIP, Sitapura Industrial Area,<br />
              Sitapura, Jaipur,<br />
              Rajasthan 302022
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm text-neutral-500 mb-2">castingagencyjaipur@gmail.com</p>
            <a href="/contact" className="text-sm text-neutral-900 dark:text-neutral-100 hover:underline">Contact Us</a>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100">About Us</a></li>
              <li><a href="/terms" className="hover:text-neutral-900 dark:hover:text-neutral-100">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><a href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-neutral-900 dark:hover:text-neutral-100">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-neutral-500 text-sm pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p>© {new Date().getFullYear()} Casting Agency Jaipur. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
