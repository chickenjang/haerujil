import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  return (
    <div>
      <Outlet />
      <Nav />

      <button onClick={() => dispatch({ type: "LOGIN" })}></button>
    </div>
  );
}

export default Main;
