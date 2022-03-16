import { useLocation } from "react-router-dom";
import Subject from "../components/Subject";

function ReadAll() {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  return (
    <div>
      <Subject pathname={pathname} />
    </div>
  );
}

export default ReadAll;
