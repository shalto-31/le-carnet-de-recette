export interface recipe {
  id: string;
  name: string;
  slug: string;
  category: 'entrees' | 'plats' | 'desserts';
  prepTime: string;
  cookTime: string;
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

export const recipeS: recipe[] = [
  {
    id: "1",
    name: "Tarte tatin aux tomates cerises",
    slug: "tarte-tatin-aux-tomates-cerises",
    category: "entrees",
    prepTime: "20 min",
    cookTime: "30 min",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgY9ilOOpwa8h_37iq_sywVET2-_4O64UH7HNSEovZhA&s=10",
    description: "Une variante salée et caramélisée de la classique tarte tatin, parfaite pour débuter le repas.",
    ingredients: [
      "500g de tomates cerises",
      "1 pâte feuilletée",
      "2 cuillères à soupe de vinaigre balsamique",
      "1 cuillère à soupe de sucre",
      "Thym frais et huile d'olive"
    ],
    steps: [
      "Faire caraméliser le sucre et le vinaigre balsamique dans une poêle allant au four.",
      "Ajouter les tomates cerises et le thym, puis laisser compoter 5 minutes.",
      "Recouvrir avec la pâte feuilletée en rentrant bien les bords.",
      "Enfourner 25 minutes à 200°C puis démouler délicatement."
    ]
  },
  {
    id: "2",
    name: "Velouté de potimarron et châtaignes",
    slug: "veloute-de-potimarron-et-chataignes",
    category: "entrees",
    prepTime: "15 min",
    cookTime: "25 min",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800",
    description: "Un velouté réconfortant et onctueux aux saveurs automnales.",
    ingredients: [
      "1 potimarron moyen",
      "200g de châtaignes cuites",
      "1 oignon",
      "50cl de bouillon de légumes",
      "10cl de crème liquide"
    ],
    steps: [
      "Couper le potimarron en dés (sans le peler) et émincer l'oignon.",
      "Faire revenir l'oignon, ajouter le potimarron et le bouillon.",
      "Laisser mijoter 20 minutes jusqu'à ce que le potimarron soit tendre.",
      "Ajouter les châtaignes et la crème, puis mixer le tout jusqu'à obtention d'une texture lisse."
    ]
  },
  {
    id: "3",
    name: "Risotto aux champignons sauvages",
    slug: "risotto-aux-champignons-sauvages",
    category: "plats",
    prepTime: "15 min",
    cookTime: "25 min",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&q=80&w=800",
    description: "Un risotto crémeux à l'italienne parfumé au parmesan et champignons de saison.",
    ingredients: [
      "300g de riz Arborio",
      "400g de champignons mélangés",
      "1 litre de bouillon de volaille",
      "10cl de vin blanc sec",
      "60g de parmesan râpé",
      "1 échalote"
    ],
    steps: [
      "Faire revenir l'échalote et les champignons dans du beurre, puis réserver les champignons.",
      "Nacrer le riz dans la même poêle pendant 2 minutes.",
      "Déglacer au vin blanc, puis ajouter le bouillon louche par louche en remuant.",
      "Incorporer les champignons et le parmesan en fin de cuisson."
    ]
  },
  {
    id: "4",
    name: "Pavé de saumon rôti et purée de patate douce",
    slug: "pave-de-saumon-roti-et-puree-de-patate-douce",
    category: "plats",
    prepTime: "20 min",
    cookTime: "20 min",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    description: "Un plat équilibré mariant la douceur de la patate douce et la finesse du saumon.",
    ingredients: [
      "2 pavés de saumon frais",
      "2 grosses patates douces",
      "20g de beurre",
      "1 citron vert",
      "Aneth frais, sel et poivre"
    ],
    steps: [
      "Éplucher et couper les patates douces en dés, puis les faire cuire à la vapeur 15 minutes.",
      "Écraser les patates douces avec le beurre, du sel et du poivre.",
      "Saisir les pavés de saumon à la poêle 3 à 4 minutes par face.",
      "Servir chaud avec un filet de jus de citron vert et de l'aneth."
    ]
  },
  {
    id: "5",
    name: "Fondant au chocolat et cœur coulant",
    slug: "fondant-au-chocolat-et-coeur-coulant",
    category: "desserts",
    prepTime: "15 min",
    cookTime: "10 min",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    description: "Un grand classique gourmand au cœur irrésistiblement coulant.",
    ingredients: [
      "200g de chocolat noir",
      "100g de beurre",
      "3 œufs",
      "50g de sucre",
      "40g de farine"
    ],
    steps: [
      "Faire fondre le chocolat et le beurre au bain-marie.",
      "Fouetter les œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
      "Ajouter la farine puis le chocolat fondu.",
      "Verser dans des ramequins beurrés et enfourner 10 minutes à 200°C."
    ]
  },
  {
    id: "6",
    name: "Tiramisu traditionnel au café",
    slug: "tiramisu-traditionnel-au-cafe",
    category: "desserts",
    prepTime: "25 min",
    cookTime: "0 min",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
    description: "Le véritable dessert italien sans cuisson, à préparer idéalement la veille.",
    ingredients: [
      "250g de mascarpone",
      "3 œufs",
      "80g de sucre",
      "20 biscuits boudoirs ou cuillère",
      "1 tasse de café noir fort",
      "Cacao en poudre non sucré"
    ],
    steps: [
      "Séparer les blancs des jaunes. Fouetter les jaunes avec le sucre puis incorporer le mascarpone.",
      "Monter les blancs en neige ferme et les intégrer délicatement au mélange.",
      "Tremper rapidement les biscuits dans le café et tapisser le fond du plat.",
      "Alterner couches de biscuits et crème au mascarpone, puis réserver au frais au moins 4 heures."
    ]
  },
  {
    id: "7",
    name: "Carpaccio de Saint-Jacques aux agrumes",
    slug: "carpaccio-de-saint-jacques-aux-agrumes",
    category: "entrees",
    prepTime: "15 min",
    cookTime: "0 min",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
    description: "Une entrée raffinée et très fraîche, relevée par l'acidité du pamplemousse et du citron vert.",
    ingredients: [
      "12 noix de Saint-Jacques fraîches",
      "1 pamplemousse rose",
      "1 citron vert",
      "3 cuillères à soupe d'huile d'olive extra vierge",
      "Fleur de sel et baies roses"
    ],
    steps: [
      "Trancher très finement les noix de Saint-Jacques avec un couteau bien aiguisé.",
      "Disposer les lamelles en rosace sur les assiettes.",
      "Prelever les suprêmes du pamplemousse et exprimer le jus du citron vert.",
      "Arroser d'huile d'olive, de jus de citron, puis parsemer de suprêmes, fleur de sel et baies roses écrasées."
    ]
  },
  {
    id: "8",
    name: "Poulet curry et lait de coco",
    slug: "poulet-curry-et-lait-de-coco",
    category: "plats",
    prepTime: "15 min",
    cookTime: "20 min",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800",
    description: "Un plat exotique et parfumé, simple à réaliser pour un voyage gustatif rapide.",
    ingredients: [
      "500g de filets de poulet",
      "40cl de lait de coco",
      "2 cuillères à soupe de curry en poudre",
      "1 poivron rouge",
      "1 oignon et 1 gousse d'ail"
    ],
    steps: [
      "Couper le poulet en dés et émincer l'oignon et le poivron.",
      "Faire revenir l'oignon, l'ail et le poivron dans une poêle avec un filet d'huile.",
      "Ajouter les morceaux de poulet et les saisir jusqu'à ce qu'ils soient dorés.",
      "Saupoudrer de curry, verser le lait de coco et laisser mijoter 15 minutes à feu doux."
    ]
  },
  {
    id: "9",
    name: "Crumble aux pommes et cannelle",
    slug: "crumble-aux-pommes-et-cannelle",
    category: "desserts",
    prepTime: "20 min",
    cookTime: "30 min",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=800",
    description: "Un dessert réconfortant avec des pommes fondantes sous une pâte croustillante aux amandes.",
    ingredients: [
      "6 pommes (type Golden ou Gala)",
      "100g de farine",
      "80g de beurre doux froid",
      "80g de sucre rous",
      "50g de poudre d'amandes",
      "1 cuillère à café de cannelle"
    ],
    steps: [
      "Éplucher et couper les pommes en morceaux, puis les faire compoter 5 minutes dans une poêle avec la cannelle.",
      "Préparer la pâte en sablant du bout des doigts la farine, le beurre en dés, le sucre et la poudre d'amandes.",
      "Disposer les pommes dans un plat allant au four et répartir le sable de pâte par-dessus.",
      "Enfourner 30 minutes à 180°C jusqu'à ce que le dessus soit bien doré."
    ]
  },
  {
    id: "10",
    name: "Le Pudding à l'Arsenic (Façon Astérix)",
    slug: "pudding-a-l-arsenic",
    category: "desserts",
    prepTime: "20 min",
    cookTime: "45 min",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeFmMJjQrmdvqTV6uExcJptnw5H4zqJlI81Af-FpboQ&s=10",
    description: "La célèbre recette chantée par Amonbofis dans 'Astérix et Cléopâtre'. Une version parfaitement comestible et gourmande à base de chocolat et d'épices !",
    ingredients: [
      "200g de chocolat noir (pour la couleur 'strychnine')",
      "150g de farine",
      "100g de sucre",
      "100g de beurre",
      "3 œufs",
      "1 pincée de cannelle (en souvenir du venin de cobra)",
      "Zeste de citron (pour l'amertume sans bave de crapaud)"
    ],
    steps: [
      "Dans un grand chaudron (ou un cul-de-poule), mélanger le sucre et les œufs jusqu'à ce que le mélange blanchisse.",
      "Faire fondre le chocolat et le beurre à feu doux, puis l'incorporer au mélange.",
      "Ajouter la farine, le zeste de citron et la cannelle en chantonnant la chanson du film.",
      "Verser la préparation dans un moule beurré et enfourner 45 minutes à 180°C.",
      "Servir tiède (garanti sans danger pour Numérobis) !"
    ]
  }
];