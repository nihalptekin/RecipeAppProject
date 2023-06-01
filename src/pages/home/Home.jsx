import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from './HomeStyles';
import homeSvg from "../../assets/home.svg";
import { useState, useEffect } from "react";


const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [yemekler, setYemekler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setYemekler(data.hits);
        } else {
          throw new Error("An error occurred while fetching data.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    fetchData();
  }, [query, mealType]);

  return (
    <div>
      <Header setQuery={setQuery} setMealType={setMealType} yemekler={yemekler} setYemekler={setYemekler} />
      {yemekler.length > 0 ? (
        <div>
          {yemekler.map((yemek) => (
            <RecipeCard key={yemek.recipe.url} yemek={yemek.recipe} />
          ))}
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} alt="Home" />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
