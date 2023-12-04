import React from "react";
import UseFetch from "../../Hooks/UseFetch";
import { DELETE_POST } from "../../Apis/apis";

const Photodelete = ({ id }) => {
  const { request, loading } = UseFetch();
  async function handleClick() {
    window.confirm("Tem certeza que deseja deletar esta foto ?");

    if (confirm) {
      const { url, options } = DELETE_POST(id);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <div>
      <button disabled={loading} onClick={handleClick}>
        Deletar
      </button>
    </div>
  );
};

export default Photodelete;
