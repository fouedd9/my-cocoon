import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FR, GB, DE } from "country-flag-icons/react/3x2";
import {
  Coffee,
  Leaf,
  Wheat,
  UtensilsCrossed,
  Fish,
  Soup,
  Pizza,
  Cookie,
  IceCreamCone,
  Wine,
  Diamond,
  ChevronDown,
  ChevronUp,
  Star,
  Martini,
  Gem,
} from "lucide-react";
import { sections } from "./data/menu";
/* ── Utilitaires ── */
const fmt = (p) => (p == null ? null : p.toFixed(3));

/* ── Icône Google (Lucide n'a pas de brands) ── */
function GoogleIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
        fill="#EA4335"
      />
    </svg>
  );
}

/* ── Données du menu ── */
// const sections = [
//   {
//     id: "petit-dejeuner",
//     title: "Petit Déjeuner",
//     icon: <Coffee className="text-gold/60 text-sm" />,
//     subtitle:
//       "Un moment convivial inspiré de petits-déjeuners traditionnels et internationaux",
//     items: [
//       {
//         n: "HEALTHY",
//         p: 20,
//         d: "Café ou thé au choix, détox (citronnade, menthe) ou jus frais, verrine de granola, fruits et graines de chia, 2 toasts healthy salés, bouteille d'eau 0,5 L",
//       },
//       {
//         n: "PETIT POUSSIN",
//         p: 14,
//         d: "Menu enfants — Lait, céréales, mini-sandwich, œuf à la coque, jus frais",
//         tag: "KIDS",
//       },
//       {
//         n: "MATIN EXPRESS",
//         p: 10.5,
//         d: "Café ou thé au choix, viennoiserie, jus frais, bouteille d'eau 0,5 L",
//       },
//       {
//         n: "SUPER SALÉ",
//         p: 20,
//         d: "Café ou thé au choix, croissant salé, jus frais, omelette thon-fromage, bouteille d'eau 0,5 L",
//       },
//       {
//         n: "SUPER SUCRÉ",
//         p: 18.5,
//         d: "Café ou thé au choix, viennoiserie, jus frais, mini-cheesecake, bouteille d'eau 0,5 L",
//       },
//       {
//         n: "LES AMOUREUX",
//         tag: "2 PERSONNES",
//         p: 46,
//         d: "2 cafés/thés au choix, 2 jus frais, corbeille de viennoiseries, croissant salé, toast sucré, mini-pancake chocolat, 2 omelettes fromage, charcuterie, assortiment pain, gouta, salade de fruits, gâteaux, bouteille d'eau 1 L",
//       },
//       {
//         n: "BRUNCH MY COCOON",
//         p: 78,
//         d: "Un moment convivial inspiré de petits-déjeuners traditionnels et internationaux",
//         tag: "2-3 PERSONNES",
//         special: true,
//         subs: [
//           {
//             t: "Assiette Découverte",
//             i: [
//               "Planche de charcuterie et fromage variée",
//               "2 bruschetta maison",
//               "Salade fraîche et riche",
//             ],
//           },
//           {
//             t: "Plats Chauds",
//             i: ["Omelette à l'espagnol", "Brochette de volaille grillée"],
//           },
//           {
//             t: "Douceur Sucrée",
//             i: [
//               "Fruits de saison au granola et miel",
//               "Crêpe au chocolat",
//               "Fondant au chocolat",
//             ],
//           },
//           {
//             t: "Pain et Boissons",
//             i: [
//               "Pain maison",
//               "2 cafés/thés au choix",
//               "2 jus frais",
//               "Bouteille d'eau 1 L",
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "entrees-salades",
//     title: "Entrées & Salades",
//     icon: <Leaf className="text-gold/60 text-sm" />,
//     subSections: [
//       {
//         title: "Nos Entrées Chaudes",
//         items: [
//           { n: "Brik au thon", p: 7, d: "" },
//           { n: "Brik aux crevettes", p: 8.5, d: "" },
//           { n: "Crème de crevettes", p: 16, d: "" },
//           {
//             n: "Mixte crunchy",
//             p: 29,
//             d: "Crevettes panées (4 pièces), calamars dorés (4 pièces)",
//           },
//           { n: "Crevettes sautées à l'ail", p: 30, d: "" },
//           { n: "Moules à la crème", p: 27, d: "" },
//         ],
//       },
//       {
//         title: "Nos Salades",
//         items: [
//           {
//             n: "Salade César",
//             p: 24,
//             d: "Cœur de laitue, tomate cerise, poulet grillé, fromage blanc, croûtons de pain, maïs, parmesan, sauce César, œuf",
//           },
//           {
//             n: "Salade Burrata",
//             p: 24,
//             d: "Cœur de laitue, burrata, roquette, tomate cerise, parmesan, crème balsamique",
//           },
//           {
//             n: "Salade au saumon fumé",
//             p: 29,
//             d: "Laitue, tomate cerise, saumon fumé, roquette",
//           },
//           {
//             n: "Salade fumoir",
//             p: 28,
//             d: "Laitue, tomate cerise, bacon, fromage cerise, roquette, parmesan, noix, crème balsamique",
//           },
//           {
//             n: "Salade fruits de mer",
//             p: 29,
//             d: "Laitue, tomate, oignon, piment doux, cocktail de fruits de mer",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "gastronomie",
//     title: "Gastronomie Tunisienne",
//     icon: <Star className="text-gold/60 text-sm" />,
//     items: [
//       { n: "Ojja fruits de mer", p: 30, d: "" },
//       { n: "Ojja merguez", p: 25, d: "Fait maison" },
//       { n: "Couscous d'agneau", p: 40, d: "" },
//       { n: "Couscous au poisson", p: 36, d: "" },
//       { n: "Couscous au poulpe", p: 46, d: "" },
//       { n: "Couscous végétarienne", p: 28, d: "" },
//       {
//         n: "Couscous royal",
//         p: 78,
//         d: "3 viandes : côtelette, brochette de poulet, merguez",
//         tag: "2 PERSONNES",
//       },
//       {
//         n: "Riz aux fruits de mer",
//         p: 40,
//         d: "Riz, sauce rouge, cocktail de fruits de mer",
//       },
//       { n: "Complet merguez à la tunisienne", p: 29, d: "" },
//     ],
//   },
//   {
//     id: "volailles-chef",
//     title: "Volailles & Spécialités du Chef",
//     icon: <UtensilsCrossed className="text-gold/60 text-sm" />,
//     subSections: [
//       {
//         title: "Nos Plats Volailles",
//         items: [
//           {
//             n: "Suprême de poulet sauce champignons",
//             p: 27,
//             d: "Champignons frais",
//           },
//           { n: "Blanc de poulet grillé ou pané", p: 23, d: "Fait maison" },
//           { n: "Cuisse de poulet à l'indienne", p: 23, d: "Fait maison" },
//           { n: "Cordon bleu", p: 26, d: "Fait maison" },
//         ],
//       },
//       {
//         title: "Spécialités du Chef My Cocoon",
//         items: [
//           {
//             n: "Escalope du chef My Cocoon",
//             p: 32,
//             d: "Sauce crevettes, gorgonzola",
//           },
//           {
//             n: "Poulet à la provençale",
//             p: 30,
//             d: "Poulet pané, sauce provençale",
//           },

