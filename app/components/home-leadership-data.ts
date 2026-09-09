export type HomeLeadershipMember = {
  serial: string;
  name: string;
  role: string;
  phone: string;
  image: string;
  imageAlt: string;
};

export const homeLeadership: HomeLeadershipMember[] = [
  {
    serial: "01",
    name: "Bibhuti Bhusan Swain",
    role: "President",
    phone: "9692287330",
    image: "/bibhuti.jpeg",
    imageAlt: "Bibhuti Bhusan Swain, President of T2T Skill Foundation",
  },
  {
    serial: "02",
    name: "Bikash Kumar Swain",
    role: "Secretary",
    phone: "9437661164",
    image: "/bikash.jpeg",
    imageAlt: "Bikash Kumar Swain, Secretary of T2T Skill Foundation",
  },
];
