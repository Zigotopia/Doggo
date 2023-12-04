import React from "react";

const Error = ({ children }) => {
  if (!children) return null;
  return <p style={{ color: "#ff3311", margin: "1rem 0" }}>{children}</p>;
};

export default Error;
