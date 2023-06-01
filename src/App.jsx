import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";


function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route element={<Auth />} path="/" />
        <Route element={<Home />} path="/home" />
      </Routes>
    </div>
  );
}

export default App;
