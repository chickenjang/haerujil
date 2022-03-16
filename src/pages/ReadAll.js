import { useLocation } from "react-router-dom";
import Subject from "../components/Subject";
import Card from "../components/Card";

function ReadAll() {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  return (
    <div>
      <Subject pathname={pathname} />
      <Card page={pathname} />
    </div>
  );
}

export default ReadAll;
