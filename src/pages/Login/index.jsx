import React, { useState, useEffect } from "react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import Container from "./styles";
import blobLogin from "../../images/blob-login.svg";
import logoLogin from "../../images/TRYFOOD.png";

function Login() {
  const history = useHistory();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const { email, password } = loginState;

  const handleChange = (value, id) => {
    setLoginState({
      ...loginState,
      [id]: value,
    });
  };

  const validateEmailAndPassword = () => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i;
    const minLength = 7;
    const validation = !(
      regexEmail.test(email) && password.length >= minLength
    );
    setDisabled(validation);
  };

  const saveInLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify({ email }));
    localStorage.setItem("mealsToken", JSON.stringify(1));
    localStorage.setItem("cocktailsToken", JSON.stringify(1));
    history.push("/comidas");
  };

  useEffect(() => {
    validateEmailAndPassword();
  }, [loginState]);

  return (
    <Container>
      <img src={blobLogin} alt="blob" />
      <img src={logoLogin} alt="logo" />
      <h2>Seja Bem-vindo!</h2>
      <p>Inscreva-se com uma das seguintes opções!</p>
      <input
        id="email"
        type="email"
        data-testid="email-input"
        value={email}
        onChange={({ target: { value, id } }) => handleChange(value, id)}
        placeholder="Email"
        required
      />
      <input
        id="password"
        type="password"
        data-testid="password-input"
        value={password}
        onChange={({ target: { value, id } }) => handleChange(value, id)}
        placeholder="Senha"
        isRequired
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={disabled}
        onClick={saveInLocalStorage}
      >
        Entrar
      </button>
      <hr />
      <div>
        <button type="button">
          <FaGithub color="#FFFFFF" size={30} />
        </button>
        <button type="button">
          <FaFacebook color="#FFFFFF" size={30} />
        </button>
        <button type="button">
          <FaGoogle color="#FFFFFF" size={30} />
        </button>
      </div>
    </Container>
  );
}

export default Login;
