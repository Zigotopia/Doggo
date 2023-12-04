import React, { useContext } from "react";
import { userconxtext } from "../Contexts/LoginContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { logged } = useContext(userconxtext);
 console.log(logged)

  if (logged) return children
  if(logged === undefined || logged === null) return <p>...</p>
  return <Navigate to={"/login"} />;
};

export default ProtectedRoute;
