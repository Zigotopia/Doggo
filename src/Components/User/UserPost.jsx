import React, { useEffect, useState } from "react";
import styles from "./UserPost.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useForm from "../../Hooks/UseForm";
import UseFetch from "../../Hooks/UseFetch";
import { PHOTO_POST } from "../../Apis/apis";
import Error from "../../helpers/Error";
import { useNavigate } from "react-router-dom";

const UserPhost = () => {
  const name = useForm();
  const idade = useForm();
  const peso = useForm();
  const [img, setImg] = useState({});
  const { data, error, loading, request } = UseFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate ]);

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nome", name.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    formData.append("img", img.raw);
    const token = window.localStorage.getItem("token");

    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleImg({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.section} ,animleft`}>
      <form onSubmit={handleForm}>
        <Input label={"Nome"} tipo={"text"} {...name} />
        <Input label={"Peso"} tipo={"number"} {...peso} />
        <Input label={"idade"} tipo={"number"} {...idade} />
        <input
          className={styles.file}
          type="file"
          label={"img"}
          onChange={handleImg}
        />
        <Button>{loading ? "Carregando..." : "Enviar"}</Button>
      </form>
      <Error>{error}</Error>

      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url("${img.preview}")` }}
        ></div>
      )}
    </section>
  );
};

export default UserPhost;
