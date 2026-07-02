export interface ClientLogo {
  name: string;
  logo: string;
  /** Extra visual scale for logos that read smaller than others at the same height (default 1). */
  scale?: number;
}

export const clients: ClientLogo[] = [
  { name: "Şenpiliç Holding", logo: "/clients/senpilic.png" },
  { name: "Palladium Tower", logo: "/clients/palladium.png" },
  { name: "Açık Holding", logo: "/clients/acik.png" },
  { name: "Medicana Ataköy Hastanesi Göz", logo: "/clients/medicana.png" },
  { name: "Battal Holding", logo: "/clients/battal.png" },
  { name: "EDA Dış Ticaret Uluslararası Taşımacılık ve Lojistik", logo: "/clients/eda.png" },
  { name: "Infinity Regenerative Clinic", logo: "/clients/infinity.png" },
];
