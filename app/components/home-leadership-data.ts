export type HomeLeadershipMember = {
  serial: string;
  name: string;
  role: string;
  phone: string;
  image: string;
  imageAlt: string;
  message: string | string[];
};

export const homeLeadership: HomeLeadershipMember[] = [
  {
    serial: "01",
    name: "Bibhuti Bhusan Swain",
    role: "President (T2T Skill Foundation)",
    phone: "9692287330",
    image: "/bibhuti.jpeg",
    imageAlt: "Bibhuti Bhusan Swain, President of T2T Skill Foundation",
    message:
      "Joining with us in skill development mission is a fantastic initiative. We are looking to upskill young generation, train them or partner as an organization, these programs are highly effective for boosting career growth and economic opportunities.",
  },
  {
    serial: "02",
    name: "Bikash Kumar Swain",
    role: "Secretary (T2T Skill Foundation)",
    phone: "9437661164",
    image: "/bikash.jpeg",
    imageAlt: "Bikash Kumar Swain, Secretary of T2T Skill Foundation",
    message: [
      "Youth is our energy. Skill gives that energy direction.",
      "Skilling is the foundation for Vikasit Bharat 2047.",
      "Youth + Skill + Technology + Scale = Developed India",
    ],
  },
];
