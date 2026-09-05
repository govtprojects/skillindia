import { Breadcrumb, Footer, Navbar, PageHero } from "../components/site";
import { courses, placements } from "../components/data";
import Image from "next/image";

const coverImage = "/about/Classroom studying student child_  _ premium image by rawpixel.com _ audi";

const courseDescriptions: Record<string, string> = {
  "Domestic Data Entry Operator": "Build the keyboard, document-processing and data-handling skills needed for entry-level digital work.",
  "Sewing Machine Operator · AMH/Q0301": "Learn safe machine operation and the core production skills used in apparel manufacturing.",
  "Tailoring Course for Beginners": "Start with measurements, fabric handling, cutting and basic garment construction techniques.",
  "Field Technician – Computers & Peripherals": "Develop practical skills to install, troubleshoot and maintain computers and common peripherals.",
  "Advance Diploma in Computer Application": "Strengthen your digital foundation with workplace-ready computer applications and office tools.",
  "CorelDRAW 2022 Essential Training": "Learn the design workspace, vector graphics and layout tools used to create professional artwork.",
  "AutoCAD Essentials for Civil Engineer": "Create accurate technical drawings and learn essential drafting workflows for civil projects.",
  "Web Design & Development": "Explore the essentials of planning, designing and building clear, usable websites.",
  "Mobile Repairing": "Understand common mobile hardware and software issues, diagnostics and basic repair practices.",
  "Automotive Service Technician": "Gain an introduction to vehicle servicing, inspection and workshop safety procedures.",
  "Introduction to Automobiles": "Discover how vehicle systems work and the foundational concepts behind automotive careers.",
  "Solar Panel Installation Technician": "Learn the fundamentals of solar systems, installation support and safe on-site practices.",
};

const courseImages: Record<string, { src: string; alt: string }> = {
  "Domestic Data Entry Operator": { src: "/folderforuse/Domestic-Data-Entry-1.jpg", alt: "Domestic data entry training" },
  "Sewing Machine Operator · AMH/Q0301": { src: "/folderforuse/sewing-machine-operator-course-500x500.webp", alt: "Sewing machine operator at work" },
  "Tailoring Course for Beginners": { src: "/folderforuse/images.jpeg", alt: "Tailoring and sewing work" },
  "Field Technician – Computers & Peripherals": { src: "/folderforuse/desktop-repair-1.webp", alt: "Desktop computer repair work" },
  "Advance Diploma in Computer Application": { src: "/folderforuse/210222071953.jpg", alt: "Computer application course" },
  "CorelDRAW 2022 Essential Training": { src: "/folderforuse/advance-coreldraw-training-in-borivali-mumbai.webp", alt: "CorelDRAW design training" },
  "AutoCAD Essentials for Civil Engineer": { src: "/folderforuse/courseCovers_9135ad8bfe51_1780145782318.jpg", alt: "Civil design and AutoCAD planning" },
  "Web Design & Development": { src: "/folderforuse/Complete-Guide-to-Web-Development-and-Design.jpg", alt: "Web design and development" },
  "Mobile Repairing": { src: "/folderforuse/mobile-repairing-technician.png", alt: "Mobile repairing technician" },
  "Automotive Service Technician": { src: "/folderforuse/mechanic-and-vehicle-technician.jpg", alt: "Automotive service technician" },
  "Introduction to Automobiles": { src: "/folderforuse/automotive-technician.png", alt: "Automotive technician at work" },
  "Solar Panel Installation Technician": { src: "/folderforuse/23aa.jpg", alt: "Solar panel installation training" },
};

