import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Bannner/Banner";
import Navbar from "./components/Navbar/Navbar";
import OurRecipe from "./components/OurRecipe/OurRecipe";
import WantToCook from "./components/WantToCook/WantToCook";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCooks, setWantToCooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (id) => {
    const item = recipes.find(value => value.recipe_id === id);
    console.log(item);

    const newWantToCook = [...wantToCooks, item];
    setWantToCooks(newWantToCook);
  }

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

        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className=" lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
            {
              recipes.map(recipe=> <OurRecipe key={recipe.id} recipe={recipe} handleWantToCook={handleWantToCook}></OurRecipe>)
            }
          </div>
          <div className="lg:w-[35%] my-8 p-8 border rounded-xl">
            <div className="want-to-cook text-center">
              <h1 className=" border-b-2 text-2xl font-bold ">Want to cook: {wantToCooks.length}</h1>
             <div className="flex mt-2 justify-center items-center gap-10 font-light">
             <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
             </div>

             <div>
              {
                wantToCooks.map((wantToCook, idx)=> <WantToCook key={idx} wantToCook={wantToCook}></WantToCook>)
              }
             </div>
              
            </div>
            <div className="currently-cooking mt-8 font-light text-center">
            <h1 className=" border-b-2 text-2xl font-bold ">Currently Cooking: </h1>
             <div className="flex mt-2 justify-center items-center gap-10">
             <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
