const asset = (file: string) => `/whatwedo/${encodeURIComponent(file)}`;

/** Portrait programme posters — display at natural aspect ratio. */
export const whatWeDoPosterSize = { width: 2554, height: 3304 };

export type WhatWeDoProgramme = {
  id: string;
  label: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  href?: string;
  stat?: string;
};

export const whatWeDoProgrammes: WhatWeDoProgramme[] = [
  {
    id: "bal-vidyalaya",
    label: "Early learning",
    title: "Bal Vidyalaya",
    copy:
      "Joyful, NEP 2020-aligned early childhood education through play, discovery and technology-enabled learning at Sheragada.",
    image: asset("bal vidyalaya.jpg.jpeg"),
    imageAlt: "Bal Vidyalaya programme overview poster",
    href: "/bal-vidyalaya",
    stat: "NEP 2020 aligned",
  },
  {
    id: "sankalp",
    label: "Government scheme",
    title: "SANKALP training & placement",
    copy:
      "Inclusive skill training under SANKALP with convocation, flagging-off and end-to-end support until candidates reach their workplaces.",
    image: asset("sankalp.jpg.jpeg"),
    imageAlt: "SANKALP skilling and placement programme poster",
    href: "/our-work/achievements",
    stat: "120 trained · 92+ placed",
  },
  {
    id: "osda-pltp",
    label: "Placement linked",
    title: "OSDA placement-link training",
    copy:
      "Placement-linked vocational programmes connecting learners in Ganjam and Rayagada with wage employment and industry opportunities.",
    image: asset("pltp.jpg.jpeg"),
    imageAlt: "OSDA placement-linked training programme poster",
    href: "/schemes/osda",
    stat: "500+ trainees",
  },
  {
    id: "nabard-shi",
    label: "Rural livelihoods",
    title: "NABARD SHI initiative",
    copy:
      "Off-farm sector training for unemployed youth through NABARD — building skills beyond agriculture for local communities.",
    image: asset("nabard1.jpg.jpeg"),
    imageAlt: "NABARD self-help initiative training poster",
    href: "/schemes/nabskill",
    stat: "60 SHI candidates",
  },
  {
    id: "nabard-pwd",
    label: "Inclusive rural skills",
    title: "NABARD PwD programme",
    copy:
      "Skilling programme for unemployed PwD youth under NABARD partnerships, supporting rural livelihoods and self-reliance.",
    image: asset("nabard2.jpg.jpeg"),
    imageAlt: "NABARD PwD youth skilling programme poster",
    href: "/schemes/nabskill",
    stat: "60 PwD candidates",
  },
];

export const whatWeDoIntro = {
  eyebrow: "Our work in action",
  title: "Training, inclusion and pathways that last.",
  copy:
    "From early learning at Bal Vidyalaya to government-backed skill schemes and placement-linked programmes, T2T Skill Foundation turns classroom learning into real livelihood outcomes across Odisha.",
};
