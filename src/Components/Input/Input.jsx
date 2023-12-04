import styles from "./Input.module.css";

const Input = ({ tipo, label, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wraper}>
      <label className={styles.label} htmlFor={label} aria-label={label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={tipo}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}

      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
