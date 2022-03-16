import { useLocation } from "react-router-dom";
import Subject from "../components/Subject";
import Card from "../components/Card";
import Button from "../components/Button";

function ReadAll() {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  return (
    <div>
      <Subject page={pathname} />
      <Card page={pathname} />
      <Button page={pathname} />
    </div>
  );
}

export default ReadAll;
