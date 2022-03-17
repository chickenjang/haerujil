import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Info() {
  const selector = useSelector((state) => state.login);
  if (!selector) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>내정보</div>;
}

export default Info;
