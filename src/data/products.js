import heroImg from "../assets/hero-img.jpg";

const soups = [
  "Ogbono Soup",
  "Egusi Soup",
  "Bitterleaf Soup (Ofe Onugbu)",
  "Fisherman Soup",
  "White Soup (Ofe Nsala)",
  "Afang Soup",
  "Efo Riro",
  "Edikaikong",
  "Okro Soup",
  "Seafood Okra",
];
const foods = [
  ...[
    "Jollof Rice",
    "Coconut Rice",
    "Fried Rice",
    "Nigerian-Style Beans",
    "Moi Moi",
  ].map((name) => ({ name, category: "Rice & Sides" })),
  ...soups.map((name) => ({
    name,
    category: "Soups",
    options:
      name === "Fisherman Soup" || name === "Seafood Okra"
        ? ["2-litre", "3-litre", "3.5-litre"]
        : ["2-litre", "3.5-litre"],
  })),
  ...[
    "Stewed Turkey",
    "Peppered Turkey",
    "Isi Ewu",
    "Nkwobi",
    "Asun",
    "Pepper Soup",
  ].map((name) => ({ name, category: "Proteins & Specialties" })),
  { name: "Chicken Pie", category: "Pastries" },
];
export const products = foods.map((item, index) => ({
  id: `food-${index + 1}`,
  ...item,
  price: null,
  image: heroImg,
  imageAlt: "A selection of Nigerian dishes",
  description: "Please contact us to confirm details and availability.",
  available: "Confirm availability",
}));
export const categories = [
  "All",
  "Rice & Sides",
  "Soups",
  "Proteins & Specialties",
  "Pastries",
];
