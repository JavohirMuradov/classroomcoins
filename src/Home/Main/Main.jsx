import { Card, Step, Stepper, Typography } from "@material-tailwind/react";
import place1 from "./images/download.png";
import place2 from "./images/2place.png";
import place3 from "./images/3place.png";
import coinImage from "./images/coin.png";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { FaHtml5, FaCss3, FaJs, FaGithub, FaReact, FaTrashAlt } from "react-icons/fa";
import { SiScratch, SiTailwindcss } from "react-icons/si";
import { useState } from "react";

const TABLE_HEAD = {
    number: "№",
    Name: "Name",
    Surname: "Surname",
    img: <img src='https://classroomcoins.uz/static/media/coin.0521e373be1873359030.png' className=" min-w-7 min-h-7 w-7 h-7" />
};

export function Main() {

    var [students, setStudents] = useState([
        {
            id: 1, name: "Sevinch", surname: "Sayfutdinova", coin: 40,
        },
        {
            id: 2, name: "Javohir", surname: "Murodov", coin: 30,
        },
        {
            id: 3, name: "Shoxsulton", surname: "Isoqov", coin: 30,
        },
        {
            id: 4, name: "Hamidulloh", surname: "Mirvorisov", coin: 0
        },
        {
            id: 5, name: "Bexruz", surname: "Berdiyev", coin: 0
        },
        {
            id: 6, name: "Behruz", surname: "Normurodov", coin: 0
        },
        {
            id: 7, name: "Fayoziddin", surname: "Appakxodjayev", coin: 0
        },
        {
            id: 8, name: "Mubina", surname: "Fathullayeva", coin: 0
        },
        {
            id: 9, name: "Alibek", surname: "Akromov", coin: 0
        },
        {
            id: 10, name: "Shoxdiyor", surname: "Shirinboyev", coin: -1,
        },
    ])
    var arr = [];
    students.forEach((coins) => {
        arr.push(coins.coin)
    })
    var sumOfCoins = arr.reduce((a, b) => {
        return a + b
    })

    var remainCoins1 = 1500 - sumOfCoins
    var [remainCoins, setRemainCoins] = useState(remainCoins1)

    console.log(remainCoins);

    const adding1 = (id) => {
        setStudents(prevStudents => {
            return prevStudents.map(student => {
                if (student.id === id) {
                    setRemainCoins(() => {
                        return remainCoins -= 1
                    });
                    return { ...student, coin: student.coin + 1 };
                };
                return student
            })
        });
    }
    const adding5 = (id) => {
        setStudents(prevStudents => {
            return prevStudents.map(student => {
                if (student.id === id) {
                    setRemainCoins(() => {
                        return remainCoins -= 5
                    });
                    return { ...student, coin: student.coin + 5 };
                };
                return student
            })
        });
    }
    const minus1 = (id) => {
        setStudents(prevStudents => {
            return prevStudents.map(student => {
                if (student.id === id) {
                    setRemainCoins(() => {
                        return remainCoins += 1
                    });
                    return { ...student, coin: student.coin - 1 };
                };

                return student
            })
        });
    }
    return (
        <main className="container font-rem">
            <section>
                <div className="mt-5 flex font-rem flex-row flex-wrap sm:flex-nowrap justify-center gap-x-10 sm:justify-between items-center px-5">
                    <h1 className="animate-text font-bold bg-gradient-to-r from-gray-700 via-gray-400 to-orange1 bg-clip-text text-transparent text-lg xl:text-2xl text-center">GW-13</h1>
                    <h2 className="text-[#121212] dark:text-[#f3f4f6] text-lg font-bold flex flex-row items-stretch">
                        Total coins:
                        <span className="text-[#ffc107] flex flex-row gap-1 items-center">
                            &nbsp; {remainCoins}
                            <img src={coinImage} alt="coin" className="w-5 h-5 animate-rotate-y animate-infinite" />
                        </span>
                    </h2>
                    <Menu>
                        <MenuHandler>
                            <Button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-[#546e7a] to-[#78909c] text-white shadow-md shadow-[#607d8b33] hover:shadow-lg hover:shadow-[#607d8b66] active:opacity-[0.85] flex flex-row gap-2 items-stretch my-2">
                                Winnners podium
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="yellow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "yellow" }}>
                                    <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path></svg>
                            </Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>1 - month</MenuItem>
                            <MenuItem>2 - month</MenuItem>
                            <MenuItem>3 - month</MenuItem>
                            <MenuItem>4 - month</MenuItem>
                            <MenuItem>5 - month</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div>
                    <div className="w-full py-4 px-8">
                        <div className="w-full sm:pt-8 sm:pb-12 py-6 sm:px-8 px-2">
                            <Stepper activeLineClassName="bg-orange1 h-[2px]">
                                <Step
                                    className={`sm:h-10 sm:w-10 w-8 h-8 bg-orange1 flex items-center justify-center
                                        }`}>
                                    <SiScratch className="sm:h-5 sm:w-5 w-4 h-4 text-white" />
                                    <div className="absolute -bottom-[2rem] w-max text-center hidden sm:flex text-[#ffc107]">
                                        <Typography
                                            className="font-rem"
                                            variant="h6"
                                            color={"amber"}>
                                            Scratch
                                        </Typography>
                                    </div>
                                </Step>
                                <Step
                                    className={`sm:h-10 sm:w-10 w-8 h-8 bg-orange1 flex items-center justify-center
                                        }`}>
                                    <FaHtml5 className="sm:h-5 sm:w-5 w-4 h-4 text-white" />
                                    <div className="absolute -bottom-[2rem] w-max text-center hidden sm:flex text-[#ffc107]">
                                        <Typography
                                            className="font-rem"
                                            variant="h6"
                                            color={"amber"}>
                                            HTML
                                        </Typography>
                                    </div>
                                </Step>
                                <Step
                                    className={`sm:h-10 sm:w-10 w-8 h-8 bg-orange1 flex items-center justify-center
                                        }`}>
                                    <FaCss3 className="sm:h-5 sm:w-5 w-4 h-4 text-white" />
                                    <div className="absolute -bottom-[2rem] w-max text-center hidden sm:flex text-[#ffc107]">
                                        <Typography
                                            className="font-rem"
                                            variant="h6"
                                            color={"amber"}>
                                            CSS
                                        </Typography>
                                    </div>
                                </Step>
                                <Step
                                    className={`sm:h-10 sm:w-10 w-8 h-8 bg-orange1 flex items-center justify-center
                                        }`}>
                                    <SiTailwindcss className="sm:h-5 sm:w-5 w-4 h-4 text-white" />
                                    <div className="absolute -bottom-[2rem] w-max text-center hidden sm:flex text-[#ffc107]">
                                        <Typography
                                            className="font-rem"
                                            variant="h6"
                                            color={"amber"}>
                                            Tailwind
                                        </Typography>
                                    </div>
                                </Step>
                                <Step
                                    className={`sm:h-10 sm:w-10 w-8 h-8 bg-orange1 flex items-center justify-center
                                        }`}>
                                    <FaGithub className="sm:h-5 sm:w-5 w-4 h-4 text-white" />
                                    <div className="absolute -bottom-[2rem] w-max text-center hidden sm:flex text-[#ffc107]">
                                        <Typography
                                            className="font-rem"
                                            variant="h6"
                                            color={"amber"}>
                                            Github
                                        </Typography>
                                    </div>
                                </Step>
                                <Step
                                    className={`sm:h-10 sm:w-10 w-8 h-8 bg-orange1 flex items-center justify-center
                                        }`}>
                                    <FaJs className="sm:h-5 sm:w-5 w-4 h-4 text-white" />
                                    <div className="absolute -bottom-[2rem] w-max text-center hidden sm:flex text-[#ffc107]">
                                        <Typography
                                            className="font-rem"
                                            variant="h6"
                                            color={"amber"}>
                                            JS
                                        </Typography>
                                    </div>
                                </Step>
                                <Step
                                    className={`sm:h-10 sm:w-10 w-8 h-8 bg-[#b0bec5] flex items-center justify-center
                                        }`}>
                                    <FaReact className="sm:h-5 sm:w-5 w-4 h-4 text-white" />
                                    <div className="absolute -bottom-[2rem] w-max text-center hidden sm:flex text-[#ffc107]">
                                        <Typography
                                            className="font-rem"
                                            variant="h6"
                                            color={"amber"}>
                                            React
                                        </Typography>
                                    </div>
                                </Step>
                            </Stepper>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <h1 className="react-reveal dark:text-white mx-5 animate-typing overflow-hidden whitespace-nowrap my-3 pr-5 text-md lg:text-3xl font-bold italic font-rem">Keep it up, you're almost there!💪</h1>
            </div>
            <Card className="relative flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full h-full text-center overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
                <table className="w-full min-w-max table-auto text-center">
                    <thead className="w-full bg-gray-50">
                        <tr className="border-b border-[#ECEFF1] dark:border-b dark:border-[#CFD8DC] dark:bg-[#B0BEC5]">
                            <th className="p-4">
                                <p className="antialiased text-blue-gray-900 font-bold text-lg font-rem flex justify-center leading-none opacity-70">{TABLE_HEAD.number}</p>
                            </th>
                            <th className="p-4">
                                <p className="antialiased text-blue-gray-900 font-bold text-lg font-rem flex justify-center leading-none opacity-70">{TABLE_HEAD.Name}</p>
                            </th>
                            <th className="p-4">
                                <p className="antialiased text-blue-gray-900 font-bold text-lg font-rem flex justify-center leading-none opacity-70">{TABLE_HEAD.Surname}</p>
                            </th>
                            <th className="p-4">
                                <p className="antialiased text-blue-gray-900 font-bold text-lg font-rem flex justify-center leading-none opacity-70">{TABLE_HEAD.img}</p>
                            </th>
                            <th className="p-4 flex justify-center items-center h-[60.52px]">
                                <FaTrashAlt className=" text-red-500" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id} className="dark:bg-[#212121] border-b border-[#ECEFF1]">
                                <td className="p-4">
                                    <h1 className="antialiased text-blue-gray-900 font-normal text-sm font-rem flex justify-center leading-none opacity-70 dark:text-white">
                                        {index + 1 === 1 ? <img src={place1} className=" animate-slipp" /> : index + 1 === 2 ? <img src={place2} /> : index + 1 === 3 ? <img src={place3} /> : index + 1}
                                    </h1>
                                </td>
                                <td className="p-4">
                                    <h1 className="antialiased text-blue-gray-900 font-normal text-sm font-rem flex justify-center leading-none opacity-70 dark:text-white">
                                        {student.name}
                                    </h1>
                                </td>
                                <td className="p-4">
                                    <h1 className="antialiased text-blue-gray-900 font-normal text-sm font-rem flex justify-center leading-none opacity-70 dark:text-white">
                                        {student.surname}
                                    </h1>
                                </td>
                                <td className="p-4">
                                    <h1 as="a" href="#" id="coin" className="antialiased text-blue-gray-900 font-normal text-sm font-rem flex justify-center leading-none opacity-70 dark:text-white">
                                        {student.coin}
                                    </h1>
                                </td>
                                <td className="h-[65.09px] flex justify-center gap-1 items-center">
                                    <button className="px-3.5 py-2.5 bg-gradient-to-br from-white dark:to-orange1 dark:from-gray-300 to-orange1 rounded-full text-white active:shadow-md active:shadow-red-600 duration-300" onClick={() => adding1(student.id)}>+1</button>
                                    <button className="px-3 py-2.5 bg-gradient-to-br from-white dark:to-orange1 dark:from-gray-300 to-orange1 rounded-full text-white active:shadow-md active:shadow-red-600 duration-300" onClick={() => adding5(student.id)}>+5</button>
                                    <button className="px-3.5 py-2.5 bg-gradient-to-br from-white dark:to-red-600 dark:from-red-300 to-red-600 rounded-full text-white active:shadow-md active:shadow-red-600 duration-300" onClick={() => minus1(student.id)}>-1</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </main >
    );
}