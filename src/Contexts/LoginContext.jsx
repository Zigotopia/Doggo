import React, { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_POST_VALIDATE } from "../Apis/apis";
import { GET_USER } from "../Apis/apis";
import { useNavigate } from "react-router-dom";

export const userconxtext = createContext();

const LoginContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [logged, setLogged] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getUserInfo = useCallback(async function (token) {
    const { url, options } = GET_USER(token);
    const userResponse = await fetch(url, options);
    const json = await userResponse.json();
    setData(json);
    setLogged(true);
  }, []);

  // ja essa aqui vai servir para gerar o token do usuario e quando pegar esse token pegar as informaões de usuario cadastrados na  api. Pegando essas informçãoes mando para um estado e posso utilizar esse estrado como quiser
  async function loginUser(username, password) {
    try {
      setLoading(true);
      setError(null);
      const { url, options } = TOKEN_POST({ username, password });

      const loginResponse = await fetch(url, options);

      if (!loginResponse.ok) throw new Error(loginResponse.statusText)
      const { token } = await loginResponse.json();
      
      window.localStorage.setItem("token", token);
      getUserInfo(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      error && console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // isso aqui vai ser vir para setar todos os dados comos os anteriores
  const logout = useCallback(
    function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogged(false);
      window.localStorage.removeItem("token");
      navigate("/");
    },
    [navigate]
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setLoading(true);
          setError(null);
          const { url, options } = TOKEN_POST_VALIDATE(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Deu merda no fetch filho");
          await getUserInfo(token);
        } catch (err) {
          setError(err.message);
          logout();
        } finally {
          setLoading(false);
        }
      }
      else{ setLogged(false)}
    }
    autoLogin();
  }, []);

  return (
    <userconxtext.Provider
      value={{ loginUser, data, logged, logout, loading, error, setError }}
    >
      {children}
    </userconxtext.Provider>
  );
};

export default LoginContext;
