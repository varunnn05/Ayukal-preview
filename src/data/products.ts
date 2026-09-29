export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ingredients: string[];
  forms: string;
  usage: string;
  image: string;
  featured: boolean;
  accentColor?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "ashwagandha",
    slug: "ashwagandha",
    name: "Ashwagandha",
    subtitle: "Powder & Tablets",
    tagline: "Ancient Adaptogen for Inner Balance & Resilience",
    shortDescription:
      "A revered Ayurvedic adaptogenic herb known for supporting stress management, physical endurance, and calm mental clarity.",
    fullDescription:
      "AYUKAL Ashwagandha harnesses the full spectrum of raw Withania Somnifera roots, harvested at peak potency. Prepared following traditional Ayurvedic principles combined with rigorous quality controls, our formulation supports your body's natural resilience to physical and mental daily stressors.",
    benefits: [
      "Supports stress management",
      "Supports relaxation",
      "Supports overall vitality",
      "Supports physical strength",
    ],
    ingredients: ["100% Pure Organic Withania Somnifera (Ashwagandha Root Extract)"],
    forms: "Powder (100g Jar) & Pure Tablets (60 Count)",
    usage:
      "Tablets: Take 1-2 tablets daily after meals with warm water or milk. Powder: Mix 1/2 teaspoon (3g) into warm milk, honey, or herbal tea before bed.",
    image: "/images/ashwagandha.png",
    featured: true,
  },
  {
    id: "moringa",
    slug: "moringa",
    name: "Moringa",
    subtitle: "Powder & Tablets",
    tagline: "Nature's Whole-Food Botanical Nutrient Powerhouse",
    shortDescription:
      "Nutrient-dense moringa leaf extract loaded with natural vitamins, minerals, and antioxidants to nourish daily immunity and digestion.",
    fullDescription:
      "Harvested from fresh organic Moringa Oleifera foliage, AYUKAL Moringa delivers a broad spectrum of bioavailable essential vitamins, minerals, chlorophyll, and amino acids. Designed for modern daily routines, it helps sustain natural immunity, balanced digestive rhythm, and steady day-long energy.",
    benefits: [
      "Supports everyday nutrition",
      "Supports immune health",
      "Supports healthy digestion",
      "Rich in naturally occurring nutrients",
    ],
    ingredients: ["100% Pure Organic Moringa Oleifera Leaf Powder"],
    forms: "Powder (100g Jar) & Tablets (60 Count)",
    usage:
      "Tablets: Take 2 tablets twice daily with food. Powder: Stir 1 teaspoon (5g) into morning smoothies, fresh juice, or warm water.",
    image: "/images/moringa.png",
    featured: true,
  },
  {
    id: "vitality-booster",
    slug: "vitality-booster",
    name: "Vitality Booster",
    subtitle: "Synergistic Herbal Complex",
    tagline: "Potent Botanical Tri-Complex for Sustained Energy & Mindful Focus",
    shortDescription:
      "A powerful Ayurvedic formulation of Safed Musli, Ashwagandha, and Gokhru crafted to enhance stamina, mental vigor, and overall wellbeing.",
    fullDescription:
      "AYUKAL Vitality Booster brings together three of Ayurveda's most revered Rasayana botanicals: Safed Musli, Ashwagandha, and Gokhru. This synergistic compound is balanced to nourish core physical stamina, support focus during active days, and encourage lasting vitality.",
    benefits: [
      "Supports everyday vitality",
      "Supports energy and wellbeing",
      "Supports focus and mood",
    ],
    ingredients: [
      "Safed Musli (Chlorophytum Borivilianum)",
      "Ashwagandha (Withania Somnifera)",
      "Gokhru (Tribulus Terrestris)",
    ],
    forms: "Pure Concentrated Tablets (60 Count)",
    usage:
      "Take 1-2 tablets daily with warm milk or water, ideally in the morning or after physical activity.",
    image: "/images/vitality-booster.png",
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
