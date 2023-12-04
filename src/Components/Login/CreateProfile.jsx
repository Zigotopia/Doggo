import React, { useContext } from "react";
import Tittle from "../../Components/Login/Tittle/Tittle.jsx";
import Input from "../../Components/Input/Input.jsx";
import Button from "../Button/Button.jsx";
import { USER_POST } from "../../Apis/apis.jsx";
import useForm from "../../Hooks/UseForm.jsx";
import { userconxtext } from "../../Contexts/LoginContext.jsx";
import UseFetch from "../../Hooks/UseFetch.jsx";
import Error from "../../helpers/Error.jsx";

const CreateProfile = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { loginUser } = useContext(userconxtext);
  const { request, error, loading } = UseFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) loginUser(username.value, password.value);
  }

  return (
    <section className="animeleft">
      <form onSubmit={handleSubmit}>
        <Tittle>Cadastro</Tittle>
        <Input tipo={"text"} label={"Nome"} {...username} />
        <Input tipo={"email"} label={"Email"} {...email} />
        <Input tipo={"text"} label={"Password"} {...password} />
        {loading ? <Button>carregando ...</Button> : <Button>Cadastrar</Button>}
        {error && <Error>{error}</Error>}
      </form>
    </section>
  );
};

export default CreateProfile;