//           {
//             n: "Roulade de poulet farci",
//             p: 35,
//             d: "Poulet farci à la ricotta, épinards, fromage maison, sauce mexicaine",
//           },
//           {
//             n: "Cordon mexicain",
//             p: 30,
//             d: "Cordon bleu garni sur un lit de purée et un jardin de légumes",
//           },
//           {
//             n: "Ballotine de poulet",
//             p: 32,
//             d: "Poulet farci (crevettes, épinards, fromage) garni avec tagliatelle sauce pesto",
//           },
//           {
//             n: "Poulet farci (saumon et fromage)",
//             p: 38,
//             d: "",
//           },

//           {
//             n: "Panorama de volailles",
//             p: 90,
//             d: "Cuisse de poulet grillé, cordon bleu (fait maison), brochette de poulet pané, escalope grillée, émincé de poulet sauce champignons, garniture riche et variée, pâtes alfredo, pâtes arrabiata, trio de sauces",
//             tag: "2 PERSONNES",
//           },
//         ],
//       },
//       {
//         title: "Nos Plats Viandes",
//         items: [
//           { n: "Entrecôte grillée", p: 42, d: "" },
//           { n: "Entrecôte sauce champignons / 4 poivres", p: 48, d: "" },
//           { n: "Entrecôte sauce moutarde", p: 48, d: "" },
//           {
//             n: "Foie de veau sauté à notre façon",
//             p: 38,
//             d: "Sauté à l'oignon et fines herbes",
//           },
//           {
//             n: "Grillade mixte viande",
//             p: 40,
//             d: "Escalope grillée, foie, merguez, côtelette, steak, escalope panée",
//           },
//         ],
//       },
//       {
//         title: "Menu Enfants",
//         items: [
//           {
//             n: "Chicken nuggets (6 pièces), frites",
//             p: 20,
//             d: "",
//             tag: "KIDS",
//           },
//           {
//             n: "Pâtes sauce blanche (poulet, fromage)",
//             p: 22,
//             d: "",
//             tag: "KIDS",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "fruits-de-mer",
//     title: "Fruits de Mer",
//     icon: <Fish className="text-gold/60 text-sm" />,
//     items: [
//       { n: "Poisson de jour grillé", p: 29, d: "Dorade ou loup de mer" },
//       {
//         n: "Pavé de saumon My Cocoon",
//         p: 42,
//         d: "Saumon, crevettes et sauce crémeuse au citron",
//       },
//       {
//         n: "Millefeuille de dorade farci",
//         p: 40,
//         d: "Filet de dorade, saumon fumé, sauce aneth, garniture pâtes à l'italienne",
//       },
//       { n: "Seiche à la plancha sauce vierge", p: 44, d: "" },
//       {
//         n: "Brochette de crevettes grillées",
//         p: 48,
//         d: "",
//       },
//       {
//         n: "Assiette dorée de la mer",
//         p: 48,
//         d: "Moules à la crème, crevettes panées, calamars croustillants",
//       },
//       {
//         n: "Mixte fruits de mer",
//         p: 60,
//         d: "Poisson grillé, crevettes (3 pièces), seiche, moules, calamars dorés",
//       },
//       {
//         n: "Symphonie fruits de mer",
//         p: 139,
//         d: "Cocktail riche de fruits de mer avec des garnitures très variées",
//         tag: "2-3 PERSONNES",
//         special: true,
//       },
//     ],
//   },
//   {
//     id: "pates",
//     title: "Pâtes",
//     icon: <Soup className="text-gold/60 text-sm" />,
//     subSections: [
//       {
//         title: "Nos Pâtes",
//         items: [
//           { n: "Pâtes végétariennes", p: 23, d: "Sauce au choix, légumes" },
//           { n: "Tagliatelle pesto au saumon grillé", p: 40, d: "" },
//           {
//             n: "Tagliatelle Royale",
//             p: 38,
//             d: "Sauce blanche, basilic, crevettes, calamars dorés, parmesan",
//           },
//           {
//             n: "Tagliatelle du chef",
//             p: 36,
//             d: "Sauce rosée aux tomates séchées, poulet grillé, pignons, pistaches",
//           },
//           {
//             n: "Rigatoni gamberi et saumon",
//             p: 40,
//             d: "Sauce rosée, crevettes, saumon fumé, basilic, zeste de citron, parmesan",
//           },
//           {
//             n: "Rigatoni maison",
//             p: 38,
//             d: "Sauce blanche, poulet, crevettes, basilic, parmesan",
//           },
//           {
//             n: "Rigatoni My Cocoon",
//             p: 35,
//             d: "Sauce pesto, poulet, champignons, burrata, parmesan",
//           },
//           {
//             n: "Penne Alfredo",
//             p: 30,
//             d: "Sauce blanche, poulet, champignons, quatre fromages",
//           },
//           {
//             n: "Penne 4 fromages",
//             p: 32,
//             d: "Sauce blanche, gruyère, gorgonzola, mozzarella cerise, parmesan",
//           },
//           {
//             n: "Puttanesca",
//             p: 28,
//             d: "Sauce tomate, olives, piment séché, thon, piment de cayenne",
//           },
//           {
//             n: "Spaghetti fruits de mer sauce rouge",
//             p: 38,
//             d: "Sauce rouge, cocktail de fruits de mer",
//           },
//           {
//             n: "Spaghetti bolognaise",
//             p: 28,
//             d: "Sauce rouge, viande hachée, parmesan",
//           },
//           {
//             n: "Lasagne bolognaise",
//             p: 29,
//             d: "Sauce tomate et viande hachée",
//           },
//           {
//             n: "Lasagne fruits de mer",
//             p: 32,
//             d: "Sauce rosée et fruits de mer",
//           },
//           {
//             n: "Paëlla royale",
//             p: 87,
//             d: "Riz, cocktail de fruits de mer, poulet, brochette de poulet, poisson grillé",
//             tag: "2-3 PERSONNES",
//           },
//         ],
//       },
//       {
//         title: "Nos Pâtes Fraîches",
//         items: [
//           { n: "Ravioli ricotta épinards", p: 30, d: "Sauce épinards" },
//           { n: "Ravioli 4 fromages", p: 32, d: "Sauce fromage" },
//           {
//             n: "Ravioli 4 saisons",
//             p: 34,
//             d: "Ricotta, tomates séchées, mozzarella, burrata, sauce rosée",
//           },

