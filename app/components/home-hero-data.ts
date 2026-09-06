const asset = (file: string) => `/scrollimage/${encodeURIComponent(file)}`;

export type HomeHeroBackground = {
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export const homeHeroCopy = {
  eyebrow: "Learn today. Lead tomorrow.",
  title: "Skills that move",
  titleEm: "lives forward.",
  copy: "Practical vocational learning, inclusive opportunity, and a path to sustainable employment for every learner.",
};

export const homeHeroBackgrounds: HomeHeroBackground[] = [
  {
    image: asset("CONV (17).jpeg"),
    imageAlt: "Convocation ceremony at T2T Skill Foundation",
    objectPosition: "center right",
  },
  {
    image: asset("IMG-20241216-WA0123.jpg.jpeg"),
    imageAlt: "Learners at a T2T training session",
    objectPosition: "center 38%",
  },
  {
    image: asset("photo1 (11).jpeg"),
    imageAlt: "T2T learners during a placement programme",
    objectPosition: "center right",
  },
  {
    image: asset("WhatsApp Image 2026-09-06 at 4.53.29 PM.jpeg"),
    imageAlt: "Bal Vidyalaya learners at T2T Skill Foundation",
    objectPosition: "center right",
  },
  {
    image: asset("IMG-20241121-WA0075.jpg.jpeg"),
    imageAlt: "Inclusive skill training at T2T",
    objectPosition: "center 38%",
  },
  {
    image: asset("A (3).jpg.jpeg"),
    imageAlt: "T2T Skill Foundation training achievement",
    objectPosition: "center right",
  },
  {
    image: asset("WhatsApp Image 2026-09-06 at 4.54.56 PM.jpeg"),
    imageAlt: "Training centre group at T2T Skill Foundation",
    objectPosition: "58% center",
  },
  {
    image: asset("aiease_1762397554902.jpg.jpeg"),
    imageAlt: "T2T Skill Foundation learners",
    objectPosition: "center right",
  },
];

export const slideIntervalMs = 2000;
