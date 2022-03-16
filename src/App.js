import { Routes, Route } from "react-router-dom";
import Overall from "./pages/Overall";
import Main from "./pages/Main";
import Tools from "./pages/Tools";
import Info from "./pages/Info";
import ReadAll from "./pages/ReadAll";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Overall />} />
          <Route path="trips" element={<ReadAll />} />
          <Route path="chats" element={<ReadAll />} />
          <Route path="tools" element={<Tools />} />
          <Route path="cooks" element={<ReadAll />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import { GoogleLogin, GoogleLogout } from "react-google-login";
// function onSuccess(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log(profile);
//   console.log(profile.getId());
//   console.log(profile.getEmail());
//   console.log(profile.getName());
// }
//   <GoogleLogin
//   clientId="967676498629-v6oq0ba3u4s3utqihv3e33bmfajme24o.apps.googleusercontent.com"
//   onSuccess={onSuccess}
//   buttonText="Login"
// />
// <GoogleLogout
//   clientId="967676498629-v6oq0ba3u4s3utqihv3e33bmfajme24o.apps.googleusercontent.com"
//   buttonText="Logout"
//   onLogoutSuccess={() => console.log("logged out")}
// />
