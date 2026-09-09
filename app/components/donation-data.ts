const asset = (file: string) => `/Donation/${encodeURIComponent(file)}`;

export const donationAmounts = [50, 100, 200, 500] as const;

export type DonationAmount = (typeof donationAmounts)[number];

export const donationUpiId = "t2tskills@oksbi";

export const donationQrImage = "/scanner/Screenshot from 2026-09-05 01-31-50.png";

export const donationHeroImage = "/payment.jpeg";

export const donationCauses = [
  {
    id: "skill-training",
    program: "Vocational Skill Development Programme",
    title: "Support skill training",
    headline: "Help give the underserved a better future",
    copy:
      "Through industry-aligned vocational programmes, T2T Skill Foundation helps rural youth and underserved learners build practical skills, earn certification and move toward dignified livelihoods. Your donation supports training, materials and guidance that turn learning into real opportunity.",
    image: asset("Nähende Frau.jpeg"),
    imageAlt: "Women learning sewing and vocational skills at a training centre",
  },
  {
    id: "bal-vidyalaya",
    program: "Bal Vidyalaya Early Learning Programme",
    title: "Bal Vidyalaya learning",
    headline: "Help underprivileged children stay in school",
    copy:
      "Bal Vidyalaya brings joyful, child-centred education to Sheragada — aligned with NEP 2020 and developed with care for every learner. Contributions help children access engaging classrooms, learning materials and a nurturing environment where curiosity and confidence can grow every day.",
    image: asset("_ (2).jpeg"),
    imageAlt: "Children learning together at Bal Vidyalaya",
  },
  {
    id: "pwd-inclusion",
    program: "PwD Livelihood & Inclusion Programme",
    title: "Inclusive opportunities for PwDs",
    headline: "Help the disadvantaged stand on their feet",
    copy:
      "T2T Skill Foundation runs inclusive programmes that support persons with disabilities through skills training, placement guidance and encouragement toward wage or self-employment. Your generosity helps break barriers and create pathways to independence, dignity and participation in society.",
    image: asset("_ (1).jpeg"),
    imageAlt: "Inclusive skill development support for persons with disabilities",
  },
  {
    id: "women-empowerment",
    program: "Women Skill Training · Apparel Sector",
    title: "Women empowerment through skills",
    headline: "Help women become employed",
    copy:
      "As part of this programme, we provide skill-development training for women and girls, equipping them with industry-relevant abilities for self-employment or wage employment in the apparel sector and beyond. Every contribution strengthens a woman's chance to earn, lead and support her family.",
    image: asset("Saheli Women _  Ametou.jpeg"),
    imageAlt: "Women participating in skill and livelihood training",
  },
] as const;
