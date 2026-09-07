const activity = (file: string) => `/balvidyalay/activity/${file}`;
const activityVideo = (file: string) => `/activity video/${encodeURIComponent(file)}`;

export type BalPriorityPoint = {
  icon: string;
  title: string;
  description: string;
};

export type BalPriorityPhoto = {
  src: string;
  alt: string;
};

export type BalPriorityVideo = {
  src: string;
  title: string;
};

export type BalPriority = {
  number: string;
  label: string;
  title: string;
  description: string;
  summaryIcon: string;
  summary: string;
  accent: string;
  image: string;
  imageAlt: string;
  videos: BalPriorityVideo[];
  points: BalPriorityPoint[];
};

export const balPriorityIntroPhotos: BalPriorityPhoto[] = [
  {
    src: activity("WhatsApp Image 2026-09-03 at 4.41.23 PM.jpeg"),
    alt: "Children sitting together during morning assembly at Bal Vidyalaya",
  },
  {
    src: activity("WhatsApp Image 2026-09-03 at 4.54.34 PM.jpeg"),
    alt: "Children taking part in an outdoor balancing activity at Bal Vidyalaya",
  },
  {
    src: activity("WhatsApp Image 2026-09-03 at 4.55.16 PM (1).jpeg"),
    alt: "Children with certificates and trophies at a Bal Vidyalaya celebration",
  },
];

export const balPriorities: BalPriority[] = [
  {
    number: "01",
    label: "Priority 01",
    title: "Love to Learn",
    description:
      "In today's fast-changing world, where new technologies and innovations are continuously shifting the way we learn, live and work, developing a love-to-learn attitude in our children becomes our topmost priority. This will help them remain flexible, curious and open to new opportunities, skills and knowledge in future.",
    summaryIcon: "❤️",
    summary:
      "Cultivating a deep, lifelong love of learning that keeps children curious, flexible, and always open to new knowledge and experiences.",
    accent: "#2d7a72",
    image: activity("WhatsApp Image 2026-09-03 at 4.41.50 PM.jpeg"),
    imageAlt: "Children tying rakhis and learning together in a Bal Vidyalaya classroom",
    videos: [
      { src: activityVideo("VID-20251028-WA0020.mp4"), title: "Curious learners in the classroom" },
      { src: activityVideo("video (1).mp4"), title: "Exploring with hands-on play" },
      { src: activityVideo("video (2).mp4"), title: "A joyful start to the day" },
      { src: activityVideo("video (3).mp4"), title: "Children discovering together" },
      { src: activityVideo("video (4).mp4"), title: "Learning through everyday activities" },
      { src: activityVideo("video (5).mp4"), title: "Building a love for learning" },
    ],
    points: [
      {
        icon: "🌱",
        title: "Curiosity-Driven Environment",
        description: "Creating spaces where questions are celebrated and exploration is encouraged every day.",
      },
      {
        icon: "🔄",
        title: "Adaptability for the Future",
        description: "Equipping children with a flexible mindset to embrace change and new learning opportunities.",
      },
      {
        icon: "✨",
        title: "Intrinsic Motivation",
        description: "Fostering internal drive so children pursue learning for the joy of discovery, not just rewards.",
      },
    ],
  },
  {
    number: "02",
    label: "Priority 02",
    title: "Learning to Learn",
    description:
      "In the digital world, where teachers are no longer the main source of information and knowledge, learning to learn becomes crucial. Learning to learn helps our children direct their own learning and understand how they best learn and apply what they study.",
    summaryIcon: "🧠",
    summary:
      "Building the essential meta-skills that allow children to direct their own learning journey, think critically, and apply knowledge effectively.",
    accent: "#5b4f8a",
    image: activity("WhatsApp Image 2026-09-03 at 4.41.33 PM.jpeg"),
    imageAlt: "Teachers leading children in a movement and learning activity at Bal Vidyalaya",
    videos: [
      { src: activityVideo("video (6).mp4"), title: "Following along and learning by doing" },
      { src: activityVideo("video (7).mp4"), title: "Teacher-guided practice session" },
      { src: activityVideo("video (8).mp4"), title: "Children learning step by step" },
      { src: activityVideo("video (9).mp4"), title: "Self-paced classroom activity" },
      { src: activityVideo("video (10).mp4"), title: "Skills practised with guidance" },
      { src: activityVideo("video (11).mp4"), title: "Learning to learn in action" },
    ],
    points: [
      {
        icon: "🗺️",
        title: "Self-Directed Learning",
        description: "Empowering children to set their own learning goals and chart their own path.",
      },
      {
        icon: "🔍",
        title: "Metacognitive Awareness",
        description: "Helping children understand their own thinking patterns and learning styles.",
      },
      {
        icon: "💡",
        title: "Critical Thinking Skills",
        description: "Building the ability to evaluate, analyse and apply knowledge in real-world situations.",
      },
    ],
  },
  {
    number: "03",
    label: "Priority 03",
    title: "Joy of Learning",
    description:
      "Recent research on the responsiveness of the brain reveals that when learning experiences are joyful, the brain is more open to learning. Our curriculum provides ample opportunities to educators to promote joy of learning in such a manner that it ignites curiosity, fosters growth, and empowers individual children to pursue their passions.",
    summaryIcon: "🌟",
    summary:
      "Ensuring every learning experience is joyful and brain-responsive — igniting curiosity, fostering growth, and helping each child pursue their passions.",
    accent: "#e96838",
    image: activity("WhatsApp Image 2026-09-03 at 4.54.56 PM.jpeg"),
    imageAlt: "Children dancing on stage at Bal Vidyalaya Annual Function Celebrations",
    videos: [
      { src: activityVideo("A (1).mp4"), title: "Celebration and cultural performance" },
      { src: activityVideo("A (2).mp4"), title: "Joyful movement on the floor" },
      { src: activityVideo("A (3).mp4"), title: "Playful learning in the hall" },
      { src: activityVideo("A (4).mp4"), title: "Festival day at school" },
      { src: activityVideo("A (5).mp4"), title: "Everyday joy at Bal Vidyalaya" },
    ],
    points: [
      {
        icon: "🎨",
        title: "Play-Based Curriculum",
        description: "Designing activities that blend fun with deep learning to make every lesson memorable.",
      },
      {
        icon: "🧩",
        title: "Brain-Responsive Teaching",
        description: "Applying neuroscience to create classroom experiences that keep young minds engaged.",
      },
      {
        icon: "🌈",
        title: "Passion-Led Exploration",
        description: "Giving children the freedom to discover and pursue what truly excites and inspires them.",
      },
    ],
  },
];

export const balPriorityQuote = {
  text:
    "Every child is a natural learner. Our job is to keep that flame alive — with joy, purpose, and the belief that learning never truly ends.",
  attribution: "Bal Vidyalaya Philosophy",
};
