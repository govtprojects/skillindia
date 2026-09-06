export type AchievementHighlight = {
  label: string;
  value: string;
};

export type AchievementMilestone = {
  id: string;
  year: string;
  title: string;
  summary: string;
  body: string;
  highlights: AchievementHighlight[];
  image: string;
  imageAlt: string;
  video?: string;
};

const asset = (file: string) => `/achievement/${encodeURIComponent(file)}`;

export const achievementStats = [
  { value: "120", label: "candidates trained under SANKALP (2025–26 FY)" },
  { value: "92+", label: "successful placements under SANKALP" },
  { value: "59", label: "PwD candidates placed in 2025" },
  { value: "100%", label: "Placement Excellence Award recognition" },
] as const;

export const achievementMilestones: AchievementMilestone[] = [
  {
    id: "dhenkanal-2022",
    year: "2022",
    title: "Empowering Differently-Abled Youth at Kamakhyanagar, Dhenkanal",
    summary:
      "Skill Development Centre, Sheragada achieved a significant milestone in inclusive empowerment when Union Minister Shri Dharmendra Pradhan handed appointment letters to 15 PwD candidates trained by the institution.",
    body:
      "During a special event, Shri Dharmendra Pradhan, Union Minister of Education and Skill Development & Entrepreneurship, personally handed over appointment/offer letters to 15 Persons with Disabilities (PwD) candidates trained by our institution. Recognizing our commitment to skill building and employment creation, he also presented Skill Development Centre, Sheragada with the 100% Placement Excellence Award.",
    highlights: [
      { label: "Year of recognition", value: "2022" },
      { label: "Location", value: "Kamakhyanagar, Dhenkanal" },
      { label: "Dignitary", value: "Shri Dharmendra Pradhan (Hon'ble Union Minister)" },
      { label: "Impact", value: "15 Divyang (PwD) candidates placed in active roles" },
      { label: "Award", value: "100% Placement Achievement Award for Skill Development Centre, Sheragada" },
    ],
    image: asset("dhenkanala_1.jpg"),
    imageAlt: "Kaushal Mahotsav event with offer letters presented to trained candidates in Dhenkanal",
  },
  {
    id: "sambalpur-kaushal",
    year: "Kaushal Mahotsav",
    title: "Empowering Divyang Youth at Kaushal Mahotsav, Sambalpur",
    summary:
      "At Kaushal Mahotsav in Sambalpur, 29 Divyang (PwD) candidates trained by our center received official job offer letters from Shri Dharmendra Pradhan.",
    body:
      "Shri Dharmendra Pradhan personally interacted with our candidates, encouraging their efforts and praising their determination. In recognition of our dedication to driving meaningful career opportunities for persons with disabilities, our training center was once again honored with a prestigious award by the Minister.",
    highlights: [
      { label: "Event", value: "Kaushal Mahotsav, Sambalpur" },
      { label: "Chief guest", value: "Shri Dharmendra Pradhan (Hon'ble Union Minister)" },
      { label: "Impact", value: "29 Divyang (PwD) candidates received offer letters" },
      { label: "Special moment", value: "Personal interaction between the Hon'ble Minister and our candidates" },
      { label: "Recognition", value: "Award presented for excellence in skill training and placement" },
    ],
    image: asset("sambalpur.jpg"),
    imageAlt: "Kaushal Mahotsav Sambalpur with candidates receiving offer letters",
  },
  {
    id: "ganjam-2025",
    year: "2025",
    title: "Championing Inclusive Employment — 59 Divyang Candidates Placed",
    summary:
      "Dakshyata Vikas Kendra, Sheragada secured job placements for 59 PwD candidates across diverse job roles and sectors.",
    body:
      "During a special event, Shri Dibya Jyoti Parida, Collector & District Magistrate, Ganjam, personally distributed the official appointment letters to our successful candidates. The District Collector commended our initiative and assured full administrative support to further scale our skill development programs.",
    highlights: [
      { label: "Year", value: "2025" },
      { label: "Organization", value: "Dakshyata Vikas Kendra, Sheragada" },
      { label: "Chief guest", value: "Shri Dibya Jyoti Parida, Collector & District Magistrate, Ganjam" },
      { label: "Impact", value: "59 PwD (Divyang) candidates placed across various sectors" },
      { label: "Recognition", value: "Official assurance of continued support for PwD skill development initiatives" },
    ],
    image: asset("succ..jpg"),
    imageAlt: "Offer letter distribution ceremony for placed candidates in Ganjam",
  },
  {
    id: "official-visit-2025",
    year: "2025",
    title: "High-Level Inspection & Guidance at Skill Development Centre, Sheragada",
    summary:
      "Senior officials from the Skill Development & Technical Education Department, Government of Odisha, inspected training programs and interacted with candidates.",
    body:
      "The delegation was led by Ms. Deepti Mahapatro, Joint Secretary, Skill Development & Technical Education (SD&TE) Department, Government of Odisha, along with Shri Phalguni Sahu Naik, Director, South Zone. Officials conducted a comprehensive walkthrough of the training facilities and engaged in an inspiring interactive session with the trainees.",
    highlights: [
      { label: "Distinguished visitors", value: "Ms. Deepti Mahapatro (Joint Secretary, SD&TE Odisha) and Shri Phalguni Sahu Naik (Director, South Zone)" },
      { label: "Interactive session", value: "Officials motivated candidates on career trajectories, employment potential, and placement opportunities" },
      { label: "Government support", value: "Dignitaries assured trainees of complete government support toward achieving 100% successful placement" },
      { label: "Facility review", value: "The delegation commended the quality of training, infrastructure, and operational standards maintained at the center" },
    ],
    image: asset("nua odisha director.jpg"),
    imageAlt: "Official visit to the Sheragada training centre for sewing machine operator and apparel training",
  },
  {
    id: "convocation-fy2026",
    year: "FY 2026",
    title: "Convocation Ceremony & Visit by Collector Keerthi Vasan V, IAS",
    summary:
      "Shri Keerthi Vasan V, IAS, Collector & District Magistrate of Ganjam, handed appointment and job offer letters to successful graduates during a convocation at Sheragada.",
    body:
      "Candidates secured promising placements with leading global and national corporate brands, including Tata Electronics, Foxconn, Spark Minda, and UNO Minda. The District Magistrate shared invaluable career guidance, encouraging candidates to remain patient, resilient, and adaptive as they transition outside their home regions for professional development.",
    highlights: [
      { label: "Dignitary", value: "Shri Keerthi Vasan V, IAS (Collector & District Magistrate, Ganjam)" },
      { label: "Event", value: "Convocation Ceremony & Special Inspection Visit (FY 2026)" },
      { label: "Top recruiter placements", value: "Tata Electronics, Foxconn, Spark Minda, and UNO Minda" },
      { label: "Mentorship", value: "Career guidance on patience, resilience, and adaptability for professional development" },
      { label: "District support", value: "Assured continuous support from the District Collectorate for local skill enhancement and placement initiatives" },
    ],
    image: asset("JOB FAIR.jpg"),
    imageAlt: "Convocation and placement event with corporate recruiters",
  },
  {
    id: "sankalp-2025-26",
    year: "2025–26 FY",
    title: "Driving Skill Excellence Under the SANKALP Scheme",
    summary:
      "Under the Skill Acquisition and Knowledge Awareness for Livelihood Promotion (SANKALP) program, 120 candidates were trained in Ganjam district and over 92 secured successful job placements.",
    body:
      "A joint Convocation and Flagging-off Ceremony was organized for the graduating batch. The event was graced by distinguished leadership from the Skill Council for Persons with Disability (SCPwD), including the CEO (SCPwD) Mr. Ravindra, Assistant Vice President Mr. Deepak Saini, and Manager – Operations Mr. Mohit Sharma. Candidates were provided complete support and personally escorted by our team directly to their workplace locations.",
    highlights: [
      { label: "Scheme & governance", value: "SANKALP Initiative (Ministry of Skill Development & Entrepreneurship, Govt. of India)" },
      { label: "Location & scope", value: "Ganjam District (2025–2026 FY)" },
      { label: "Training & outcome", value: "120 candidates trained; 92+ candidates successfully placed" },
      { label: "Dignitaries", value: "CEO (SCPwD) Mr. Ravindra, AVP Mr. Deepak Saini, and Manager – Operations Mr. Mohit Sharma" },
      { label: "Milestone event", value: "Joint Convocation and Flagging-off Ceremony with transportation and onboarding assistance for placed candidates" },
    ],
    image: asset("sankalp.jpg"),
    imageAlt: "SANKALP convocation and flagging-off ceremony for placed candidates",
  },
];

export const achievementFeatureVideos = [
  {
    src: asset("VID-20260906-WA0001.mp4"),
    year: "2022",
    title: "Empowering Differently-Abled Youth at Kamakhyanagar, Dhenkanal",
  },
  {
    src: asset("VID-20260906-WA0003.mp4"),
    year: "2025",
    title: "High-Level Inspection & Guidance at Skill Development Centre, Sheragada",
  },
  {
    src: asset("VID-20260906-WA0002(1).mp4"),
    year: "2025",
    title: "Championing Inclusive Employment — 59 Divyang Candidates Placed",
  },
  {
    src: asset("VID-20260906-WA0000.mp4"),
    year: "Kaushal Mahotsav",
    title: "Empowering Divyang Youth at Kaushal Mahotsav, Sambalpur",
  },
] as const;
