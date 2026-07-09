export interface ClientLogo {
  name: string;
  logo: string;
  /** Extra visual scale for logos that read smaller than others at the same height (default 1). */
  scale?: number;
}

export const clients: ClientLogo[] = [
  { name: "Şenpiliç", logo: "/clients/senpilic.png" },
  { name: "Palladium Tower", logo: "/clients/palladium.png" },
  { name: "Açık Holding", logo: "/clients/acik.png" },
  { name: "Medicana Ataköy Hastanesi Göz", logo: "/clients/medicana.png" },
  { name: "Battal Grup", logo: "/clients/battal-v2.png", scale: 1.3 },
  { name: "EDA Dış Ticaret Uluslararası Taşımacılık ve Lojistik", logo: "/clients/eda.png" },
  { name: "Infinity Regenerative Clinic", logo: "/clients/infinity.png" },
  { name: "Etohum", logo: "/clients/etohum.png" },
];
