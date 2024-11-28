import Image from "next/image";
import SearchRecipe from "./search/page";
import RandomRecipe from "./view-recipe/RandomRecipe";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
   
        <main className="container mx-auto p-4">
          <section>
            <h2 className="text-3xl font-bold mb-4">
             Adels Random Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* <RecipeCard /> */}
              <RandomRecipe />
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 text-white p-4 ">
          <div className="container mx-auto text-center">
            <p>
              © 2024 Yinkusadel Recipe Finder. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
