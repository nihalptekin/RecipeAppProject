import React from 'react'
import { HeaderContainer } from '../header/HeaderStyles'
import { Button, FormContainer, Select } from '../header/HeaderStyles'
import { FoodInput, MainHeader } from './HeaderStyles'
import { useNavigate } from 'react-router-dom'

const Header = () => {
const navigate= useNavigate()

  return (
    <HeaderContainer>
    
<MainHeader>

FOOD APP

</MainHeader>

<FormContainer>
<FoodInput/>
<Button onClick={()=> navigate("/home")}> Search </Button>
<Select> 
{/* {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))} */}
</Select>

</FormContainer>

    
    </HeaderContainer>
  )
}

export default Header