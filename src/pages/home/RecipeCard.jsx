import React from 'react'
import { Button, Cards, MainContainer, RecipeHeader, RecipeImage } from './HomeStyles'
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({yemek}) => {
  const navigate= useNavigate()
  return (
    <MainContainer> 
   <Cards>
    <RecipeHeader>{yemek.label} </RecipeHeader>
    <RecipeImage src={yemek.image} alt={yemek.label} /> 
    <Button onClick={()=> navigate("/details")}> Details </Button>
   </Cards>

    </MainContainer>
  );
}

export default RecipeCard