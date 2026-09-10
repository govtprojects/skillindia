export type BalContactMember = {
  name: string;
  role: string;
  phone: string;
  accent: string;
};

export const balContactMembers: BalContactMember[] = [
  {
    name: "Madhusmita Pradhan",
    role: "Principal",
    phone: "9348057276",
    accent: "#e96838",
  },
  {
    name: "Goutam Pradhan",
    role: "Vice Principal",
    phone: "9938064314",
    accent: "#1f5249",
  },
  {
    name: "Priya Sahu",
    role: "Study Managing Director",
    phone: "7735745214",
    accent: "#2a6a5e",
  },
  {
    name: "Preeti Sahu",
    role: "HOD of Bal Vidyalaya",
    phone: "7978027359",
    accent: "#c45d2c",
  },
];

export const balContactLocation = {
  name: "Bal Vidyalaya Sheragada",
  address: "Near TVS Showroom, Sheragada, Ganjam, Odisha-761106",
  mapsUrl:
    "https://www.google.com/maps/place/CSC+BAL+VIDYALAYA+SHERAGADA/@19.5115465,84.6046071,17z/data=!3m1!4b1!4m6!3m5!1s0x3a22cb4423fa601f:0x832c27713961eefa!8m2!3d19.5115465!4d84.6046071!16s%2Fg%2F11tfn9f33d?entry=ttu",
  embedUrl:
    "https://maps.google.com/maps?q=CSC+BAL+VIDYALAYA+SHERAGADA,+Padhi+St,+Sheragada,+Odisha+761106&hl=en&z=17&output=embed",
  lat: 19.5115465,
  lng: 84.6046071,
};

export const balContactHighlights = [
  {
    icon: "✉️",
    label: "School enquiries",
    value: "t2tskills@gmail.com",
    href: "mailto:t2tskills@gmail.com",
  },
  {
    icon: "🕐",
    label: "Office hours",
    value: "Monday – Saturday · 10:00 AM – 05:00 PM",
  },
  {
    icon: "🎓",
    label: "Programme",
    value: "Tech-enabled playful learning · NEP 2020 aligned",
  },
];
