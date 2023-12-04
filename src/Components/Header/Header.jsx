import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import styles from "./Header.module.css";
import { userconxtext } from "../../Contexts/LoginContext";
import { useContext } from "react";

const Header = () => {
  const { data, logout } = useContext(userconxtext);
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <NavLink className={styles.logo} to={"/"}>
          <Dogs />
        </NavLink>
        {data ? (
          <NavLink className={styles.login} to={"/login"} >
            {" "}
            {data.nome}
            <button onClick={logout}>logout</button>
          </NavLink>
          
        ) : (
          <NavLink className={styles.login} to={"/login"}>
            Login / Criar
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
