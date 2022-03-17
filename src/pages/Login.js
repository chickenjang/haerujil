import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login);
  // if (!loginStatus) {
  //   return <Navigate to="/" replace={true} />;
  // }
  function onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    dispatch({ type: "LOGIN", name: profile.getGivenName() });
    console.log(profile);
    console.log(profile.getId());
    console.log(profile.getEmail());
  }
  function onLogoutSuccess() {
    dispatch({ type: "LOGOUT" });
    console.log("logged out");
  }
  return (
    <div>
      <GoogleLogin
        clientId="967676498629-v6oq0ba3u4s3utqihv3e33bmfajme24o.apps.googleusercontent.com"
        onSuccess={onSuccess}
        buttonText="Login"
      />
      <GoogleLogout
        clientId="967676498629-v6oq0ba3u4s3utqihv3e33bmfajme24o.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      />
      {loginStatus ? "로그인 상태임" : "로그아웃 상태임"}
    </div>
  );
}

export default Login;
