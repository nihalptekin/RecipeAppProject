
import Header from "../../components/header/Header"
import RecipeCard from "./RecipeCard"
import { HomeImg, ImgDiv } from './HomeStyles'
import homeSvg from "../../assets/home.svg"
import { useState, useEffect } from "react";

const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {


  const [query, setQuery]=useState(""); 
  const [mealType, setMealType]= useState("");
  const [yemekler, setYemekler]= useState([])


  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  useEffect(() => {
    fetch(url)2 
      .then((res) => res.json())
      .then((data) => setYemekler(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (yemekler.length > 0) {
      setQuery(yemekler[0].recipe.label);
    }
  }, [yemekler]);

  console.log(yemekler);

 
 return (
    <div>
   
      <Header  />

      {yemekler.length>0 ? (
        <div>
        {yemekler.map((yemek)=>{
           <RecipeCard key={yemek.recipe.url} />
        })}
           
          
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
}

export default Home