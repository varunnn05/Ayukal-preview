export const BRAND_INFO = {
  name: "AYUKAL",
  tagline: "Where Ancient Wisdom Supports Modern Living",
  conceptHeadline: "True vitality begins at the source",
  visionStatement:
    "AYUKAL is more than just a supplement brand; it is a lifestyle movement designed to harmonise time-tested Ayurvedic botanicals with contemporary wellbeing.",
  contact: {
    email: "harsh@jayatioglobalwellness.co.in",
    phoneDisplay: "+91 82385 09507",
    phoneRaw: "918238509507",
    address: "Small Akash 1, Behind CNG Pump, Vadad Gam, Bamroli, Surat – 394540",
    city: "Surat, Gujarat",
    country: "India",
  },
  whatsappNumber: "918238509507",
};

export function buildWhatsAppUrl(productName?: string): string {
  const message = productName
    ? `Hi AYUKAL, I'm interested in ${productName}. I'd like to know more about the product.`
    : "Hi AYUKAL, I would like to learn more about your Ayurvedic wellness products.";
  return `https://wa.me/918238509507?text=${encodeURIComponent(message)}`;
}
