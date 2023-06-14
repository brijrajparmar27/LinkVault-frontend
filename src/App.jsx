import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <div className="app">
      <Routes>
        <Route element={<Auth />} path="/" />
        <Route element={<Home />} path="/home" />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
