import React, { useEffect, useState } from 'react'
import logo from "./images/logo.png";
import kid from "./images/kid.jpg";
import coin from "./images/coin.png";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    var navigate = useNavigate()
    var [email, setEmail] = useState(" ");
    var [password, setPassword] = useState("");
    var students = [
        {
            id: 1,
            name: "Sevinch",
            surname: "Sayfutdinova",
            coin: 40,
            email: "sevinch@gmail.com",
            password: "8869",
        },
        {
            id: 2,
            name: "Javohir",
            surname: "Murodov",
            coin: 30,
            email: "javohir@gmail.com",
            password: "8869",
        },
        {
            id: 3,
            name: "Shoxsulton",
            surname: "Isoqov",
            coin: 30,
            email: "shoxSulton@gmail.com",
            password: "8869",
        },
        {
            id: 4,
            name: "Hamidulloh",
            surname: "Mirvorisov",
            coin: 0,
            email: "hamidulloh@gmail.com",
            password: "8869",
        },
        {
            id: 5,
            name: "Bexruz",
            surname: "Berdiyev",
            coin: 0,
            email: "bexruz@gmail.com",
            password: "8869",
        },
        {
            id: 6,
            name: "Behruz",
            surname: "Normurodov",
            coin: 0,
            email: "behruz@gmail.com",
            password: "8869",
        },
        {
            id: 7,
            name: "Fayoziddin",
            surname: "Appakxodjayev",
            coin: 0,
            email: "fayoziddin@gmail.com",
            password: "8869",
        },
        {
            id: 8,
            name: "Mubina",
            surname: "Fathullayeva",
            coin: 0,
            email: "mubina@gmail.com",
            password: "8869",
        },
        {
            id: 9,
            name: "Alibek",
            surname: "Akromov",
            coin: 0,
            email: "alibek@gmail.com",
            password: "8869",
        },
        {
            id: 10,
            name: "Shoxdiyor",
            surname: "Shirinboyev",
            coin: 0,
            email: "shoxdiyor@gmail.com",
            password: "8869",
        },
    ]
    var verify = localStorage.getItem('verify')
    useEffect(() => {
        if (verify) {
            navigate("/")
        }
    })
    var Submit = (e) => {
        e.preventDefault()
        var emailStudent = students.find((student) => student.email === email)
        var passwordStudent = students.find((student) => student.password === password)
        if (emailStudent && passwordStudent) {
            localStorage.setItem("verify", true)
            navigate("/")
        } else {
            navigate("/error")
        }
    }
    return (
        <div className="bg-white font-assistant h-screen overflow-hidden">
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <img
                            className="bg-transparent text-white font-bold text-xl p-4"
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto md:my-36 pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <h1 className="animate-text bg-gradient-to-r from-black via-gray-400 to-orange bg-clip-text text-transparent text-3xl sm:text-5xl font-black text-center">
                            Welcome.
                        </h1>
                        <form
                            onSubmit={Submit}
                            className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg font-bold">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    autoComplete="true"
                                    placeholder="your@email.com"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-orange focus:shadow-outline"
                                />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg font-bold">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    id="password"
                                    autoComplete="true"
                                    placeholder="Password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-orange focus:shadow-outline"
                                />
                            </div>
                            <button
                                type={"submit"}
                                className="relative border border-orange1 mt-8 rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r hover:from-white hover:to-orange1 text-black hover:text-gray-900 hover:ring-2 hover:ring-offset-2 hover:ring-orange1 active:ring-orange1 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease"></span>
                                <span className="relative text-xl font-bold">
                                    Log In
                                </span>
                            </button>
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p className="font-bold text-yellow-800 flex flex-row gap-1 items-center justify-center">
                                Enjoy Your Coins{" "}
                                <img
                                    src={coin}
                                    className="w-10 h-10 animate-rotate-y animate-infinite animate-ease-out animate-delay-700"
                                    alt="coin"
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl">
                    <img
                        className="object-cover w-full h-screen hidden md:block"
                        src={kid}
                        alt="kid"
                    />
                </div>
            </div>
        </div>
    )
}
