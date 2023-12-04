import Button from "../Button/Button.jsx";
import Input from "../Input/Input";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import dogs from "../../Assets/login.jpg";
import useForm from "../../Hooks/UseForm.jsx";
import { GET_USER, TOKEN_POST } from "../../Apis/apis.jsx";
import { useContext, useEffect } from "react";
import { userconxtext } from "../../Contexts/LoginContext.jsx";
import "../../App";
import Error from "../../helpers/Error.jsx";
import Tittle from "./Tittle/Tittle.jsx";

const LoginPage = () => {
  const username = useForm();
  const password = useForm();
  const { loginUser, error, loading } = useContext(userconxtext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      loginUser(username.value, password.value);
    }
  }

  return (
    <div className={`${styles.loginSection} animeleft`}>
      <form onSubmit={handleSubmit}>
        <Tittle>Login</Tittle>
        <Input label={"Nome"} tipo={"text"} {...username} />
        <Input label={"Senha"} tipo={"password"} {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button> Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <div className={styles.recover}>
        <Link className={styles.reset} to={"/reset"}>
          Perde a senha?{" "}
        </Link>
      </div>

      <div className={styles.cadastro}>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site</p>
        <Button nav={"/login/criar"}>Cadastro</Button>
      </div>
    </div>
  );
};

export default LoginPage;
