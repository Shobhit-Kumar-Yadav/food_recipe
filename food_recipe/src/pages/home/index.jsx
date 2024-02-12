import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home(){
    const { recipeList, loading } = useContext(GlobalContext);

    if (loading) return <div>Loading...Please wait!</div>;
  
    return (
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item) => <RecipeItem item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold  hover:text-pink-700 duration-300">
              Nothing to show.
            </p>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold  hover:text-pink-900 duration-300">
             Please search something
            </p>
          </div>
        )}
      </div>
    );
}