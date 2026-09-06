export type BalOffering = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  tag: string;
  accent: string;
};

export const balOfferings: BalOffering[] = [
  {
    icon: "📋",
    title: "540 Days Pedagogical Lesson Plans",
    description:
      "Meticulously crafted, day-by-day lesson plans covering all learning domains — aligned with NCF 2022 to guide educators through every step of the academic journey.",
    bullets: ["Structured daily learning pathways", "Activity-based, child-centric approach", "Covers all developmental domains"],
    tag: "Curriculum",
    accent: "#5b4f8a",
  },
  {
    icon: "📚",
    title: "Books / Students Kit",
    description:
      "Beautifully designed, age-appropriate books and student kits that make learning tangible, playful, and deeply engaging for every young learner.",
    bullets: ["Age-appropriate printed materials", "Hands-on activity workbooks", "Parent-child engagement guides"],
    tag: "Resources",
    accent: "#c94f7a",
  },
  {
    icon: "🎓",
    title: "Capacity Building with Certificate",
    description:
      "Comprehensive teacher training programmes that empower educators with the latest pedagogical skills, tools, and strategies — all leading to a recognised certification.",
    bullets: ["Workshop-based professional development", "Online & offline training modules", "Nationally recognised certification"],
    tag: "Training",
    accent: "#2d7a72",
  },
  {
    icon: "✅",
    title: "Good Practices",
    description:
      "A curated repository of evidence-based classroom best practices from leading educators — sharing what works to continuously elevate teaching standards across all schools.",
    bullets: ["Peer-reviewed teaching strategies", "Real classroom success stories", "Continuous improvement framework"],
    tag: "Pedagogy",
    accent: "#3a8f52",
  },
  {
    icon: "📝",
    title: "Question Papers & Worksheets",
    description:
      "A rich library of NCF-aligned question papers and worksheets designed to reinforce learning, track progress, and identify each child's unique strengths.",
    bullets: ["Grade-wise structured assessments", "Creative & critical thinking prompts", "Regular formative assessment tools"],
    tag: "Assessment",
    accent: "#d4a72c",
  },
  {
    icon: "🎮",
    title: "Interactive Learning Assets",
    description:
      "Engaging digital resources including videos, animations, and interactive activities that bring abstract concepts to life and make every lesson an adventure.",
    bullets: ["Animated explainer videos", "Gamified learning activities", "Digital storytelling tools"],
    tag: "Digital",
    accent: "#4f9f6b",
  },
  {
    icon: "🏫",
    title: "School Resource Management System",
    description:
      "A powerful, easy-to-use digital platform for school administrators to manage resources, track progress, monitor attendance, and streamline operations seamlessly.",
    bullets: ["Centralized school dashboard", "Real-time progress monitoring", "Administrative automation tools"],
    tag: "Management",
    accent: "#e96838",
  },
  {
    icon: "📱",
    title: "Parents & Educators' Apps",
    description:
      "Dedicated mobile applications for parents and educators to stay connected, track learning milestones, share updates, and collaborate on every child's growth journey.",
    bullets: ["Real-time child progress tracking", "Parent-teacher communication hub", "Learning activity suggestions"],
    tag: "Technology",
    accent: "#163c38",
  },
  {
    icon: "🌿",
    title: "Art of Parenting Session",
    description:
      "Specially designed workshops and sessions for parents, equipping them with practical tools, insights, and strategies to become active partners in their child's learning and development.",
    bullets: ["Expert-led parenting workshops", "Child psychology insights", "Home learning environment tips"],
    tag: "Community",
    accent: "#7a4f8a",
  },
  {
    icon: "🥽",
    title: "Augmented Reality Apps by IIT Delhi",
    description:
      "Pioneering AR-powered learning experiences developed in collaboration with IIT Delhi — transforming textbooks into immersive, 3D interactive worlds that fascinate young minds.",
    bullets: ["3D interactive learning models", "IIT Delhi research-backed content", "Curriculum-aligned AR experiences"],
    tag: "Innovation",
    accent: "#3a7fb8",
  },
  {
    icon: "🏆",
    title: "Awards & Recognition",
    description:
      "A structured rewards system that celebrates student achievements, milestones, and growth — motivating every child to aim higher and take pride in their progress.",
    bullets: ["Milestone celebration programme", "School-level recognition events", "National competition pathways"],
    tag: "Recognition",
    accent: "#c97a2c",
  },
];

export const balOfferStats = [
  { value: "540+", label: "Lesson Plans" },
  { value: "11", label: "Core Offerings" },
  { value: "NEP", label: "2020 Aligned" },
  { value: "IIT", label: "Delhi Partner" },
] as const;

export const balOfferBadges = ["NCF 2022 Aligned", "IIT Delhi", "NEP 2020", "Digital Ready"] as const;
