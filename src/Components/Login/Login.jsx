import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import CreateProfile from "./CreateProfile";
import LostPassord from "./LostPassord";
import { useContext } from "react";
import { userconxtext } from "../../Contexts/LoginContext";
import styles from "./Login.module.css";

const Login = () => {
  const { logged } = useContext(userconxtext);

  if (logged) return <Navigate to={"/conta"} />;
  return (
    <section className={styles.logincontainer}>
      <div className={styles.logincontent}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="criar" element={<CreateProfile />} />
          <Route path="reset" element={<LostPassord />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
