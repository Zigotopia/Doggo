import React, { useState } from "react";
import styles from "./Photo.module.css";

const Photo = ({ ...props }) => {
  const [skeleton, setSkleton] = useState(true);

  function handleLoad({ target }) {
    target.style.opacity = 1;
    setSkleton(false);
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} {...props} />
    </div>
  );
};

export default Photo;