//           {
//             n: "Ravioli saumon crevettes",
//             p: 37,
//             d: "Sauce rosée aux crevettes",
//           },
//           { n: "Ravioli viande hachée", p: 28, d: "Sauce bolognaise" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "pizzas",
//     title: "Pizzas",
//     icon: <Pizza className="text-gold/60 text-sm" />,
//     items: [
//       {
//         n: "Margherita",
//         p: 18,
//         d: "Sauce tomate, mozzarella, origan, basilic frais",
//       },
//       {
//         n: "Végétarienne",
//         p: 20,
//         d: "Sauce tomate, mozzarella, légumes grillés, champignons, olives",
//       },
//       { n: "Funghi", p: 22, d: "Sauce tomate, mozzarella, champignons" },
//       { n: "Neptune", p: 22, d: "Sauce tomate, mozzarella, thon, olives" },
//       {
//         n: "Pepperoni",
//         p: 22,
//         d: "Sauce tomate, mozzarella, pepperoni, olive",
//       },
//       {
//         n: "Quatre saisons",
//         p: 26,
//         d: "Sauce tomate, mozzarella, champignons, légumes, thon, jambon, olives",
//       },
//       {
//         n: "Orientale",
//         p: 23,
//         d: "Sauce tomate, mozzarella, merguez, piment doux, oignon",
//       },
//       {
//         n: "Turc",
//         p: 23,
//         d: "Sauce tomate, mozzarella, viande hachée, origan, basilic frais",
//       },
//       {
//         n: "Mexicaine",
//         p: 23,
//         d: "Sauce tomate, mozzarella, poulet sauté, piment piquant, oignon",
//       },
//       {
//         n: "Fruits de mer",
//         p: 30,
//         d: "Sauce tomate, mozzarella, cocktail de fruits de mer",
//       },
//       { n: "Saumon", p: 32, d: "Sauce rosée, mozzarella, saumon fumé, origan" },
//       {
//         n: "Burrata",
//         p: 24,
//         d: "Sauce blanche, mozzarella, burrata, roquette, sauce balsamique",
//       },
//       { n: "Chicken", p: 26, d: "Sauce blanche, mozzarella, poulet, origan" },
//       {
//         n: "Quatre fromages",
//         p: 28,
//         d: "Sauce blanche, mozzarella, gruyère, cheddar, parmesan, fromage cerise",
//       },
//       {
//         n: "Diavola",
//         p: 24,
//         d: "Sauce tomate, mozzarella, bacon, champignon frais, roquette, olives, parmesan",
//       },
//       {
//         n: "Calzone italien",
//         p: 20,
//         d: "Sauce tomate, jambon, œuf, mozzarella",
//       },
//       {
//         n: "Calzone américain",
//         p: 20,
//         d: "Sauce tomate, viande hachée, mozzarella",
//       },
//       {
//         n: "Calzone mexicain",
//         p: 22,
//         d: "Sauce tomate, poulet, œuf, mozzarella",
//       },
//     ],
//     extraSection: {
//       title: "Suppléments",
//       items: [
//         { n: "Saumon fumé", p: 10, d: "" },
//         { n: "Thon / Jambon", p: 8, d: "" },
//         { n: "Burrata", p: 6, d: "" },
//         { n: "Mozzarella", p: 5, d: "" },
//         { n: "Gorgonzola", p: 10, d: "" },
//         { n: "Gruyère", p: 8, d: "" },
//         { n: "Champignons", p: 8, d: "" },
//         { n: "Portion fruit de mer", p: 12, d: "" },
//         { n: "Focaccia", p: 10, d: "Pain au pesto, ail, huile d'olive" },
//         { n: "Portion frites", p: 4, d: "" },
//       ],
//     },
//   },
//   {
//     id: "pauses",
//     title: "Pauses Légères",
//     icon: <Cookie className="text-gold/60 text-sm" />,
//     subSections: [
//       {
//         title: "Crêpes Sucrées",
//         items: [
//           {
//             n: "My Cocoon",
//             p: 18,
//             d: "Au choix : Nutella / Spéculoos / Nutella-Spéculoos",
//           },
//           {
//             n: "Banana Split",
//             p: 24,
//             d: "Nutella, banane, chantilly, crème noisette, glace",
//           },
//           {
//             n: "Tutti frutti",
//             p: 24,
//             d: "Nutella, 3 fruits de saison, fruits secs, chantilly",
//           },
//         ],
//       },
//       {
//         title: "Crêpes Salées",
//         items: [
//           {
//             n: "Mistral",
//             p: 18,
//             d: "Thon, mozzarella, sauce fromagère, salade de saison, harissa au choix",
//           },
//           {
//             n: "Sicilienne",
//             p: 18,
//             d: "Jambon, mozzarella, sauce fromagère, salade de saison",
//           },
//           {
//             n: "Cheesy",
//             p: 20,
//             d: "Mozzarella, gruyère, fromage blanc, sauce fromagère, salade de saison",
//           },
//           {
//             n: "Orientale",
//             p: 18,
//             d: "Poulet, mozzarella, sauce fromagère, sauce pesto, salade de saison",
//           },
//         ],
//       },
//       {
//         title: "Nos Viennoiseries",
//         items: [
//           { n: "Cake maison", p: 4, d: "" },
//           { n: "Croissant au beurre", p: 3, d: "" },
//           { n: "Pain au chocolat", p: 3.5, d: "" },
//           { n: "Croissant aux amandes", p: 4, d: "" },
//           { n: "Croissant salé", p: 5, d: "" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "desserts",
//     title: "Desserts & Glaces",
//     icon: <IceCreamCone className="text-gold/60 text-sm" />,
//     subSections: [
//       {
//         title: "Nos Desserts et Pâtisseries",
//         items: [
//           { n: "Gâteau au choix", p: 10.5, d: "" },
//           { n: "Cheesecake", p: 11.8, d: "" },
//           { n: "Mini-cheesecake", p: 9.5, d: "" },
//           { n: "Fondant au chocolat", p: 9, d: "" },
//           { n: "Fondant boule de glace", p: 14, d: "" },
//           { n: "Salade de fruits", p: 14, d: "" },
//           { n: "Assiette de fruits", p: 22, d: "" },
//         ],
//       },
//       {
//         title: "Nos Glaces",
//         items: [
//           { n: "Coupe (2 boules)", p: 8, d: "" },
//           { n: "Coupe (3 boules)", p: 11, d: "" },
//           { n: "Coupe (4 boules)", p: 15, d: "" },
//           {
//             n: "Coupe Tutti frutti",
//             p: 18,
//             d: "4 boules au choix, fruits de saison",
//           },
//           {
//             n: "Coupe My Cocoon",
//             p: 20,
//             d: "5 boules au choix, fruits de saison, fruits secs, chantilly, chocolat",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "boissons",
//     title: "Boissons",
//     icon: <Martini className="text-gold/60 text-sm" />,

