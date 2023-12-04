import React, { useEffect } from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import UseFetch from "../../Hooks/UseFetch";
import { GET_PHOTOS } from "../../Apis/apis";
import Error from "../../helpers/Error";
import Loading from "../Loading/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModal, user, page, setInfinite }) => {
  const { request, data, loading, error } = UseFetch();

  useEffect(() => {
    async function photoFetch() {
      const total = 6;
      const { url, options } = GET_PHOTOS({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    photoFetch();
  }, [request, user, page, setInfinite]);

  if (loading) return <Loading />;
  if (error) return <Error>{error}</Error>;

  if (data)
    return (
      <ul className={styles.photoContainer}>
        {data.map((photo) => (
          <FeedPhotoItem key={photo.id} foto={photo} setModal={setModal} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
