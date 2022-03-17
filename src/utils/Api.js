import axios from "axios";
import { useState, useEffect } from "react";

function Api(page) {
  const [state, setState] = useState(null);
  useEffect(() => {
    axios({
      url: `http://localhost:3000/${page}`,
      method: "get",
    })
      .then((response) => setState(response.data))
      .catch(() => console.log("에러"));
  }, [page]);
  return state;
}

export default Api;
