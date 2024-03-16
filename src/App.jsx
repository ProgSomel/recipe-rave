import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Bannner/Banner";
import Navbar from "./components/Navbar/Navbar";
import OurRecipe from "./components/OurRecipe/OurRecipe";
import WantToCook from "./components/WantToCook/WantToCook";
import CurrentlyCooking from "./components/CurrentlyCooking/CurrentlyCooking";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCooks, setWantToCooks] = useState([]);
  const [currentlyCookings, setCurrentlyCookings] = useState([]);
  const [totalTimes, setTotalTimes] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (id) => {
    const itemFromWantToCook = wantToCooks.find(
      (item) => item.recipe_id === id
    );
    if (itemFromWantToCook) {
      toast.error(`${itemFromWantToCook.recipe_name} Already Added to Want to Cook!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    } else {
      const item = recipes.find((value) => value.recipe_id === id);
      const newWantToCook = [...wantToCooks, item];
      setWantToCooks(newWantToCook);
      toast.success(`${item.recipe_name} Added to the Want to Cook`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };

  const handleCurrentlyCooking = (id) => {
    const item = wantToCooks.find((value) => value.recipe_id === id);
    const newCurrentlyCooking = [...currentlyCookings, item];
    setCurrentlyCookings(newCurrentlyCooking);
    setWantToCooks(wantToCooks.filter((item) => item.recipe_id !== id));
    const newTotalTimes = totalTimes + item.preparing_time;
    setTotalTimes(newTotalTimes);

    setTotalCalories(totalCalories + item.calories);


  };

  return (
    <div className="max-w-screen-lg mx-auto mt-4 font-lexend px-2 md:px-4 lg:px-4">
      <Navbar></Navbar>
      <Banner></Banner>

      <div>
        <h1 className="text-4xl font-bold text-center mt-16">Our Recipes</h1>
        <p className="text-center mt-6 font-light">
          Dive into a world of culinary delights with our extensive recipe
          collection! Whether you are a seasoned chef or a novice in the
          kitchen, our carefully curated selection of recipes offers something
          for everyone.{" "}
        </p>

        <div className="flex flex-col-reverse lg:flex-row gap-10 mt-8">
          <div className=" lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
            {recipes.map((recipe) => (
              <OurRecipe
                key={recipe.id}
                recipe={recipe}
                handleWantToCook={handleWantToCook}
              ></OurRecipe>
            ))}
          </div>
         <div className="lg:w-1/2">
         <div className=" my-8 p-2 border rounded-xl">
            <div className="want-to-cook ">
              <h1 className=" border-b-2 text-2xl font-bold text-center ">
                Want to cook: {wantToCooks.length}
              </h1>
              <div className="flex ml-5  gap-8 mt-3 ">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>

              <div className="bg-[#28282808]">
                {wantToCooks.map((wantToCook, index) => (
                  <WantToCook
                    key={index}
                    index={index}
                    wantToCook={wantToCook}
                    handleCurrentlyCooking={handleCurrentlyCooking} 
                  ></WantToCook>
                ))}
              </div>
            </div>
            <div className="currently-cooking mt-8 ">
              <h1 className=" border-b-2 text-2xl font-bold text-center  ">
                Currently Cooking: {currentlyCookings.length}
              </h1>
              <div className="flex ml-5 gap-8  md:gap-20 mt-3">
                <p>Name</p>
                <p className="">Time</p>
                <p>Calories</p>
              </div>
              <div className="bg-[#28282808] ">
                {currentlyCookings.map((currentlyCooking, idx) => (
                  <CurrentlyCooking
                    key={idx}
                    idx={idx}
                    currentlyCooking={currentlyCooking}
                  ></CurrentlyCooking>
                ))}
               
              </div>
              <div className="flex justify-end  mt-5">
                 <div className="space-y-2">
                 <h1>Total Times: {totalTimes} Minutes</h1>
                  <h1>Total Calories: {totalCalories} Calories</h1>
                 </div>
                </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    <ToastContainer />

    </div>
  );
}

export default App;
