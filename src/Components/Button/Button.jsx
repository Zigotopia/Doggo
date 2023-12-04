import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ children, nav, ...props }) => {
  if (nav) {
    return (
      <Link to={nav}>
        <button {...props} className={styles.button}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
