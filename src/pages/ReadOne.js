import ReadTitle from "../components/ReadTitle";
import ReadAuthor from "../components/ReadAuthor";
import ReadBody from "../components/ReadBody";

function ReadOne() {
  return (
    <div>
      {" "}
      <ReadTitle />
      <ReadAuthor />
      <ReadBody />
    </div>
  );
}

export default ReadOne;
