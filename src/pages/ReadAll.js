import { useLocation } from "react-router-dom";
import Subject from "../components/Subject";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function ReadAll() {
  const location = useLocation();
  const page = location.pathname.slice(1);

  return (
    <div>
      <Subject page={page} />
      <Card page={page} />
      <Link to="create">
        <Button purpose="이동" />
      </Link>
    </div>
  );
}

export default ReadAll;