export default function Work() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumb current="Our Work" />
        <div className="work-hero-banner">
          <PageHero eyebrow="Training programmes" title="Skills for the work ahead." copy="Professional programmes spanning digital, technical, apparel and automotive skills." imageSrc={coverImage} imageAlt="Skills for the work ahead cover image" imageBelow />
        </div>
        <section id="training" className="section programmes-section">
          <div className="programmes-heading">
            <div><p className="eyebrow">Explore our courses</p><h2 className="section-heading">Learning with a clear career direction.</h2></div>
            <p>Each programme combines job-relevant learning with a straightforward view of duration, eligibility and certification availability.</p>
          </div>
          <div className="programme-summary" aria-label="Programme summary">
            <div><b>{courses.length}</b><span>programmes available</span></div>
            <div><b>4</b><span>skill sectors represented</span></div>
            <div><b>NSDC</b><span>certification status shown per course</span></div>
          </div>
          <div className="course-grid course-grid--detailed">
            {courses.map(([name, duration, language, sector, eligibility, price, cert], index) => (
              <article key={name} className="course">
                <div className="course-image"><Image src={courseImages[name].src} alt={courseImages[name].alt} width={640} height={360} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>
                <div className="course-topline"><span>Programme {String(index + 1).padStart(2, "0")}</span><b>{sector === "—" ? "Skill training" : sector}</b></div>
                <h3>{name}</h3>
                <p className="course-description">{courseDescriptions[name]}</p>
                <dl>
                  <div><dt>Duration</dt><dd>{duration}</dd></div>
                  <div><dt>Language</dt><dd>{language}</dd></div>
                  <div><dt>Eligibility</dt><dd>{eligibility}</dd></div>
                  <div><dt>Course fee</dt><dd>{price}</dd></div>
                </dl>
                <footer><span>NSDC certification</span><b>{cert}</b></footer>
              </article>
            ))}
          </div>
          <div className="notice"><div><span>Need help choosing a programme?</span><b>Bibhuti Bhusan Swain · Training Department Head</b></div><a href="tel:+919692287330">Call 96922 87330 <span aria-hidden="true">→</span></a></div>
        </section>
        <section id="placements" className="work-placements">
          <div className="section work-placements-inner">
            <div className="work-placements-heading">
              <div><p className="eyebrow">Placements</p><h2 className="section-heading">Training that leads somewhere.</h2></div>
              <p>Explore current fresher-friendly roles with employers across India. Our placement team helps learners take the next step after training.</p>
            </div>
            <div className="work-placement-summary"><b>890</b><span>current vacancies across six employer opportunities</span><a href="tel:+919437661164">Talk to our placement team <i aria-hidden="true">→</i></a></div>
            <div className="work-placement-list">
              {placements.map(([role, company, location, type, vacancies, salary]) => <article key={role}>
                <div><span>{company}</span><h3>{role}</h3></div>
                <dl><div><dt>Location</dt><dd>{location}</dd></div><div><dt>Role type</dt><dd>{type}</dd></div><div><dt>Vacancies</dt><dd>{vacancies}</dd></div><div><dt>Salary</dt><dd>{salary}</dd></div></dl>
              </article>)}
            </div>
          </div>
        </section>
        <section id="success-stories" className="section work-outcomes">
          <div className="work-outcomes-heading"><div><p className="eyebrow">Success stories</p><h2 className="section-heading">From learning to a livelihood.</h2></div><p>Every programme is designed to help learners turn new skills into more confident, independent futures.</p></div>
          <div className="work-story-grid">
            <article><span>01</span><h3>Practical skills</h3><p>Hands-on learning helps learners build confidence for real workplace tasks.</p></article>
            <article><span>02</span><h3>Career support</h3><p>Guidance, interview preparation and employer connections make the next step clearer.</p></article>
            <article><span>03</span><h3>Inclusive growth</h3><p>Training creates opportunities for both general candidates and Persons with Disabilities.</p></article>
          </div>
        </section>
        <section id="achievements" className="work-achievements">
          <div className="section work-achievements-inner">
            <div><p className="eyebrow">Achievements</p><h2>Progress you can see.</h2></div>
            <div className="work-achievements-content">
              <figure className="work-achievement-image">
                <Image src="/dhenkanala_1.jpg" alt="T2T Skill Foundation achievement programme in Dhenkanal" width={5400} height={3600} sizes="(max-width: 900px) 86vw, 42vw" />
              </figure>
              <div className="work-achievement-stats"><article><b>2019</b><span>established to create skill and employment opportunities in Odisha</span></article><article><b>890</b><span>current vacancies available through employer opportunities</span></article><article><b>PwD</b><span>inclusive training focus across programmes and partnerships</span></article></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
