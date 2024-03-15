import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Bannner/Banner";
import Navbar from "./components/Navbar/Navbar";
import OurRecipe from "./components/OurRecipe/OurRecipe";
function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto mt-4 font-lexend px-2 md:px-4 lg:px-4">
      <Navbar></Navbar>
      <Banner></Banner>

      <div>
        <h1 className="text-4xl font-bold text-center mt-16">Our Recipes</h1>
        <p className="text-center mt-4 font-light">
          Dive into a world of culinary delights with our extensive recipe
          collection! Whether you are a seasoned chef or a novice in the kitchen,
          our carefully curated selection of recipes offers something for
          everyone.{" "}
        </p>

        <div className="all-contanier">
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {
              recipes.map(recipe=> <OurRecipe key={recipe.id} recipe={recipe}></OurRecipe>)
            }
          </div>
          <div className="lg:w-1/2">
            <div className="want-to-cook"></div>
            <div className="currently-cooking"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
