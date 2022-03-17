import { Routes, Route } from "react-router-dom";
import Overall from "./pages/Overall";
import Main from "./pages/Main";
import Tools from "./pages/Tools";
import Info from "./pages/Info";
import ReadAll from "./pages/ReadAll";
import Create from "./pages/Create";
import Login from "./pages/Login";
import ReadOne from "./pages/ReadOne";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Overall />} />
          <Route path="trips" element={<ReadAll />} />
          <Route path="trips/:id" element={<ReadOne />} />
          <Route path="trips/create" element={<Create />} />
          <Route path="chats" element={<ReadAll />} />
          <Route path="chats/:id" element={<ReadOne />} />
          <Route path="chats/create" element={<Create />} />
          <Route path="tools" element={<Tools />} />
          <Route path="cooks" element={<ReadAll />} />
          <Route path="cooks/:id" element={<ReadOne />} />
          <Route path="cooks/create" element={<Create />} />
          <Route path="info" element={<Info />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