//     subSections: [
//       {
//         title: "Nos Cafés",
//         items: [
//           { n: "Américain", p: 4.5, d: "" },
//           { n: "Espresso", p: 3.8, d: "" },
//           { n: "Capucin", p: 4, d: "" },
//           { n: "Café crème / direct", p: 4.8, d: "" },
//           { n: "Crème grande tasse", p: 7.8, d: "" },
//           { n: "Chocolat au lait", p: 4, d: "" },
//           { n: "Cappuccino", p: 8, d: "" },
//           { n: "Dose arôme", p: 3, d: "Supplément" },
//           { n: "Dose menthe", p: 2, d: "" },
//         ],
//       },
//       {
//         title: "Nos Thés",
//         items: [
//           { n: "Thé à la menthe", p: 3.8, d: "" },
//           { n: "Thé infusion", p: 5, d: "" },
//           { n: "Thé aux amandes", p: 8.5, d: "" },
//           { n: "Thé aux pignons", p: 10.5, d: "" },
//           { n: "Verveine", p: 5, d: "" },
//         ],
//       },
//       {
//         title: "Nos Mojitos",
//         items: [
//           { n: "Virgin", p: 10, d: "" },
//           { n: "Red Berry", p: 13, d: "" },
//           { n: "Blue Berry", p: 13, d: "" },
//           { n: "Dragon", p: 18, d: "à base de boisson énergétique" },
//           { n: "Apple", p: 13, d: "" },
//           { n: "Passion fruit", p: 14, d: "" },
//         ],
//       },
//       {
//         title: "Nos Frappuccinos",
//         items: [
//           { n: "Vanille / Caramel", p: 14, d: "" },
//           { n: "Oreo", p: 15, d: "" },
//           { n: "Nutella / Spéculoos", p: 16.8, d: "" },
//         ],
//       },
//       {
//         title: "Nos Jus Frais",
//         note: "Selon la disponibilité des produits de saison",
//         items: [
//           { n: "Citronnade", p: 6, d: "" },
//           { n: "Citronnade - boule de glace", p: 7.5, d: "" },
//           { n: "Citronnade aux amandes", p: 8.5, d: "" },
//           { n: "Orange", p: 6, d: "" },
//           { n: "Orange aux amandes", p: 9, d: "" },
//           { n: "Fraise", p: 8, d: "" },
//           { n: "Fraise boule de glace", p: 9.5, d: "" },
//           { n: "Banane", p: 13, d: "" },
//           { n: "Kiwi", p: 9, d: "" },
//           { n: "Fraise-Banane", p: 13, d: "" },
//           { n: "Kiwi-Banane", p: 13, d: "" },
//           { n: "Mixte fruits", p: 16.8, d: "" },
//         ],
//       },
//       {
//         title: "Nos Chocolats Chauds",
//         items: [
//           { n: "Classique", p: 10, d: "" },
//           { n: "Chocolat Fruits secs et chantilly", p: 13, d: "" },
//         ],
//       },
//       {
//         title: "Nos Milkshakes",
//         items: [
//           {
//             n: "Milkshakes au choix",
//             p: 13,
//             d: "(Fraise, Vanille, Caramel, Chocolat)",
//           },
//           { n: "Nutella", p: 15, d: "" },
//           { n: "Oreo", p: 15, d: "" },
//           { n: "Pistache", p: 16, d: "" },
//         ],
//       },
//       {
//         title: "Nos Cafés Glacés",
//         items: [
//           { n: "Classique", p: 9, d: "" },
//           { n: "Affogato", p: 12, d: "Glace vanille et expresso" },
//           { n: "Viennois", p: 12, d: "Glace vanille et café latte" },
//           { n: "Liégeois", p: 12, d: "" },
//         ],
//       },
//       {
//         title: "Nos Boissons",
//         items: [
//           { n: "Eau minérale 0,5 L", p: 2, d: "" },
//           { n: "Eau gazéifiée 0,5 L", p: 2, d: "" },
//           { n: "Eau minérale 1 L", p: 3.5, d: "" },
//           { n: "Eau gazéifiée 1 L", p: 3.5, d: "" },
//           { n: "Soda", p: 3.5, d: "Coca, Fanta, Apla, Boga" },
//           {
//             n: "Boisson énergétique",
//             p: 12,
//             d: "",
//           },
//           { n: "Bière", p: 8, d: "" },
//         ],
//       },
//     ],
//   },
// ];

