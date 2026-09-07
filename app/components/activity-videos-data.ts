const activityVideo = (file: string) => `/activity video/${encodeURIComponent(file)}`;

export type ActivityVideo = {
  src: string;
  title: string;
};

export const activityVideos: ActivityVideo[] = [
  { src: activityVideo("VID-20251028-WA0020.mp4"), title: "Skill development centre activity" },
  { src: activityVideo("video (1).mp4"), title: "Hands-on training session" },
  { src: activityVideo("video (2).mp4"), title: "Practical learning in the lab" },
  { src: activityVideo("video (3).mp4"), title: "Learners at work" },
  { src: activityVideo("video (4).mp4"), title: "Classroom skill practice" },
  { src: activityVideo("video (5).mp4"), title: "Training workshop moment" },
  { src: activityVideo("video (6).mp4"), title: "Learners building confidence" },
  { src: activityVideo("video (7).mp4"), title: "On-the-job preparation" },
  { src: activityVideo("video (8).mp4"), title: "Group learning activity" },
  { src: activityVideo("video (9).mp4"), title: "Centre training highlights" },
  { src: activityVideo("video (10).mp4"), title: "Skills in action" },
  { src: activityVideo("video (11).mp4"), title: "Training day recap" },
  { src: activityVideo("A (1).mp4"), title: "Campus activity showcase" },
  { src: activityVideo("A (2).mp4"), title: "Learner demonstration" },
  { src: activityVideo("A (3).mp4"), title: "Practical session clip" },
  { src: activityVideo("A (4).mp4"), title: "Training centre moments" },
  { src: activityVideo("A (5).mp4"), title: "Everyday learning at T2T" },
];
