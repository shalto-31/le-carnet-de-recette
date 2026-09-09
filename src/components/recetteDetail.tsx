import { Link } from 'react-router-dom';
import { recipeS } from '../data/recette';

interface recipeDetailProps {
  recipe: (typeof recipeS)[number];
}

export function RecipeDetail({ recipe }: recipeDetailProps) {
  return (
    <div className="bg-[#a5a5a5] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#fd9a00] bg-amber-50 px-2 py-1 rounded">
          {recipe.category}
        </span>
        <h3 className="text-xl font-bold mt-2 text-gray-800">{recipe.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{recipe.description}</p>
        
        <div className="flex justify-between items-center mt-4 pt-5 border-t border-gray-100 text-xs text-gray-500">
          <span>Prépa : {recipe.prepTime}</span>
          <span>Cuisson : {recipe.cookTime}</span>
        </div>

        <Link
          to={`/recipe/${recipe.slug}`}
          className="mt-4 block text-center bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-lg transition"
        >
          Voir la recipe
        </Link>
      </div>
    </div>
  );
}