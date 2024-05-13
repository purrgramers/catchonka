import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

import './App.css'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <h1>Catchonka</h1>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/profile/:catId" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App;
