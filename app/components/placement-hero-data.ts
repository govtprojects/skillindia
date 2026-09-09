const asset = (file: string) => `/placement_toor/${encodeURIComponent(file)}`;

export type PlacementHeroBackground = {
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export const placementHeroBackgrounds: PlacementHeroBackground[] = [
  {
    image: asset("placement.jpg"),
    imageAlt: "T2T Skill Foundation placement programme",
    objectPosition: "center center",
  },
  {
    image: asset("placement2.jpg"),
    imageAlt: "Candidates at a T2T placement event",
    objectPosition: "center center",
  },
  {
    image: asset("placement3.jpg"),
    imageAlt: "Placement support at T2T Skill Foundation",
    objectPosition: "center center",
  },
];
