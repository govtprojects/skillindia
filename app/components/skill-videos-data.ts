export const skillVideo = (file: string) => `/SKILL VIDEO/${encodeURIComponent(file)}`;

export type SkillVideo = {
  src: string;
  title: string;
};

export const skillVideos: SkillVideo[] = [
  { src: skillVideo("national.mp4"), title: "National programme training" },
  { src: skillVideo("PMKVY1.mp4"), title: "PMKVY skill development" },
  { src: skillVideo("networking.mp4"), title: "Networking skills session" },
  { src: skillVideo("PCB.mp4"), title: "PCB and electronics training" },
  { src: skillVideo("ftcp.mp4"), title: "FTCP training session" },
  { src: skillVideo("ups.mp4"), title: "UPS and electrical training" },
  { src: skillVideo("project1.mp4"), title: "Project-based learning" },
  { src: skillVideo("success 1.mp4"), title: "Training success story" },
  { src: skillVideo("1.mp4"), title: "Centre training highlights" },
  { src: skillVideo("2.mp4"), title: "Hands-on practical session" },
];
