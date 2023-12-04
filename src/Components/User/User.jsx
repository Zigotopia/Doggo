import React, { useContext } from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhost from "./UserPost";
import UserStats from "./UserStats";
import { userconxtext } from "../../Contexts/LoginContext";

const User = () => {
  const { data } = useContext(userconxtext);
  return (
    <div className="container">
      <UserHeader />

      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </div>
  );
};

export default User;
