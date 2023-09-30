import React, { useEffect } from "react";
import { HeaderContainer } from "../header/HeaderStyles";
import { Button, FormContainer, Select } from "../header/HeaderStyles";
import { FoodInput, MainHeader } from "./HeaderStyles";
import { useNavigate } from "react-router-dom";

const Header = ({ setMealType, setQuery, fetchData, query }) => {


  const handleSubmit = (e) => {
    e.preventDefault();
   fetchData();
  };


  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <Button type="submit">Search</Button>
        <Select  onChange={(e)=> setMealType(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
