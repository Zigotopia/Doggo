import React, { useContext, useEffect, useRef, useState } from "react";
import Modalform from "./Modalform";
import { userconxtext } from "../../Contexts/LoginContext";
import styles from "./ModalComments.module.css";

const ModalComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { logged } = useContext(userconxtext);
  const commentref = useRef(null);

  useEffect(() => {
    commentref.current.scrollTop = commentref.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentref} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author} :</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {logged && <Modalform id={props.id} setComments={setComments} />}
    </>
  );
};

export default ModalComments;
