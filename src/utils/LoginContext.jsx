import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LoginApi = createContext({});

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