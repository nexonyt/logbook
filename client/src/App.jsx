import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/NavBar";
import Login from "./pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "./pages/Dashboard";
import AddFlight from "./pages/addFlight";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-flight" element={<AddFlight />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
