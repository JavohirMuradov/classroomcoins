import { Main } from "./Main/Main"
import darklogo from "./HeaderImages/darklogo.png";
import lightlogo from "./HeaderImages/lightlogo.png";
import avatar from "./HeaderImages/avatar.jpg";
import React, { useState } from 'react';
import useDarkSide from './useDarkside';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Footer } from "./Footer/Footer";

export const Home = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
    return (
        <div className=" dark:bg-[#121212] bg-[#f3f4f6] font-rem h-full">
            <header className="container">
                <div className="h-16 flex items-center justify-between">
                    <div>
                        <img src={lightlogo} alt="lightlogo" className=" dark:hidden h-10 w-auto" />
                        <img src={darklogo} alt="darklogo" className="hidden dark:inline-block h-10 w-auto" />
                    </div>
                    <div className="gap-5 flex justify-end w-1/2">
                        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
                        <img src={avatar} alt="ava" className="rounded-full w-8 h-8" />
                    </div>
                </div>
                <hr className=" dark:bg-white h-[2px] bg-black" />
            </header>
            <Main />
            <Footer />
        </div>
    )
}
