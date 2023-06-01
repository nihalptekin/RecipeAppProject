import React, { useEffect } from 'react';
import { HeaderContainer } from '../header/HeaderStyles';
import { Button, FormContainer, Select } from '../header/HeaderStyles';
import { FoodInput, MainHeader } from './HeaderStyles';
import { useNavigate } from 'react-router-dom';

const Header = ({
  mealType,
  setMealType,
  query,
  setQuery,
  yemekler,
  setYemekler,
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  useEffect(() => {
    console.log('Query:', query);
    setQuery('');
  }, [query, setQuery]);

  const handleMealTypeChange = (e) => {
    const selectedMealType = e.target.value;
    setMealType(selectedMealType);

    const filteredYemekler = yemekler.filter(
      (yemek) => yemek.mealType === selectedMealType
    );
    setYemekler(filteredYemekler);
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
        <Select value={mealType} onChange={handleMealTypeChange}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
