import axios from "axios";
import { useState, useEffect } from "react";

function Api(page) {
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${page}`);
        setState(() => {
          return response.data;
        });
      } catch {
        console.log("에러");
      }
    };
    fetchState();
  }, [page]);
  return state;
}

export default Api;
