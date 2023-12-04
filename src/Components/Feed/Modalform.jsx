import React, { useState } from "react";
import UseFetch from "../../Hooks/UseFetch";
import { COMMENT_POST } from "../../Apis/apis";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import Error from "../../helpers/Error";
import styles from "./Modalform.module.css";

const Modalform = ({ id, setComments }) => {
  const [comment, setComment] = useState("");

  const { error, request } = UseFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });

    const { response, json } = await request(url, options);
    setComment("");
    if (response.ok) setComments((comments) => [...comments, json]);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        onChange={(event) => setComment(event.target.value)}
        value={comment}
        placeholder="digite seu comentario"
        name="comment"
        id="comment"
      ></textarea>
      <button>
        <Enviar />
      </button>
      {error && <Error>{error}</Error>}
    </form>
  );
};

export default Modalform;
