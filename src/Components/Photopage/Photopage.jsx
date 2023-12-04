import React, { useEffect } from "react";
import styles from "./Photopage.module.css";
import { useParams } from "react-router-dom";
import UseFetch from "../../Hooks/UseFetch";
import { GET_PHOTO } from "../../Apis/apis";
import ModalContent from "../Feed/ModalContent";
import { load } from "npm";
import Loading from "../Loading/Loading";
import Error from "../../helpers/Error";

const Photopage = () => {
  const { request, data, loading, error } = UseFetch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const { url, options } = GET_PHOTO(id);

    request(url, options);
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error>{error}</Error>;
  if (data)
    return (
      <div>
        {" "}
        <ModalContent single photo={data} />
      </div>
    );
};

export default Photopage;
