import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import RequiredAuth from "./pages/RequiredAuth/RequiredAuth";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div
        className="blur"
        style={{
          top: "-18%",
          right: "0",
        }}
      ></div>
      <div
        className="blur"
        style={{
          top: "36%",
          left: "-8rem",
        }}
      ></div>

      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route element={<RequiredAuth />}>
          <Route path="/home/:userName" element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
