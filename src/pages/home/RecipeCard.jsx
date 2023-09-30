import React from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ yemek }) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
    {yemek.map((i)=>{ 
      <Cards key={i.redipe.id}>
        <RecipeHeader>{i.recipe.label} </RecipeHeader>
        <RecipeImage src={i.recipe.image} alt={yemek.label} />
        <Button onClick={() => navigate("/details", {state:{i}})}> Details </Button>
      </Cards>

    })}
     
    </MainContainer>
  );
};

export default RecipeCard;
