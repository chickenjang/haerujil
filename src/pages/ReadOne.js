import ReadTitle from "../components/ReadTitle";
import ReadAuthor from "../components/ReadAuthor";
import ReadBody from "../components/ReadBody";
import ReadCreatedAt from "../components/ReadCreatedAt";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Api from "../utils/Api";
import Button from "../components/Button";
import axios from "axios";

function ReadOne() {
  const page = useLocation().pathname.split("/")[1];
  const id = useParams().id;
  const data = Api(`${page}/${id}`);
  const navigate = useNavigate();

  function handleClick() {
    axios({
      url: `http://localhost:3000/${page}/${id}`,
      method: "delete",
    }).then(() => navigate(`/${page}`, { replace: true }));
  }

  return (
    <div>
      {data && (
        <div>
          <ReadTitle title={data.title} />
          <ReadAuthor author={data.author} />
          <ReadCreatedAt createdAt={data.createdAt} />
          <ReadBody body={data.body} />
          <Button size="small" text="삭제" onClick={handleClick} />
        </div>
      )}
    </div>
  );
}

export default ReadOne;
