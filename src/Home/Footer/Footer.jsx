import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import logo from "./images/lightlogo.png";
import darklogo from "./images/darklogo.png";
import { Link } from "@mui/material";

export const Footer = () => {
    return (
        <footer className="container dark:text-[#f3f4f6] text-[#121212] rounded-lg shadow md:py-8 py-4">
            <div className="w-full">
                <div className="flex justify-between items-center flex-row">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <img
                            className=" h-8 dark:hidden rounded-bl-lg rounded-tr-lg"
                            src={logo}
                            alt="Logo"
                        />
                        <img
                            className=" h-8 dark:h-10 hidden dark:inline-block rounded-bl-lg rounded-tr-lg"
                            src={darklogo}
                            alt="Logo"
                        />
                    </a>
                    <ul className="flex flex-row gap-1 items-center text-sm font-medium text-gray-500">
                        <li>
                            <a
                                href="https://t.me/coddycamp"
                                className="mr-4 md:mr-6 ">
                                <FaTelegram className="w-7 h-7 animate-shadow animate-infinite transition duration-300 hover:text-orange " />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=udlj9LmilfE"
                                className="mr-4 md:mr-6">
                                <FaYoutube className="w-7 h-7 animate-shadow animate-infinite transition duration-300 hover:text-orange " />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/coddycamp_it_akademiya/"
                                className="mr-4 md:mr-6">
                                <FaInstagram className="w-7 h-7 animate-shadow animate-infinite transition duration-300 hover:text-orange " />
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center">
                    © 2023{" "}
                    <Link
                        to={"https://dcamp.io/coddycamp"}
                        target="_blank"
                        className="hover:opacity-80 text-orange">
                        Coddy Camp IT Academy™.
                    </Link>
                    <br className="sm:hidden" />
                    &nbsp;All Rights Reserved.
                </span>
            </div>
        </footer >
    )
}
