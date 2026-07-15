import {
  Coffee,
  Leaf,
  UtensilsCrossed,
  Fish,
  Soup,
  Pizza,
  Cookie,
  IceCreamCone,
  Star,
  Martini,
} from "lucide-react";

export const sections = [
  {
    id: "petit-dejeuner",
    title: "Petit Déjeuner",
    icon: Coffee,
    subtitle:
      "Un moment convivial inspiré de petits-déjeuners traditionnels et internationaux",
    items: [
      {
        n: "HEALTHY",
        p: 20,
        d: "Café ou thé au choix, détox (citronnade, menthe) ou jus frais, verrine de granola, fruits et graines de chia, 2 toasts healthy salés, bouteille d'eau 0,5 L",
      },
      {
        n: "PETIT POUSSIN",
        p: 14,
        d: "Menu enfants — Lait, céréales, mini-sandwich, œuf à la coque, jus frais",
        tag: "KIDS",
      },
      {
        n: "MATIN EXPRESS",
        p: 10.5,
        d: "Café ou thé au choix, viennoiserie, jus frais, bouteille d'eau 0,5 L",
      },
      {
        n: "SUPER SALÉ",
        p: 20,
        d: "Café ou thé au choix, croissant salé, jus frais, omelette thon-fromage, bouteille d'eau 0,5 L",
      },
      {
        n: "SUPER SUCRÉ",
        p: 18.5,
        d: "Café ou thé au choix, viennoiserie, jus frais, mini-cheesecake, bouteille d'eau 0,5 L",
      },
      {
        n: "LES AMOUREUX",
        tag: "2 PERSONNES",
        p: 46,
        d: "2 cafés/thés au choix, 2 jus frais, corbeille de viennoiseries, croissant salé, toast sucré, mini-pancake chocolat, 2 omelettes fromage, charcuterie, assortiment pain, gouta, salade de fruits, gâteaux, bouteille d'eau 1 L",
      },
      {
        n: "BRUNCH MY COCOON",
        p: 78,
        d: "Un moment convivial inspiré de petits-déjeuners traditionnels et internationaux",
        tag: "2-3 PERSONNES",
        special: true,
        subs: [
          {
            t: "Assiette Découverte",
            i: [
              "Planche de charcuterie et fromage variée",
              "2 bruschetta maison",
              "Salade fraîche et riche",
            ],
          },
          {
            t: "Plats Chauds",
            i: ["Omelette à l'espagnol", "Brochette de volaille grillée"],
          },
          {
            t: "Douceur Sucrée",
            i: [
              "Fruits de saison au granola et miel",
              "Crêpe au chocolat",
              "Fondant au chocolat",
            ],
          },
          {
            t: "Pain et Boissons",
            i: [
              "Pain maison",
              "2 cafés/thés au choix",
              "2 jus frais",
              "Bouteille d'eau 1 L",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "entrees-salades",
    title: "Entrées & Salades",
    icon: Leaf,
    subSections: [
      {
        title: "Nos Entrées Chaudes",
        items: [
          { n: "Brik au thon", p: 7, d: "" },
          { n: "Brik aux crevettes", p: 8.5, d: "" },
          { n: "Crème de crevettes", p: 16, d: "" },
          {
            n: "Mixte crunchy",
            p: 29,
            d: "Crevettes panées (4 pièces), calamars dorés (4 pièces)",
          },
          { n: "Crevettes sautées à l'ail", p: 30, d: "" },
          { n: "Moules à la crème", p: 27, d: "" },
        ],
      },
      {
        title: "Nos Salades",
        items: [
          {
            n: "Salade César",
            p: 24,
            d: "Cœur de laitue, tomate cerise, poulet grillé, fromage blanc, croûtons de pain, maïs, parmesan, sauce César, œuf",
          },
          {
            n: "Salade Burrata",
            p: 24,
            d: "Cœur de laitue, burrata, roquette, tomate cerise, parmesan, crème balsamique",
          },
          {
            n: "Salade au saumon fumé",
            p: 29,
            d: "Laitue, tomate cerise, saumon fumé, roquette",
          },
          {
            n: "Salade fumoir",
            p: 28,
            d: "Laitue, tomate cerise, bacon, fromage cerise, roquette, parmesan, noix, crème balsamique",
          },
          {
            n: "Salade fruits de mer",
            p: 29,
            d: "Laitue, tomate, oignon, piment doux, cocktail de fruits de mer",
          },
        ],
      },
    ],
  },
  {
    id: "gastronomie",
    title: "Gastronomie Tunisienne",
    icon: Star,
    items: [
      { n: "Ojja fruits de mer", p: 30, d: "" },
      { n: "Ojja merguez", p: 25, d: "Fait maison" },
      { n: "Couscous d'agneau", p: 40, d: "" },
      { n: "Couscous au poisson", p: 36, d: "" },
      { n: "Couscous au poulpe", p: 46, d: "" },
      { n: "Couscous végétarienne", p: 28, d: "" },
      {
        n: "Couscous royal",
        p: 78,
        d: "3 viandes : côtelette, brochette de poulet, merguez",
        tag: "2 PERSONNES",
      },
      {
        n: "Riz aux fruits de mer",
        p: 40,
        d: "Riz, sauce rouge, cocktail de fruits de mer",
      },
      { n: "Complet merguez à la tunisienne", p: 29, d: "" },
    ],
  },
  {
    id: "volailles-chef",
    title: "Volailles & Spécialités du Chef",
    icon: UtensilsCrossed,
    subSections: [
      {
        title: "Nos Plats Volailles",
        items: [
          {
            n: "Suprême de poulet sauce champignons",
            p: 27,
            d: "Champignons frais",
          },
          { n: "Blanc de poulet grillé ou pané", p: 23, d: "Fait maison" },
          { n: "Cuisse de poulet à l'indienne", p: 23, d: "Fait maison" },
          { n: "Cordon bleu", p: 26, d: "Fait maison" },
        ],
      },
      {
        title: "Spécialités du Chef My Cocoon",
        items: [
          {
            n: "Escalope du chef My Cocoon",
            p: 32,
            d: "Sauce crevettes, gorgonzola",
          },
          {
            n: "Poulet à la provençale",
            p: 30,
            d: "Poulet pané, sauce provençale",
          },

          {
            n: "Roulade de poulet farci",
            p: 35,
            d: "Poulet farci à la ricotta, épinards, fromage maison, sauce mexicaine",
          },
          {
            n: "Cordon mexicain",
            p: 30,
            d: "Cordon bleu garni sur un lit de purée et un jardin de légumes",
          },
          {
            n: "Ballotine de poulet",
            p: 32,
            d: "Poulet farci (crevettes, épinards, fromage) garni avec tagliatelle sauce pesto",
          },
          {
            n: "Poulet farci (saumon et fromage)",
            p: 38,
            d: "",
          },

          {
            n: "Panorama de volailles",
            p: 90,
            d: "Cuisse de poulet grillé, cordon bleu (fait maison), brochette de poulet pané, escalope grillée, émincé de poulet sauce champignons, garniture riche et variée, pâtes alfredo, pâtes arrabiata, trio de sauces",
            tag: "2 PERSONNES",
          },
        ],
      },
      {
        title: "Nos Plats Viandes",
        items: [
          { n: "Entrecôte grillée", p: 42, d: "" },
          { n: "Entrecôte sauce champignons / 4 poivres", p: 48, d: "" },
          { n: "Entrecôte sauce moutarde", p: 48, d: "" },
          {
            n: "Foie de veau sauté à notre façon",
            p: 38,
            d: "Sauté à l'oignon et fines herbes",
          },
          {
            n: "Grillade mixte viande",
            p: 40,
            d: "Escalope grillée, foie, merguez, côtelette, steak, escalope panée",
          },
        ],
      },
      {
        title: "Menu Enfants",
        items: [
          {
            n: "Chicken nuggets (6 pièces), frites",
            p: 20,
            d: "",
            tag: "KIDS",
          },
          {
            n: "Pâtes sauce blanche (poulet, fromage)",
            p: 22,
            d: "",
            tag: "KIDS",
          },
        ],
      },
    ],
  },
  {
    id: "fruits-de-mer",
    title: "Fruits de Mer",
    icon: Fish,
    items: [
      { n: "Poisson de jour grillé", p: 29, d: "Dorade ou loup de mer" },
      {
        n: "Pavé de saumon My Cocoon",
        p: 42,
        d: "Saumon, crevettes et sauce crémeuse au citron",
      },
      {
        n: "Millefeuille de dorade farci",
        p: 40,
        d: "Filet de dorade, saumon fumé, sauce aneth, garniture pâtes à l'italienne",
      },
      { n: "Seiche à la plancha sauce vierge", p: 44, d: "" },
      {
        n: "Brochette de crevettes grillées",
        p: 48,
        d: "",
      },
      {
        n: "Assiette dorée de la mer",
        p: 48,
        d: "Moules à la crème, crevettes panées, calamars croustillants",
      },
      {
        n: "Mixte fruits de mer",
        p: 60,
        d: "Poisson grillé, crevettes (3 pièces), seiche, moules, calamars dorés",
      },
      {
        n: "Symphonie fruits de mer",
        p: 139,
        d: "Cocktail riche de fruits de mer avec des garnitures très variées",
        tag: "2-3 PERSONNES",
        special: true,
      },
    ],
  },
  {
    id: "pates",
    title: "Pâtes",
    icon: Soup,
    subSections: [
      {
        title: "Nos Pâtes",
        items: [
          { n: "Pâtes végétariennes", p: 23, d: "Sauce au choix, légumes" },
          { n: "Tagliatelle pesto au saumon grillé", p: 40, d: "" },
          {
            n: "Tagliatelle Royale",
            p: 38,
            d: "Sauce blanche, basilic, crevettes, calamars dorés, parmesan",
          },
          {
            n: "Tagliatelle du chef",
            p: 36,
            d: "Sauce rosée aux tomates séchées, poulet grillé, pignons, pistaches",
          },
          {
            n: "Rigatoni gamberi et saumon",
            p: 40,
            d: "Sauce rosée, crevettes, saumon fumé, basilic, zeste de citron, parmesan",
          },
          {
            n: "Rigatoni maison",
            p: 38,
            d: "Sauce blanche, poulet, crevettes, basilic, parmesan",
          },
          {
            n: "Rigatoni My Cocoon",
            p: 35,
            d: "Sauce pesto, poulet, champignons, burrata, parmesan",
          },
          {
            n: "Penne Alfredo",
            p: 30,
            d: "Sauce blanche, poulet, champignons, quatre fromages",
          },
          {
            n: "Penne 4 fromages",
            p: 32,
            d: "Sauce blanche, gruyère, gorgonzola, mozzarella cerise, parmesan",
          },
          {
            n: "Puttanesca",
            p: 28,
            d: "Sauce tomate, olives, piment séché, thon, piment de cayenne",
          },
          {
            n: "Spaghetti fruits de mer sauce rouge",
            p: 38,
            d: "Sauce rouge, cocktail de fruits de mer",
          },
          {
            n: "Spaghetti bolognaise",
            p: 28,
            d: "Sauce rouge, viande hachée, parmesan",
          },
          {
            n: "Lasagne bolognaise",
            p: 29,
            d: "Sauce tomate et viande hachée",
          },
          {
            n: "Lasagne fruits de mer",
            p: 32,
            d: "Sauce rosée et fruits de mer",
          },
          {
            n: "Paëlla royale",
            p: 87,
            d: "Riz, cocktail de fruits de mer, poulet, brochette de poulet, poisson grillé",
            tag: "2-3 PERSONNES",
          },
        ],
      },
      {
        title: "Nos Pâtes Fraîches",
        items: [
          { n: "Ravioli ricotta épinards", p: 30, d: "Sauce épinards" },
          { n: "Ravioli 4 fromages", p: 32, d: "Sauce fromage" },
          {
            n: "Ravioli 4 saisons",
            p: 34,
            d: "Ricotta, tomates séchées, mozzarella, burrata, sauce rosée",
          },

          {
            n: "Ravioli saumon crevettes",
            p: 37,
            d: "Sauce rosée aux crevettes",
          },
          { n: "Ravioli viande hachée", p: 28, d: "Sauce bolognaise" },
        ],
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas",
    icon: Pizza,
    items: [
      {
        n: "Margherita",
        p: 18,
        d: "Sauce tomate, mozzarella, origan, basilic frais",
      },
      {
        n: "Végétarienne",
        p: 20,
        d: "Sauce tomate, mozzarella, légumes grillés, champignons, olives",
      },
      { n: "Funghi", p: 22, d: "Sauce tomate, mozzarella, champignons" },
      { n: "Neptune", p: 22, d: "Sauce tomate, mozzarella, thon, olives" },
      {
        n: "Pepperoni",
        p: 22,
        d: "Sauce tomate, mozzarella, pepperoni, olive",
      },
      {
        n: "Quatre saisons",
        p: 26,
        d: "Sauce tomate, mozzarella, champignons, légumes, thon, jambon, olives",
      },
      {
        n: "Orientale",
        p: 23,
        d: "Sauce tomate, mozzarella, merguez, piment doux, oignon",
      },
      {
        n: "Turc",
        p: 23,
        d: "Sauce tomate, mozzarella, viande hachée, origan, basilic frais",
      },
      {
        n: "Mexicaine",
        p: 23,
        d: "Sauce tomate, mozzarella, poulet sauté, piment piquant, oignon",
      },
      {
        n: "Fruits de mer",
        p: 30,
        d: "Sauce tomate, mozzarella, cocktail de fruits de mer",
      },
      { n: "Saumon", p: 32, d: "Sauce rosée, mozzarella, saumon fumé, origan" },
      {
        n: "Burrata",
        p: 24,
        d: "Sauce blanche, mozzarella, burrata, roquette, sauce balsamique",
      },
      { n: "Chicken", p: 26, d: "Sauce blanche, mozzarella, poulet, origan" },
      {
        n: "Quatre fromages",
        p: 28,
        d: "Sauce blanche, mozzarella, gruyère, cheddar, parmesan, fromage cerise",
      },
      {
        n: "Diavola",
        p: 24,
        d: "Sauce tomate, mozzarella, bacon, champignon frais, roquette, olives, parmesan",
      },
      {
        n: "Calzone italien",
        p: 20,
        d: "Sauce tomate, jambon, œuf, mozzarella",
      },
      {
        n: "Calzone américain",
        p: 20,
        d: "Sauce tomate, viande hachée, mozzarella",
      },
      {
        n: "Calzone mexicain",
        p: 22,
        d: "Sauce tomate, poulet, œuf, mozzarella",
      },
    ],
    extraSection: {
      title: "Suppléments",
      items: [
        { n: "Saumon fumé", p: 10, d: "" },
        { n: "Thon / Jambon", p: 8, d: "" },
        { n: "Burrata", p: 6, d: "" },
        { n: "Mozzarella", p: 5, d: "" },
        { n: "Gorgonzola", p: 10, d: "" },
        { n: "Gruyère", p: 8, d: "" },
        { n: "Champignons", p: 8, d: "" },
        { n: "Portion fruit de mer", p: 12, d: "" },
        { n: "Focaccia", p: 10, d: "Pain au pesto, ail, huile d'olive" },
        { n: "Portion frites", p: 4, d: "" },
      ],
    },
  },
  {
    id: "pauses",
    title: "Pauses Légères",
    icon: Cookie,
    subSections: [
      {
        title: "Crêpes Sucrées",
        items: [
          {
            n: "My Cocoon",
            p: 18,
            d: "Au choix : Nutella / Spéculoos / Nutella-Spéculoos",
          },
          {
            n: "Banana Split",
            p: 24,
            d: "Nutella, banane, chantilly, crème noisette, glace",
          },
          {
            n: "Tutti frutti",
            p: 24,
            d: "Nutella, 3 fruits de saison, fruits secs, chantilly",
          },
        ],
      },
      {
        title: "Crêpes Salées",
        items: [
          {
            n: "Mistral",
            p: 18,
            d: "Thon, mozzarella, sauce fromagère, salade de saison, harissa au choix",
          },
          {
            n: "Sicilienne",
            p: 18,
            d: "Jambon, mozzarella, sauce fromagère, salade de saison",
          },
          {
            n: "Cheesy",
            p: 20,
            d: "Mozzarella, gruyère, fromage blanc, sauce fromagère, salade de saison",
          },
          {
            n: "Orientale",
            p: 18,
            d: "Poulet, mozzarella, sauce fromagère, sauce pesto, salade de saison",
          },
        ],
      },
      {
        title: "Nos Viennoiseries",
        items: [
          { n: "Cake maison", p: 4, d: "" },
          { n: "Croissant au beurre", p: 3, d: "" },
          { n: "Pain au chocolat", p: 3.5, d: "" },
          { n: "Croissant aux amandes", p: 4, d: "" },
          { n: "Croissant salé", p: 5, d: "" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Glaces",
    icon: IceCreamCone,
    subSections: [
      {
        title: "Nos Desserts et Pâtisseries",
        items: [
          { n: "Gâteau au choix", p: 10.5, d: "" },
          { n: "Cheesecake", p: 11.8, d: "" },
          { n: "Mini-cheesecake", p: 9.5, d: "" },
          { n: "Fondant au chocolat", p: 9, d: "" },
          { n: "Fondant boule de glace", p: 14, d: "" },
          { n: "Salade de fruits", p: 14, d: "" },
          { n: "Assiette de fruits", p: 22, d: "" },
        ],
      },
      {
        title: "Nos Glaces",
        items: [
          { n: "Coupe (2 boules)", p: 8, d: "" },
          { n: "Coupe (3 boules)", p: 11, d: "" },
          { n: "Coupe (4 boules)", p: 15, d: "" },
          {
            n: "Coupe Tutti frutti",
            p: 18,
            d: "4 boules au choix, fruits de saison",
          },
          {
            n: "Coupe My Cocoon",
            p: 20,
            d: "5 boules au choix, fruits de saison, fruits secs, chantilly, chocolat",
          },
        ],
      },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    icon: Martini,

    subSections: [
      {
        title: "Nos Cafés",
        items: [
          { n: "Américain", p: 4.5, d: "" },
          { n: "Espresso", p: 3.8, d: "" },
          { n: "Capucin", p: 4, d: "" },
          { n: "Café crème / direct", p: 4.8, d: "" },
          { n: "Crème grande tasse", p: 7.8, d: "" },
          { n: "Chocolat au lait", p: 4, d: "" },
          { n: "Cappuccino", p: 8, d: "" },
          { n: "Dose arôme", p: 3, d: "Supplément" },
          { n: "Dose menthe", p: 2, d: "" },
        ],
      },
      {
        title: "Nos Thés",
        items: [
          { n: "Thé à la menthe", p: 3.8, d: "" },
          { n: "Thé infusion", p: 5, d: "" },
          { n: "Thé aux amandes", p: 8.5, d: "" },
          { n: "Thé aux pignons", p: 10.5, d: "" },
          { n: "Verveine", p: 5, d: "" },
        ],
      },
      {
        title: "Nos Mojitos",
        items: [
          { n: "Virgin", p: 10, d: "" },
          { n: "Red Berry", p: 13, d: "" },
          { n: "Blue Berry", p: 13, d: "" },
          { n: "Dragon", p: 18, d: "à base de boisson énergétique" },
          { n: "Apple", p: 13, d: "" },
          { n: "Passion fruit", p: 14, d: "" },
        ],
      },
      {
        title: "Nos Frappuccinos",
        items: [
          { n: "Vanille / Caramel", p: 14, d: "" },
          { n: "Oreo", p: 15, d: "" },
          { n: "Nutella / Spéculoos", p: 16.8, d: "" },
        ],
      },
      {
        title: "Nos Jus Frais",
        note: "Selon la disponibilité des produits de saison",
        items: [
          { n: "Citronnade", p: 6, d: "" },
          { n: "Citronnade - boule de glace", p: 7.5, d: "" },
          { n: "Citronnade aux amandes", p: 8.5, d: "" },
          { n: "Orange", p: 6, d: "" },
          { n: "Orange aux amandes", p: 9, d: "" },
          { n: "Fraise", p: 8, d: "" },
          { n: "Fraise boule de glace", p: 9.5, d: "" },
          { n: "Banane", p: 13, d: "" },
          { n: "Kiwi", p: 9, d: "" },
          { n: "Fraise-Banane", p: 13, d: "" },
          { n: "Kiwi-Banane", p: 13, d: "" },
          { n: "Mixte fruits", p: 16.8, d: "" },
        ],
      },
      {
        title: "Nos Chocolats Chauds",
        items: [
          { n: "Classique", p: 10, d: "" },
          { n: "Chocolat Fruits secs et chantilly", p: 13, d: "" },
        ],
      },
      {
        title: "Nos Milkshakes",
        items: [
          {
            n: "Milkshakes au choix",
            p: 13,
            d: "(Fraise, Vanille, Caramel, Chocolat)",
          },
          { n: "Nutella", p: 15, d: "" },
          { n: "Oreo", p: 15, d: "" },
          { n: "Pistache", p: 16, d: "" },
        ],
      },
      {
        title: "Nos Cafés Glacés",
        items: [
          { n: "Classique", p: 9, d: "" },
          { n: "Affogato", p: 12, d: "Glace vanille et expresso" },
          { n: "Viennois", p: 12, d: "Glace vanille et café latte" },
          { n: "Liégeois", p: 12, d: "" },
        ],
      },
      {
        title: "Nos Boissons",
        items: [
          { n: "Eau minérale 0,5 L", p: 2, d: "" },
          { n: "Eau gazéifiée 0,5 L", p: 2, d: "" },
          { n: "Eau minérale 1 L", p: 3.5, d: "" },
          { n: "Eau gazéifiée 1 L", p: 3.5, d: "" },
          { n: "Soda", p: 3.5, d: "Coca, Fanta, Apla, Boga" },
          {
            n: "Boisson énergétique",
            p: 12,
            d: "",
          },
          { n: "Bière", p: 8, d: "" },
        ],
      },
    ],
  },
];
