type SchemePhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const gallery = (folder: string, files: string[], description: string): SchemePhoto[] =>
  files.map((file, index) => ({
    src: `${folder}/${file}`,
    alt: `${description} — photo ${index + 1}`,
  }));

export const schemePhotos: Record<string, SchemePhoto[]> = {
  pmgdisha: gallery("/pmgdisha", ["pmkvy (13).jpg", "pmkvy (14).jpg", "pmkvy (15).jpg", "pmkvy (16).jpg", "pmkvy (17).jpg", "pmkvy (20).jpg"], "PMGDISHA digital skills training"),
  "pmkvy-rpl": gallery("/pmgkvy", ["pmkvy (3).jpg", "pmkvy (4).jpg", "pmkvy (5).jpg", "pmkvy (18).jpg", "pmkvy (19).jpg", "pmkvy (21).jpg"], "PMKVY vocational training"),
  "nsdc-paid-segment": [
    { src: "/cemca/IMG-20250308-WA0095.jpg", alt: "NSDC learners during technical training" },
    { src: "/cemca/IMG-20250308-WA0096.jpg", alt: "NSDC skills session in progress" },
    { src: "/cemca/IMG-20250308-WA0097.jpg", alt: "Learners taking part in an NSDC programme" },
    { src: "/cemca/IMG-20250308-WA0098.jpg", alt: "Practical workplace skills training" },
    { src: "/about/assessment (17).jpg", alt: "Skills assessment for NSDC learners" },
    { src: "/about/PHOTO11 (8).jpeg", alt: "NSDC programme participants" },
  ],
  sipda: gallery("/sipda", ["IMG-20250621-WA0119.jpg", "IMG-20250621-WA0122.jpg", "training (3).jpeg", "training (4).jpeg", "training (5).jpeg", "training (9).jpeg"], "SIPDA inclusive skills training"),
  "csr-projects": [
    ...gallery("/csr", ["RAGAM EXPORT.jpg", "RAGAM EXPORT1.jpg", "RAGAM EXPORT2.jpg", "RAGAM EXPORT4.jpg", "RAGAM EXPORT5.jpg"], "CSR-supported learner programme"),
    { src: "/about/RAGAM EXPORT4.jpg", alt: "CSR programme learners in a professional development session" },
  ],
  "cemca-ofc": gallery("/cemca", ["IMG-20250306-WA0032.jpg", "IMG-20250306-WA0033.jpg", "IMG-20250306-WA0034.jpg", "IMG-20250306-WA0035.jpg", "IMG-20250306-WA0036.jpg", "IMG-20250306-WA0037.jpg"], "CEMCA technical training for women and PwD learners"),
  "future-workspace": gallery("/future_workspace", ["GP2.jpg", "GP1.jpg", "EXM10.jpg", "EXAM6.jpg", "EXAM5.jpg", "QrLd7jbXr8NcECagTuQvRv-OMV06fPsfwQJS_T2lxvM=_plaintext_638101396316577879.jpg"], "Future Workspace Skills Training"),
  osda: gallery("/osda", ["PHOTO22 (6).jpeg", "PHOTO22 (7).jpeg", "PHOTO22 (8).jpeg", "PHOTO22 (9).jpeg", "PHOTO24 (2).jpeg", "PHOTO24 (3).jpeg"], "OSDA placement-linked skills training"),
  nabskill: gallery("/nabard", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"], "NABARD community skills training"),
  pmdaksh: [
    { src: "/sipda/IMG-20250621-WA0119.jpg", alt: "PMDAKSH inclusive vocational training" },
    { src: "/sipda/IMG-20250621-WA0122.jpg", alt: "PMDAKSH programme learners" },
    { src: "/sipda/training (3).jpeg", alt: "PMDAKSH hands-on learning session" },
    { src: "/sipda/training (4).jpeg", alt: "Inclusive skills training activity" },
    { src: "/sipda/training (5).jpeg", alt: "PMDAKSH learners developing workplace skills" },
    { src: "/sipda/training (9).jpeg", alt: "PMDAKSH training participants" },
  ],
};
