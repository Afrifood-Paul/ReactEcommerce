const soups = ["Ogbono Soup", "Egusi Soup", "Bitterleaf Soup (Ofe Onugbu)", "Fisherman Soup", "White Soup (Ofe Nsala)", "Afang Soup", "Efo Riro", "Edikaikong", "Okro Soup", "Seafood Okra"];
const foods = [
  ...["Jollof Rice", "Coconut Rice", "Fried Rice", "Nigerian-Style Beans", "Moi Moi"].map((name) => ({ name, category: "Rice & Sides" })),
  ...soups.map((name) => ({ name, category: "Soups", options: name === "Fisherman Soup" || name === "Seafood Okra" ? ["2-litre", "3-litre", "3.5-litre"] : ["2-litre", "3.5-litre"] })),
  ...["Stewed Turkey", "Peppered Turkey", "Isi Ewu", "Nkwobi", "Asun", "Pepper Soup"].map((name) => ({ name, category: "Proteins & Specialties" })),
  { name: "Chicken Pie", category: "Pastries" },
];
const photos = {
  "Rice & Sides": "photo-1516684732162-798a0062be99",
  Soups: "photo-1547592180-85f173990554",
  "Proteins & Specialties": "photo-1544025162-d76694265947",
  Pastries: "photo-1608198093002-ad4e005484df",
};
export const products = foods.map((item, index) => ({
  id: `food-${index + 1}`,
  ...item,
  price: null,
  image: `https://images.unsplash.com/${photos[item.category]}?auto=format&fit=crop&w=900&q=82`,
  description: `Freshly prepared ${item.name.toLowerCase()}, made with care and authentic Nigerian flavour. Please contact us to confirm ingredients and availability.`,
  available: "Confirm availability",
}));
export const categories = ["All", "Rice & Sides", "Soups", "Proteins & Specialties", "Pastries"];
