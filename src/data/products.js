import heroImg from "../assets/foods/jollof-rice.jpeg";
import afang from "../assets/foods/Afang.jpeg";
import beans from "../assets/foods/Beans.jpeg";
import bitterleaf from "../assets/foods/bitterleaf.jpeg";
import chickenPie from "../assets/foods/ChickenPie.jpeg";
import coconutRice from "../assets/foods/coconutrice.jpeg";
import edikaikong from "../assets/foods/Edikaikong.jpeg";
import efoRiro from "../assets/foods/EfoRiro.jpeg";
import egusi from "../assets/foods/egusi.jpeg";
import fishermanSoup from "../assets/foods/FishermanSoup.jpeg";
import friedRice from "../assets/foods/friedRice.jpeg";
import isiEwu from "../assets/foods/Iseewu.jpeg";
import moiMoi from "../assets/foods/moimoi.jpeg";
import ogbono from "../assets/foods/ogbono.jpeg";
import okroSoup from "../assets/foods/okroSoup.jpeg";
import pepperedTurkey from "../assets/foods/pepperedTurkey.jpeg";
import pepperSoup from "../assets/foods/peppersoup.jpeg";
import stewedTurkey from "../assets/foods/stewedTuckey.jpeg";
import whiteSoup from "../assets/foods/whitesoup.jpeg";

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
  // "Seafood Okra",
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
    // "Nkwobi",
    // "Asun",
    "Pepper Soup",
  ].map((name) => ({ name, category: "Proteins & Specialties" })),
  { name: "Chicken Pie", category: "Pastries" },
];
const imageByProduct = {
  "Jollof Rice": heroImg,
  "Coconut Rice": coconutRice,
  "Fried Rice": friedRice,
  "Nigerian-Style Beans": beans,
  "Moi Moi": moiMoi,
  "Ogbono Soup": ogbono,
  "Egusi Soup": egusi,
  "Bitterleaf Soup (Ofe Onugbu)": bitterleaf,
  "Fisherman Soup": fishermanSoup,
  "White Soup (Ofe Nsala)": whiteSoup,
  "Afang Soup": afang,
  "Efo Riro": efoRiro,
  Edikaikong: edikaikong,
  "Okro Soup": okroSoup,
  "Stewed Turkey": stewedTurkey,
  "Peppered Turkey": pepperedTurkey,
  "Isi Ewu": isiEwu,
  "Pepper Soup": pepperSoup,
  "Chicken Pie": chickenPie,
};
export const products = foods.map((item, index) => ({
  id: `food-${index + 1}`,
  ...item,
  price: null,
  image: imageByProduct[item.name] || heroImg,
  imageAlt: item.name,
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
