import React, { useEffect, useState } from "react";
import Tittle from "../Login/Tittle/Tittle";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [tittle, setTittle] = useState();
  const location = useLocation();
  

  useEffect(() => {
    switch (location.pathname) {
      case "/conta":
        setTittle("Minha Conta");

        break;
      case "/conta/postar":
        setTittle("Postar");
        break;
      case "/conta/estatisticas":
        setTittle("Estatisticas");
        break
    }
  }, [location]);

  return (
    <header className={styles.container}>
      <Tittle>{tittle}</Tittle>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
