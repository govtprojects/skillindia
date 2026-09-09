import { Footer, Navbar } from "../components/site";
import { DonationCausesSection } from "../components/donation-causes-section";
import { DonationPanel } from "../components/donation-panel";

export default function DonationPage() {
  return (
    <>
      <Navbar />
      <main className="donation-page">
        <DonationPanel />
        <DonationCausesSection />
      </main>
      <Footer />
    </>
  );
}
