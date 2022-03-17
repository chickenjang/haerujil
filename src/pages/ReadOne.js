import ReadTitle from "../components/ReadTitle";
import ReadAuthor from "../components/ReadAuthor";
import ReadBody from "../components/ReadBody";
import ReadCreatedAt from "../components/ReadCreatedAt";
import { useLocation, useParams } from "react-router-dom";
import Api from "../utils/Api";

function ReadOne() {
  const page = useLocation().pathname.split("/")[1];
  const id = useParams().id;
  const data = Api(`${page}/${id}`);

  return (
    <div>
      {data && (
        <div>
          <ReadTitle title={data.title} />
          <ReadAuthor author={data.author} />
          <ReadCreatedAt createdAt={data.createdAt} />
          <ReadBody body={data.body} />
        </div>
      )}
    </div>
  );
}

export default ReadOne;
