import'./Componentes/GridLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screen/Home";
import Shop from "./screen/Shop";
import AboutUs from "./screen/AboutUs";
import Register from "./screen/Register";
import Login from "./screen/Login";
import Error from "./screen/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Shop" element={<Shop/>}></Route>
          <Route path="/aboutUs" element={<AboutUs/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/error" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
