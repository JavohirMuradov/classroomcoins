import { Login } from "./Login/Login"
import { Route, Routes } from "react-router-dom";
import Error from "./Error/Error";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from "./Dashboard/Dashboard";
import Home from "./Home/Home";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes >
      <ToastContainer />
    </>
  );
};

export default App
