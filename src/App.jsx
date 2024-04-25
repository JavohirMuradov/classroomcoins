import { Login } from "./Login/Login"
import { Home } from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./Error/Error";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
