import { useParams } from 'react-router-dom';
import { recipeS } from '../data/recette';

const Detail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipeS.find((item) => item.slug === slug);

  if (!recipe) {
    return <h1 className="p-6 text-2xl font-bold text-white">Recette introuvable</h1>;
  }

  return (
    <article className=' mx-auto max-w-6xl overflow-hidden rounded-xl bg-white shadow-md '>

      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="h-90 w-full object-cover" 
      />
      <div className='p-5'>
        <span className='text-3xl text-[#000000] '>
          {recipe.name}
        </span>
        <br />
        <span className='text-xs text-[#ffffff]  bg-amber-600 px-2 py-1 rounded-xl'>
          {recipe.category}
        </span>
        <span className='text-xs text-[#5f5353] '>
          <p>Preparation {recipe.prepTime}</p>
          <p>Temp de cuisson {recipe.cookTime}</p>
        </span>
        <br />
        <span className='text-l text-[#000000] '>
          <p>{recipe.description}</p>
        </span>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold text-gray-900">Ingrédients</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
              {recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900">Préparation</h2>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-gray-700">
              {recipe.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
        </div>




      </div>

    </article>
  );
};

export default Detail;