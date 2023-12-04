import { useState } from "react";

const inputdatas = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Por favor insira dados validos",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function onChange({ target }) {
    setValue(target.value);
    if (error) {
      validate(target.value);
    }
  }

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha os dados necessarios");
      return false;
    } else if (inputdatas[type] && !inputdatas[type].regex.test(value)) {
      setError(inputdatas[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    onChange,

    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
