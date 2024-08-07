import "./index.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/NavBar";
import Login from "./pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "./pages/Dashboard";
import AddFlight from "./pages/addFlight";
import Stats from "./pages/Stats";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";

// axios.defaults.baseURL = "https://api.nexonstudio.pl";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = false;
function App() {
  return (
    <>
      <div className="flex w-full">
        <UserContextProvider>
          <Navbar/>
          <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
          <div className="flex justify-center items-center  w-full ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-flight" element={<AddFlight />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </div>
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
