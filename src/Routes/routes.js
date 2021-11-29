import Home from "../views/Home";
import Register from "../views/Register";
import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import Doctors from "../views/Doctors";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctors" element={<Doctors />} />
    </Routes>
  );
}

export default Routers;
