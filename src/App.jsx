import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import useAuthContext from "./Hooks/ContextHooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="app">
      {authIsReady && (
        <Routes>
          <Route
            element={!user ? <Auth /> : <Navigate to="/home" />}
            path="/"
          />
          <Route element={user ? <Home /> : <Navigate to="/" />} path="/home" />
        </Routes>
      )}
    </div>
  );
}

export default App;
