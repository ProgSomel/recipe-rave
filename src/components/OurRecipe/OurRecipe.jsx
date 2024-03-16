import PropTypes from "prop-types";
import { CiTimer } from "react-icons/ci";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
const OurRecipe = ({ recipe, handleWantToCook }) => {
    const {recipe_id, recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} = recipe;

  return (
    <div>
      <div className="card h-[700px]   bg-base-100 shadow-xl border-2">
       <div className="h-[350px] p-5">
       <figure>
          <img className="rounded-lg h-full"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
       </div>
        <div className="card-body ">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="font-light pb-5 border-b-2">{short_description}</p>
          <h1 className="mt-6">Ingredients: { ingredients.length}</h1>
          <div className="border-b-2 pb-4">
            {
                ingredients.map((ingredient, idx)=> <li className="font-light" key={idx}>{ingredient}</li>)
            }
          </div>
          <div className="flex  gap-2 mt-2">
          <div className="flex items-center gap-1">
          <CiTimer />
          {preparing_time} <span className="font-light">minutes</span>
          </div>
          <div className="flex items-center gap-1">
          <MdOutlineEnergySavingsLeaf />
          {calories} <span className="font-light">calories</span>
          </div>
          </div>
          <div className="card-actions mt-3">
            <button onClick={()=> handleWantToCook(recipe_id)} className="btn bg-orange-300 hover:bg-green-300 w-full">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

OurRecipe.propTypes = {
  recipe: PropTypes.object,
  handleWantToCook: PropTypes.func
};

export default OurRecipe;
