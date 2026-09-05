import Image from "next/image";
import { Footer, Navbar } from "../components/site";
import { BalGalleryCarousel } from "../components/bal-gallery-carousel";

const photos = [
  { src: "/balvidyalay/IMG-20250731-WA0061.jpg", alt: "Bal Vidyalaya children taking part in an interactive classroom activity", label: "Learning through movement" },
  { src: "/balvidyalay/ind11 (40).jpeg", alt: "Bal Vidyalaya children with their certificates and teachers", label: "Celebrating every achievement" },
  { src: "/balvidyalay/WhatsApp Image 2026-09-03 at 4.41.50 PM.jpeg", alt: "Children collaborating in a Bal Vidyalaya classroom activity", label: "Learning with care" },
  { src: "/balvidyalay/A (16).jpg", alt: "Children enjoying a guided group learning session", label: "Joyful classrooms" },
  { src: "/balvidyalay/ind11 (39).jpeg", alt: "Children taking part in a creative school activity", label: "Creative expression" },
  { src: "/balvidyalay/WhatsApp Image 2026-09-03 at 4.54.24 PM.jpeg", alt: "Children and teachers sharing a school moment", label: "Growing together" },
  { src: "/balvidyalay/ind11 (47).jpeg", alt: "Bal Vidyalaya learners enjoying class time", label: "Everyday discovery" },
  { src: "/balvidyalay/IMG-20250731-WA0064.jpg", alt: "Children learning through a guided activity", label: "Learning by doing" },
];

export default function BalVidyalaya() {
  return <><Navbar /><main className="bal-page">
    <section className="bal-hero"><Image src="/balvidyalay/IMG-20250731-WA0061.jpg" alt="Bal Vidyalaya children taking part in an interactive classroom activity" fill priority quality={90} sizes="100vw" /><div className="bal-hero-shade" /><div className="bal-hero-content"><p className="eyebrow">Bal Vidyalaya School · Sheragada</p><h1>Small hands.<br /><em>Bright futures.</em></h1><p>A joyful early-learning space where children explore, create and grow with confidence.</p><a className="bal-hero-link" href="#our-story">Discover our approach <span>↓</span></a></div><div className="bal-hero-tag"><span>Learning happens everywhere</span><b>Play · Explore · Discover</b></div></section>
    <section className="section bal-intro" id="our-story"><div><p className="eyebrow">A place to belong</p><h2>A happy beginning to a lifelong love of learning.</h2></div><div className="bal-intro-copy"><p>Bal Vidyalaya School, Sheragada brings early childhood education to life through active, child-centred learning. Every day gives children new ways to ask questions, express themselves and learn together.</p><p>Developed by T2T Skill Foundation in association with IIT Delhi, the programme aligns with NEP 2020 and supports age-appropriate learning through engaging activities, discovery and care.</p><div className="bal-intro-signoff"><span>Our promise</span><b>Every child is seen, heard and encouraged.</b></div></div></section>
    <section className="bal-principles"><div className="section"><p className="eyebrow">Our learning world</p><div className="bal-principles-heading"><h2>Built around children and their wonder.</h2><p>We make room for play, friendship, movement and meaningful discovery in every learning experience.</p></div><div className="bal-principles-grid"><article><span>01</span><h3>Learn by doing</h3><p>Hands-on activities make ideas memorable and help children build skills naturally.</p></article><article><span>02</span><h3>Grow with confidence</h3><p>Encouragement and care help every child find their voice and feel proud to participate.</p></article><article><span>03</span><h3>Discover together</h3><p>Shared play and guided exploration nurture curiosity, kindness and connection.</p></article></div></div></section>
    <section className="section bal-gallery-section"><div className="bal-gallery-heading"><div><p className="eyebrow">Life at Bal Vidyalaya</p><h2>Little moments. Big learning.</h2></div><p>From creative classroom activities to proud celebrations, these are the moments that make our school feel like home.</p></div><BalGalleryCarousel photos={photos} /></section>
    <section className="bal-closing"><div className="bal-closing-image"><Image src="/balvidyalay/ind11 (40).jpeg" alt="Bal Vidyalaya students proudly holding certificates" fill sizes="(max-width: 900px) 100vw, 48vw" quality={90} /></div><div className="bal-closing-copy"><p className="eyebrow">Every day matters</p><h2>Here, every milestone is worth celebrating.</h2><p>We celebrate curiosity, courage and the small steps that help children become confident learners.</p><a href="/contact" className="btn">Talk to our team →</a></div></section>
  </main><Footer /></>;
}
