import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registered from "./components/Registered";
import Dashboard from "./components/Dashboard";
import PrivatePage from "./components/PrivatePage";
import  PrivateRoute  from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Registered />} />
        
        <Route
          path="/private-page"
          element={
            <PrivateRoute>
              <PrivatePage />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
