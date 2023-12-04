import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { userconxtext } from "../../Contexts/LoginContext";
import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Post } from "../../Assets/adicionar.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";

import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import UseMedia from "../../Hooks/UseMedia";

const UserHeaderNav = () => {
  const { logout } = useContext(userconxtext);

  const mobile = UseMedia("(max-width: 40rem)");
  const [mobiletray, setmobiletray] = useState(false);

  const {pathname} = useLocation();

  useEffect(() => {
    setmobiletray(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobiletray} ${
            mobiletray && styles.mobiletrayactive
          }`}
          onClick={() => setmobiletray(!mobiletray)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navmobile : styles.nav} ${
          mobiletray && styles.mobiletrayactive
        } 

         
        `}
      >
        <NavLink to={"/conta"} end>
          <Feed /> {mobile && "Feed"}
        </NavLink>
        <NavLink to={"/conta/postar"}>
          <Post /> {mobile && "Postar"}
        </NavLink>
        <NavLink to={"/conta/estatisticas"}>
          {" "}
          <Estatisticas /> {mobile && "Estatisticas"}
        </NavLink>
        <button onClick={logout}>
          {" "}
          <Sair /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
