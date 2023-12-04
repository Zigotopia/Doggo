import React from "react";
import styles from "./FeedPhotoItem.module.css";
import Photo from "../../helpers/Photo";

const FeedPhotoItem = ({ foto, setModal }) => {
  console.log(foto);
  function handleClick() {
    setModal(foto);
  }

  return (
    <li className={styles.dogPhoto} onClick={handleClick}>
      <Photo src={foto.src} alt={foto.author} />
      <span>{foto.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
