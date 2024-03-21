import { Login } from "./Login/Login"
import { Home } from "./Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Error from "./Error/Error";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
