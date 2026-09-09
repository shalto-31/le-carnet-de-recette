import { useParams, Link } from 'react-router-dom';
import { recipeS, type recipe } from '../data/recette';

// Libellés propres pour l'affichage
const CATEGORY_NAMES: Record<recipe['category'], string> = {
  entrees: "Entrées",
  plats: "Plats Principaux",
  desserts: "Desserts",
};

export default function Category() {
  const { nom } = useParams<{ nom?: recipe['category'] }>();

  // Extraction automatique des catégories uniques présentes dans les recettes
  const availableCategories = Array.from(new Set(recipeS.map((r) => r.category))) as recipe['category'][];

  // 1. VUE DÉTAILLÉE : /category/:nom
  if (nom) {
    const categoryRecipes = recipeS.filter((r) => r.category === nom);
    const isValidCategory = availableCategories.includes(nom);

    if (!isValidCategory) {
      return (
        <div className="text-center text-white py-12">
          <h2 className="text-2xl font-bold">Catégorie non trouvée</h2>
          <Link to="/category" className="mt-4 inline-block text-amber-400 hover:underline">
            ← Voir toutes les catégories
          </Link>
        </div>
      );
    }

    return (
      <div className="max-w-6xl mx-auto text-white space-y-8">
        <div className="flex flex-col gap-2">
          <Link to="/category" className="text-amber-400 text-sm hover:underline w-fit">
            ← Toutes les catégories
          </Link>
          <h1 className="text-3xl font-bold">{CATEGORY_NAMES[nom] || nom}</h1>
          <p className="text-gray-300">
            {categoryRecipes.length} {categoryRecipes.length > 1 ? 'recettes trouvées' : 'recette trouvée'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryRecipes.map((item) => (
            <div
              key={item.id}
              className="bg-[#212b48] rounded-xl overflow-hidden border border-slate-700/50 flex flex-col hover:border-amber-400/50 transition-all duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>⏱️ Prep: {item.prepTime}</span>
                    <span>🍳 Cuisson: {item.cookTime}</span>
                  </div>

                  <Link
                    to={`/recipe/${item.slug}`}
                    className="block text-center w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors text-sm"
                  >
                    Voir la recette
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. VUE GLOBALE : /category (liste de toutes les catégories extraites)
  return (
    <div className="max-w-6xl mx-auto text-white space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Toutes les Catégories</h1>
        <p className="text-gray-300">Sélectionnez une catégorie pour découvrir nos recettes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableCategories.map((catKey) => {
          // On récupère la première recette de cette catégorie pour utiliser son image en illustration
          const firstRecipe = recipeS.find((r) => r.category === catKey);
          const count = recipeS.filter((r) => r.category === catKey).length;

          return (
            <Link
              key={catKey}
              to={`/category/${catKey}`}
              className="group relative h-64 rounded-xl overflow-hidden border border-slate-700/50 hover:border-amber-400 transition-all duration-300"
            >
              <img
                src={firstRecipe?.image}
                alt={catKey}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#192037] via-[#192037]/60 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {CATEGORY_NAMES[catKey] || catKey}
                </h2>
                <p className="text-gray-300 text-sm mt-1">
                  {count} {count > 1 ? 'recettes' : 'recette'}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}