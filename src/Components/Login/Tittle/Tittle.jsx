import React from "react";
import styles from "./Tittle.module.css";

const Tittle = ({ children }) => {
  return <h2 className={styles.titulo}>{children}</h2>;
};

export default Tittle;
