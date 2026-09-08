const programLogo = (file: string) => `/program logo (2)/${encodeURIComponent(file)}`;

export type SchemeLogo = {
  src: string;
  alt: string;
};

export const schemeLogos: Record<string, SchemeLogo> = {
  pmgdisha: { src: programLogo("pm disha.jpg"), alt: "PMGDISHA programme logo" },
  "pmkvy-rpl": { src: programLogo("Pmkvy Logo Vector.svg .png"), alt: "PMKVY programme logo" },
  "nsdc-paid-segment": { src: programLogo("nsdc.jpg"), alt: "NSDC programme logo" },
  sipda: { src: programLogo("sipda.jpg"), alt: "SIPDA programme logo" },
  "csr-projects": { src: programLogo("csr eficor.jpg"), alt: "CSR EFFICOR programme logo" },
  "cemca-ofc": { src: programLogo("csc acadamy.png"), alt: "CSC Academy programme logo" },
  "future-workspace": { src: programLogo("aif.jpg"), alt: "American India Foundation programme logo" },
  osda: { src: programLogo("osds logo.png"), alt: "OSDA programme logo" },
  nabskill: { src: programLogo("nab.png"), alt: "NABARD programme logo" },
  pmdaksh: { src: programLogo("pm daksh.jpg"), alt: "PM-DAKSH programme logo" },
};
