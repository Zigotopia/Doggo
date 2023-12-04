import React, { useContext } from "react";
import styles from "./ModalContent.module.css";
import Tittle from "../../Components/Login/Tittle/Tittle.jsx";
import ModalComments from "./ModalComments.jsx";
import { userconxtext } from "../../Contexts/LoginContext.jsx";
import Photodelete from "./Photodelete.jsx";
import Photo from "../../helpers/Photo.jsx";
import { Link } from "react-router-dom";

const ModalContent = ({ photo, comments, single }) => {
  const { data } = useContext(userconxtext);
  console.log(photo, data);
  return (
    <div className={styles.modalbox}>
      <div className={styles.modalimg}>
        <Photo src={photo.src} alt={photo.tittle} />
      </div>
      <div className={styles.modalcontent}>
        <div className={styles.statscontainer}>
          <p className={styles.userstats}>
            {data && data.username === photo.author ? (
              <Photodelete id={photo.id} />
            ) : (
              <span className={styles.author}>@{photo.author}</span>
            )}

            <span className={styles.views}>{photo.acessos}</span>
          </p>
        
            <Tittle>{photo.title}</Tittle>
         
          <p className={styles.animalinfo}>
            <span>{photo.peso} kg</span>
            <span>{photo.idade} anos</span>
          </p>
        </div>
      </div>
      <ModalComments comments={comments} id={photo.id} />
    </div>
  );
};

export default ModalContent;
