/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";
import 'firebase/firestore';
import { toast } from "react-toastify";

export const StudentsContext = createContext({});

const Students = ({ children }) => {
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
            id: 10, name: "Shoxdiyor", surname: "Shirinboyev", coin: 0,
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

    const adding1 = (id) => {
        setStudents(prevStudents => {
            return prevStudents.map(student => {
                if (student.id === id) {
                    if (remainCoins === 0) {
                        toast.error("There is no coins for adding")
                    } else {
                        setRemainCoins(() => {
                            return remainCoins -= 1
                        });
                        return { ...student, coin: student.coin + 1 };
                    }
                }
                return student
            })
        });
    }
    const adding5 = (id) => {
        setStudents(prevStudents => {
            return prevStudents.map(student => {
                if (student.id === id) {
                    if (remainCoins === 0) {
                        toast.error("There is no coins for adding")
                    } else {
                        setRemainCoins(() => {
                            return remainCoins -= 5
                        });
                        return { ...student, coin: student.coin + 5 };
                    }
                }
                return student
            })
        });
    }
    const minus1 = (id) => {
        setStudents(prevStudents => {
            return prevStudents.map(student => {
                if (student.id === id) {
                    if (student.coin > 0) {
                        setRemainCoins(() => {
                            return remainCoins += 1
                        });
                        return { ...student, coin: student.coin - 1 };
                    } else {
                        toast.error(`${student.name} ${student.surname} has not coins`)
                    }
                }
                return student
            })
        });
    }

    var sortedStudents = students.sort((a, b) => b.coin - a.coin)

    return (
        <StudentsContext.Provider value={{ sortedStudents, remainCoins, adding1, adding5, minus1 }}>
            {children}
        </StudentsContext.Provider >
    );
};

export default Students;
