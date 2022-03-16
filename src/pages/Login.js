import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.login);
  function onSuccess(googleUser) {
    dispatch({ type: "LOGIN" });
    const profile = googleUser.getBasicProfile();
    console.log(profile);
    console.log(profile.getId());
    console.log(profile.getEmail());
    console.log(profile.getName());
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
