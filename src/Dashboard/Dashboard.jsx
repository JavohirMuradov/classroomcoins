import { Main } from "./Main/Main"
import darklogo from "./HeaderImages/darklogo.png";
import lightlogo from "./HeaderImages/lightlogo.png";
import avatar from "./HeaderImages/avatar.jpg";
import React, { useEffect, useState } from 'react';
import useDarkSide from './useDarkside';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Footer } from "./Footer/Footer";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    var navigate = useNavigate()
    var token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    })
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
    var [scale, setScale] = useState("scale-0");
    const func = () => {
        localStorage.removeItem("verify");
        navigate("/login")
    }
    return (
        <div className=" dark:bg-[#121212] bg-[#f3f4f6] font-rem h-full">
            <header className="container">
                <div className="h-16 flex items-center justify-between">
                    <div>
                        <img src={lightlogo} alt="lightlogo" className=" dark:hidden h-10 w-auto" />
                        <img src={darklogo} alt="darklogo" className="hidden dark:inline-block h-10 w-auto" />
                    </div>
                    <div className="gap-5 flex justify-end w-1/2 relative">
                        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
                        <img src={avatar} alt="ava" className="rounded-full w-8 h-8"
                            onClick={() => setScale(scale === "scale-0" ? "scale-100" : "scale-0")} />
                        <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[rgb(33,33,33)] text-[#f3f4f5] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 ${scale} top-12`}>
                            <button className="block px-4 py-2 text-sm hover:bg-[#606060] w-full text-start duration-300">Your profile</button>
                            <button className="block px-4 py-2 text-sm hover:bg-[#606060] w-full text-start duration-300">Settings</button>
                            <button className="block px-4 py-2 text-sm text-red-500 hover:bg-[#606060] w-full text-start duration-300" onClick={() => func()}>Sign out</button>
                        </div>
                    </div>
                </div>
                <hr className=" dark:bg-white h-[2px] bg-black" />
            </header>
            <Main />
            <Footer />
        </div>
    )
}
