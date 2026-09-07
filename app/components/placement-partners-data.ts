const partnerAsset = (file: string) => `/placement partner/${encodeURIComponent(file)}`;

export type PlacementPartner = {
  name: string;
  logo: string;
};

export const placementPartners: PlacementPartner[] = [
  { name: "Amazon", logo: partnerAsset("amazone.png") },
  { name: "Flipkart", logo: partnerAsset("flipcart.png") },
  { name: "Tata Electronics", logo: partnerAsset("tata electronic.png") },
  { name: "Tata Motors", logo: partnerAsset("tata motors.png") },
  { name: "Foxconn", logo: partnerAsset("foxcoon.png") },
  { name: "Reliance", logo: partnerAsset("relince.png") },
  { name: "Croma", logo: partnerAsset("croma.png") },
  { name: "DMart", logo: partnerAsset("dimart.png") },
  { name: "FirstCry", logo: partnerAsset("fustcry.png") },
  { name: "FNP", logo: partnerAsset("fnp.png") },
  { name: "Fenasta", logo: partnerAsset("fenasta.png") },
  { name: "First Step", logo: partnerAsset("first step.png") },
  { name: "M Bazaar", logo: partnerAsset("m bzar.png") },
  { name: "Mas Pran", logo: partnerAsset("mas pran.png") },
  { name: "Modnik", logo: partnerAsset("modnik.png") },
  { name: "Ram Raj", logo: partnerAsset("ram raj.png") },
  { name: "Visal", logo: partnerAsset("visal.png") },
  { name: "Young Brand", logo: partnerAsset("young brand.png") },
  { name: "AforServer", logo: partnerAsset("aforserver.png") },
  { name: "V2 Retail", logo: partnerAsset("v2.png") },
];
