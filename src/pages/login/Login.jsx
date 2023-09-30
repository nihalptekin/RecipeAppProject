import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../auth/firebase";

import {
  toastSuccessNotify,
} from "../../helpers/ToastNotify";

import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
  Googlebutton,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/GoogleIcon";

const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        toastSuccessNotify("Logged in successfuly");
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //face bir backend yaptik
    localStorage.setItem("username", (name));
    localStorage.setItem("password", (pass));
    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>Welcome Recipe App</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />
          <StyledButton type="submit">Login</StyledButton>

          <Googlebutton
     
            type="button"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon style={{marginLeft: "5px"}} />
          </Googlebutton>
        </StyledForm>


      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
