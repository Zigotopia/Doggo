import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import Loading from "../Loading/Loading";

const Feed = ({ user }) => {
  const [modal, setModal] = useState(null);
  const [page, setPage] = useState([1]);
  const [infnite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infnite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait)
          setPage((page) => [...page, page.length + 1]);
        console.log(page);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infnite, page]);

  return (
    <div>
      {modal && <FeedModal photo={modal} setModal={setModal} />}

      {page.map((i) => (
        <FeedPhotos
          key={i}
          setInfinite={setInfinite}
          page={i}
          user={user}
          setModal={setModal}
        />
      ))}
    </div>
  );
};

export default Feed;