/* ── Composants ── */

function Ornament({ small }) {
  const w = small ? 30 : 50;
  const d = small ? { width: 4, height: 4 } : null;
  return (
    <div className="ornament my-4">
      <div className="ornament-line" style={{ width: w }} />
      <div className="ornament-diamond" style={d} />
      <div className="ornament-line" style={{ width: w }} />
    </div>
  );
}

function MenuItemRow({ item }) {
  const { t } = useTranslation();
  if (item.special && item.subs) {
    return (
      <div
        style={{ padding: "20px", marginBlock: "24px" }}
        className="special-card bg-noir-card border border-gold/15 rounded-xl p-5 sm:p-7 my-6 scroll-reveal"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-display text-xl sm:text-2xl text-gold font-medium">
              {t(item.n, { defaultValue: item.n })}
            </h3>
            {item.tag && (
              <span
                style={{ padding: "4px 8px" }}
                className="text-[10px] font-body font-semibold tracking-widest uppercase bg-gold/10 text-gold-light px-2.5 py-1 rounded-full border border-gold/20"
              >
                {t(item.tag, { defaultValue: item.tag })}
              </span>
            )}
          </div>
          <span className="font-body text-gold-light font-medium text-lg tracking-wide">
            {fmt(item.p)}
          </span>
        </div>
        {item.d && (
          <p
            style={{ marginBottom: "1.25rem" }}
            className="text-cream-muted text-sm font-body mb-5 leading-relaxed"
          >
            {t(item.d, { defaultValue: item.d })}
          </p>
        )}
        <div className="space-y-4">
          {item.subs.map((sub, si) => (
            <div style={{ paddingTop: "1.5rem" }} key={si}>
              <p
                style={{ fontFamily: "Cormorant Garamond, serif" }}
                className="sub-heading text-gold-dark font-menu text-lg font-semibold mb-2"
              >
                {t(sub.t, { defaultValue: sub.t })}
              </p>
              <ul style={{ marginTop: "1rem" }} className="space-y-1.5 ml-1">
                {sub.i.map((line, li) => (
                  <li
                    style={{ paddingBlock: "4px" }}
                    key={li}
                    className="flex items-start gap-2 text-cream-dark text-sm font-body"
                  >
                    <span className="text-gold/40 mt-1.5 text-[6px]">
                      {/* <i className="fa-solid fa-diamond" /> */}
                      <Gem size={12} strokeWidth={2} />
                    </span>
                    {t(line, { defaultValue: line })}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="menu-row scroll-reveal py-3 border-b border-noir-lighter/60">
      <div className="flex items-baseline">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="item-name font-menu text-lg sm:text-xl text-cream font-medium transition-colors duration-300 whitespace-nowrap pr-1">
            {t(item.n, { defaultValue: item.n })}
          </span>
          {item.tag && (
            <span
              style={{ padding: "4px 8px" }}
              className="text-[9px] font-body font-semibold tracking-widest uppercase bg-gold/10 text-gold-light px-2 py-0.5 rounded-full border border-gold/20 shrink-0"
            >
              {t(item.tag, { defaultValue: item.tag })}
            </span>
          )}
        </div>
        <span className="dot-leader" />
        {item.p != null && (
          <span className="font-body text-gold font-medium text-sm sm:text-base tracking-wide whitespace-nowrap pl-1">
            {fmt(item.p)}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 flex-wrap mt-1">
        {item.d && (
          <p className="text-cream-muted text-xs sm:text-sm font-body leading-relaxed">
            {t(item.d, { defaultValue: item.d })}
          </p>
        )}
      </div>
    </div>
  );
}

function SubSection({ sub }) {
  const { t } = useTranslation();
  return (
    <div style={{ paddingBlock: "12px" }} className="mb-10">
      <p className="sub-heading text-gold-dark font-menu text-xl sm:text-2xl font-semibold mb-5">
        {t(sub.title, { defaultValue: sub.title })}
      </p>
      {sub.note && (
        <p
          style={{ paddingBlock: "8px" }}
          className="text-cream-muted text-xs font-body mb-4 italic"
        >
          {t(sub.note, { defaultValue: sub.note })}
        </p>
      )}
      <div>
        {sub.items.map((item, i) => (
          <MenuItemRow key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuSection({ section }) {
  const { t } = useTranslation();
  const hasSubSections = section.subSections && section.subSections.length > 0;
  const hasItems = section.items && section.items.length > 0;
  const Icon = section.icon;
  return (
    <section
      id={section.id}
      className="pt-24 pb-12 px-4 sm:px-6 max-w-4xl mx-auto"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "12px",
          marginBlock: "40px",
        }}
        className="scroll-reveal text-center mb-10"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          {Icon && (
            <Icon
              className="text-gold/60 text-sm"
              size={20}
              strokeWidth={1.5}
            />
          )}
        </div>
        <Ornament small />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream font-medium tracking-wide">
          {t(section.title, {
            defaultValue: section.title,
          })}
        </h2>
        <Ornament small />
        {section.subtitle && (
          <p className="text-cream-muted text-sm font-body mt-3 max-w-lg mx-auto leading-relaxed">
            {t(section.subtitle, { defaultValue: section.subtitle })}
          </p>
        )}
      </div>

      {hasSubSections &&
        section.subSections.map((sub, i) => <SubSection key={i} sub={sub} />)}

      {hasItems &&
        section.items.map((item, i) => <MenuItemRow key={i} item={item} />)}

      {section.extraSection && (
        <div className="mt-12 pt-8 border-t border-gold/10">
          <SubSection sub={section.extraSection} />
        </div>
      )}
    </section>
  );
}

function StickyNav({ sectionIds, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${scrolled ? "bg-noir/90 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/30" : "bg-transparent"}`}
      role="navigation"
      aria-label="Navigation du menu"
    >
      <div
        className="nav-scroll flex items-center gap-1 sm:gap-2 overflow-x-auto px-4 sm:px-6 py-3 max-w-6xl mx-auto no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: "12px 0",
          width: "100dvw",
          overflow: "scroll",
        }}
      >
        {sectionIds.map((s) => (
          <button
            style={{
              display: "flex",
              padding: "12px",
              gap: "22px",
              fontFamily: "Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
            }}
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`nav-link whitespace-nowrap text-xs sm:text-sm font-body font-medium tracking-wide px-2 sm:px-3 py-1.5 rounded-md transition-colors duration-300 ${activeSection === s.id ? "active text-gold" : "text-cream-muted hover:text-cream"}`}
            aria-current={activeSection === s.id ? "true" : "false"}
          >
            {t(s.title, { defaultValue: s.title })}
          </button>
        ))}
      </div>
    </nav>
  );
}
function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: "fr",
      label: "FR",
      Flag: FR,
    },
    {
      code: "en",
      label: "EN",
      Flag: GB,
    },
    {
      code: "de",
      label: "DE",
      Flag: DE,
    },
  ];

  const changeLanguage = async (language) => {
    try {
      await i18n.changeLanguage(language);

      localStorage.setItem("menu-language", language);
    } catch (error) {
      console.error("Erreur changement de langue :", error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "76px",
        right: "18px",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "5px",
        background: "rgba(15, 15, 15, 0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(201, 169, 110, 0.2)",
        borderRadius: "999px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
      }}
      aria-label="Sélection de la langue"
    >
      {languages.map((language) => {
        const Flag = language.Flag;
        const isActive =
          i18n.resolvedLanguage === language.code ||
          i18n.language === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "7px 10px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              transition: "all 0.3s ease",
              background: isActive
                ? "rgba(201, 169, 110, 0.18)"
                : "transparent",
              color: isActive ? "#c9a96e" : "#aaa",
              boxShadow: isActive
                ? "inset 0 0 0 1px rgba(201, 169, 110, 0.25)"
                : "none",
            }}
            aria-label={`Langue ${language.code}`}
            aria-pressed={isActive}
          >
            <Flag
              title={language.code}
              style={{
                width: "24px",
                height: "16px",
                borderRadius: "2px",
                objectFit: "cover",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
function Hero() {
  const { t } = useTranslation();

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(201,169,110,0.02) 0%, transparent 50%)",
        }}
      />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-gold/20 to-transparent" />

      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-gold/20 to-transparent" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
        className="relative z-10"
      >
        <p className="font-body text-cream-muted text-xs sm:text-sm tracking-[0.35em] uppercase mb-6">
          {t("Restaurant & Brasserie")}
        </p>

        <h1 className="gold-shimmer font-display text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-[0.15em] leading-none mb-6">
          MY COCOON
        </h1>

        <Ornament />

        <p className="font-body text-cream-dark text-sm sm:text-base tracking-[0.2em] uppercase mb-2">
          {t("Monastir, Tunisie")}
        </p>

        <p className="font-body text-gold/60 text-xs tracking-[0.3em] uppercase mt-4">
          {t("Menu 2026")}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <ChevronDown className="text-gold/40 text-sm" size={32} />
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      style={{ marginBlock: "64px 32px" }}
      className="relative mt-16 border-t border-gold/10"
    >
      <div
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        className="max-w-4xl mx-auto px-4 py-16 text-center"
      >
        <Ornament />
        <p className="font-display text-2xl sm:text-3xl text-cream font-medium tracking-wide mb-3">
          MY COCOON
        </p>
        <p className="font-body text-cream-muted text-sm mb-8">
          {t("Monastir, Tunisie")}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "24px 64px",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="bg-noir-card border border-gold/15 rounded-xl p-6 sm:p-8 max-w-md mx-auto mb-10"
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <Star
              className="fa-solid fa-star text-gold text-lg mb-3 block"
              size={18}
              fill="currentColor"
            />
            <Star
              className="fa-solid fa-star text-gold text-lg mb-3 block"
              size={18}
              fill="currentColor"
            />
            <Star
              className="fa-solid fa-star text-gold text-lg mb-3 block"
              size={18}
              fill="currentColor"
            />
          </div>

          <p className="font-display text-lg text-cream font-medium mb-2">
            {t("Votre avis nous est très précieux")}
          </p>
          <p className="text-cream-muted text-sm font-body mb-5 leading-relaxed">
            {t("Pour améliorer notre service et qualité")}
          </p>
          <a
            style={{
              padding: "4px 8px",
              marginTop: "8px",
            }}
            href="https://www.google.com/search?q=My+Cocoon+Monastir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold/10 hover:bg-gold/20 border border-gold/30 hover:border-gold/50 text-gold-light font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
          >
            <GoogleIcon />
            Google My Cocoon Monastir
          </a>
        </div>

        <p className="text-cream-muted/40 text-xs font-body">
          {t("Prix en Dinars Tunisiens — Tous les prix sont indicatifs")}
        </p>
        <p className="text-cream-muted/25 text-[10px] font-body mt-2">
          {t("&copy; 2026 My Cocoon. Tous droits réservés.")}
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const sectionIds = useMemo(
    () => sections.map((s) => ({ id: s.id, title: s.title })),
    [],
  );
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    const timer = setTimeout(() => {
      document
        .querySelectorAll(".scroll-reveal")
        .forEach((el) => observer.observe(el));
    }, 200);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.15, rootMargin: "-80px 0px -45% 0px" },
    );
    sectionIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll progress bar + Back to top button
  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;

      setScrollProgress(progress);
      setShowBackTop(window.scrollY > 800);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Hide loader
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById("loader");
      if (loader) loader.classList.add("hidden");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        padding: "24px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0px",
      }}
      className="min-h-screen"
    >
      <LanguageSelector />
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-1 bg-gold `z-[9999]` transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <Hero />
      <StickyNav sectionIds={sectionIds} activeSection={activeSection} />

      <main className="relative z-10">
        {sections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </main>

      <Footer />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-5 bottom-5 z-[100] w-11 h-11 rounded-full border border-gold/30 bg-noir-card text-gold shadow-lg shadow-black/30 flex items-center justify-center transition-all duration-300 cursor-pointer ${
          showBackTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        aria-label="Retour en haut"
      >
        <ChevronUp size={18} />
      </button>
    </div>
  );
}
