import React from "react";
import { useEffect } from "react";
import UseFetch from "../../Hooks/UseFetch";
import { GET_PHOTO } from "../../Apis/apis";
import Error from "../../helpers/Error";
import Loading from "../Loading/Loading";
import ModalContent from "./ModalContent";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo, setModal }) => {
  const { error, loading, data, request } = UseFetch();

  useEffect(() => {
    const { url, options } = GET_PHOTO(photo.id);

    request(url, options);
  }, [photo, request]);

  if (error) return <Error>{error}</Error>;
  if (loading) return <Loading />;

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModal(null);
  }

  if (data)
    return (
      <div onClick={handleOutsideClick} className={styles.modal}>
        <ModalContent {...data} />
      </div>
    );
};

export default FeedModal;
