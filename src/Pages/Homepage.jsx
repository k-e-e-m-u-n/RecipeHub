
import Body from "../Components/Body"
import flavorDish from "../Recidish_Images/flavorDish.jpg";
import flavorDishTwo from "../Recidish_Images/flavorDish2.jpg";
import spaghetti from "../Recidish_Images/spaghettiJPEG.jpg"
import chickenPasta from "../Recidish_Images/ChickenPasta.jpg"
import porridge from "../Recidish_Images/Porridge.jpg"
import jellofRice from "../Recidish_Images/Jellof Rice.jpg"
import RecipeIcon from "../Recidish_Images/RecipesHome.svg"


import HomeCards from "../Components/HomeCards";

export default function Homepage() {
  return (
    <>
      <Body>
        {/*numbers  */}

        {/* Cards section */}

        {/*  */}
        <main className="px-[4%] min-h-[100vh] my-2 sm:w-[95%] sm:mx-auto ">
          {/* welcome Flavors one */}
          <div
            id="welcomeFlavors"
            className="min-h-[50vh] mb-2  sm:flex  sm:mb-[10px] sm:w-[100%] sm:gap-3  sm:h-[80vh] sm:justify-between "
          >
            {/* texts */}
            <div
              id="heading--text"
              className="flex flex-col h-[50%] gap-0 mb-1 sm:w-[50%] sm:h-100% sm:gap-0  "
            >
              {/* h1 */}
              <h1 className="text-center text-[#996D3E] font-semibold font-poppins  sm:text-[30px] sm:mb-[1rem] sm:text-left">
                Welcome to the Flavors of Nigeria!
              </h1>
              <p className="text-justify font-poppins text-[.8rem]  sm:text-left sm:text-[21px] sm:font-normal sm:leading-[35px] ">
                Discover, Cook, and Share Amazing Recipes Welcome to Recidish,
                your go-to hub for all things culinary! Whether you are a
                seasoned chef or a kitchen novice, our app is designed to
                inspire and assist you in creating mouth-watering dishes right
                from the comfort of your home.
              </p>
              <p className="text-justify font-poppins text-[.8rem]  sm:text-left sm:text-[21px] sm:font-normal sm:leading-[35px]mb-3  ">
                Plan your meals with ease using our integrated meal planning
                tool. Select recipes for the week, generate shopping lists, and
                stay organized in the kitchen. Eating well has never been so
                effortless.
              </p>
            </div>
            {/* imageFlavorOne */}
            <figure
              id="img"
              className="min-h-[30vh]   sm:rounded-[25px] sm:w-[47%] sm:flex sm:items-center  "
            >
              <img
                src={flavorDish}
                alt=""
                className="h-[100%] w-[100%] rounded-[1rem] sm:rounded-[25px]  sm:h-[80%] sm:w-[
              70%]  "
              />
            </figure>
          </div>
          {/* WelcomeFlavorsTwo */}
          <div
            id="welcomeFlavorsTwo"
            className="min-h-[50vh] mb-2 sm:flex  sm:mb-[3rem] sm:w-[100%] sm:gap-8 sm:flex-row-reverse sm:justify-between "
          >
            <div
              id="text"
              className="flex flex-col gap-0 sm:w-[50%] sm:h-100% sm:gap-0 sm:self-center "
            >
              {/* h1 */}
              <h1 className="text-center text-[#996D3E] font-semibold font-poppins sm:text-[30px]  sm:mb-[1rem] sm:text-left">
                Explore Our Recipe Collection
              </h1>
              <p className=" text-justify font-poppins text-[.8rem]  sm:text-left sm:text-[21px] sm:font-normal sm:leading-[35px]">
                Dive into our extensive collection of recipes from around the
                world. From classic comfort foods to exotic delicacies, we have
                got something for every palate. Easily browse by cuisine,
                dietary preferences, or meal type, and find the perfect recipe
                to suit any occasion.
              </p>
              <p className=" text-justify font-poppins text-[.8rem] mb-3  sm:text-left sm:text-[21px] sm:font-normal sm:leading-[35px] ">
                We believe that anyone can cook, and our step-by-step
                instructions make it easy. Each recipe includes detailed
                directions, ingredient lists, and cooking tips to ensure your
                dishes turn out perfectly every time. Plus, our instructional
                videos offer additional guidance and inspiration.
              </p>
            </div>
            {/*  */}
            <figure
              id="img"
              className="min-h-[30vh]   sm:rounded-[25px] sm:w-[47%] sm:flex sm:items-center "
            >
              <img
                src={flavorDishTwo}
                alt=""
                className="h-[100%] w-[100%] rounded-[1rem] sm:rounded-[25px]  sm:h-[80%] sm:w-[
              70%] "
              />
            </figure>
          </div>

          {/*  */}
        </main>
        {/*  */}
        <div
          id="Recipes"
          className="px-[4%] min-h-[5vh]   mt-[1rem] flex gap-4 justify-center items-center   sm:mx-auto sm:w-[95%] sm:flex sm:justify-start sm:gap-3 sm:min-h-[10vh] "
        >
          <h1 className="text-[20px] text-[#996D3E] font-semibold sm:font-inter sm:text-[50px]  sm:font-normal  sm:min-h-3">
            Recipes
          </h1>
          <img src={RecipeIcon} alt="" className="h-[1.5rem] sm:h-[3rem]" />
        </div>
        {/*CARDS  */}
        <div
          id="cards"
          className="px-[4%] min-h-[10vh] my-2  mb-[1rem] flex flex-col gap-2  sm:mx-auto sm:w-[95%] sm:grid sm:grid-cols-2 sm:gap-x-16 sm:gap-y-8 "
        >
          <HomeCards
            title={"Spaghetti"}
            recipeImg={spaghetti}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
          <HomeCards
            title={"Chicken pasta"}
            recipeImg={chickenPasta}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
          <HomeCards
            title={"Porridge"}
            recipeImg={porridge}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
          <HomeCards
            title={"Jellof Rice"}
            recipeImg={jellofRice}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
        </div>
      </Body>
    </>
  );
}
