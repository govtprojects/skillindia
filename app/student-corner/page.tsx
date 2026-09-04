import Image from "next/image";
import { Navbar, Footer, PageHero, Breadcrumb } from "../components/site";
import { StudentGallery } from "../components/student-gallery";

export default function Student() {
  return <><Navbar /><main><Breadcrumb current="Student Corner" /><PageHero eyebrow="Student corner" title="Your next step starts here." copy="Start your application for a T2T Skill Foundation training programme." imageSrc="/about/wM9Lgo2FIhLjgTGs1PUWcS0H3K_1Up_mS-BEpmRUm3mDX8chYYGXaZCDXUwluHAIv0GI9Cv9VuucVIlpW9xpQanTGgAk-2SlBfTrFQmWQXpIgRfIX18Wa0RAAASN2y8BGI615FDWTjhxZ-XqRItgZiHmZ0LDIt3h3_acPAq4w7UAthewdb55gfcovgaHshQC.jpeg" imageAlt="Student learning in a training session" imageOverlay /><section className="section apply-section"><div><h2>Apply for training.</h2><p>Use the application link to begin. For advice about choosing a programme, contact the Training Department.</p><a className="btn" target="_blank" rel="noreferrer" href="https://forms.gle/omAC3Mu6itU1YSyJ8">Open application form →</a></div><div className="qr"><Image src="/scanner/Screenshot from 2026-09-05 01-31-50.png" alt="QR code to open the training application form" width={230} height={230} quality={100} /><span>Scan to apply</span></div></section><StudentGallery /></main><Footer /></>;
}
