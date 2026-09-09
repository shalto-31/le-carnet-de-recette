// src/pages/Home.tsx

import { recipeS } from '../data/recette';
import { RecipeCard } from '../components/RecipeCard';

export function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#ffffff]">Toutes les recipes</h1>
      <br></br>
            
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipeS.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;