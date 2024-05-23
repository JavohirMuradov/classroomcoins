import { useState } from "react";
import { createContext } from "react";

export const LoginApi = createContext({});

// eslint-disable-next-line react/prop-types
const LoginContext = ({ children }) => {
    var [email, setEmail] = useState(" ");
    var [password, setPassword] = useState("");
    return (
        <LoginApi.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
        </LoginApi.Provider>
    );
};
export default LoginContext