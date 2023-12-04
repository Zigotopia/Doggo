import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import "./App.css";
import LoginContext from "./Contexts/LoginContext";
import ProtectedRoute from "./helpers/ProtectedRoute";
import User from "./Components/User/User";
import Photopage from "./Components/Photopage/Photopage";

function App() {
  return (
    <BrowserRouter>
      <LoginContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route
            path="/conta/*"
            element={
              <ProtectedRoute>
                {" "}
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </LoginContext>
    </BrowserRouter>
  );
}
 
const body = document.body





export default App;
