import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import useAuthContext from "./Hooks/ContextHooks/useAuthContext";
import ToastContainerParent from "./components/Toastify/ToastContainerParent";

import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainerParent />
    </div>
  );
}

export default App;
