import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import WriteTitle from "../components/WriteTitle";
import WriteAuthor from "../components/WriteAuthor";
import WriteBody from "../components/WriteBody";
import Button from "../components/Button";
import axios from "axios";

function Create() {
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  const navigate = useNavigate();

  const selector = useSelector((state) => state.login);
  if (!selector) {
    return <Navigate to="/login" replace={true} />;
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios({
      url: `http://localhost:3000/${page}`,
      method: "post",
      data: {
        title: event.target.title.value,
        author: event.target.author.value,
        createdAt: Date.now(),
        body: event.target.body.value,
      },
    })
      .then(() => navigate(`/${page}`, { replace: true }))
      .catch(() => console.log("에러"));
  }
  return (
    <form onSubmit={handleSubmit}>
      <WriteTitle />
      <WriteAuthor />
      <WriteBody />
      <Button type="submit" size="small" text="등록" />
    </form>
  );
}

export default Create;
