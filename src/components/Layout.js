import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FaInstagram, FaFacebook, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
// import { useHistory } from 'react-router-dom';
// import {useHistory} from 'react-router';
import '../css/Layout.css';
import Miscelleneous from "../Page/Miscelleneous";
import Navbar from "./Navbar";
import Home from "./Home";
import Searchbar from "./Searchbar";
import Backaction from '../Page/Backaction';
import Category from "./Category.js";
import Subjects from "./Subjects.js";
import Teachers from "./Teachers.js";
import Lectures from "./Lectures.js";
const arr = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "UPSC",
        url: "/upsc"
    },
    {
        name: "JEE",
        url: "/jee"
    },
    {
        name: "NEET",
        url: "/neet"
    },
    {
        name: "CBSE",
        url: "/cbse"
    },
    {
        name: "Miscellaneous",
        url: "/misc"
    }
];

const Layout = function (content) {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        setCategories(arr);
    }, [])
    // useEffect(function, [])
    const openNewPage = (category) => {
    }
    // const history = useHistory();
    const onSearch = (e) => {
        // history.push(`/search?query=${e}`)
        Backaction.getSearchList(e).then(items => {

            setVideos(items.map(ele => {
                return {
                    url: 'https://www.youtube.com/embed/' + ele.id.videoId + '?'
                }
            }));
        })
        // window.location.href = `/search?query=${e}`;

    }
    return (
        <BrowserRouter>

            <div >
                <div className="header" >
                    <div className="logo">
                        <img style={{ height: "auto", width: "130px" }} src="/images/inde.png" />
                    </div>
                    <Navbar category={categories} />
                    {/* <div className="categories">
                    </div> */}
                    <div className="right-corner">
                        <Searchbar onSearch={onSearch} />
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category?" element={<Category />} />
                    <Route path="/upsc" element={<Subjects course='upsc' />} />
                    <Route path="/neet" element={<Subjects course='neet' />} />
                    <Route path="/jee" element={<Subjects course='jee' />} />
                    <Route path="/cbse" element={<Subjects course='cbse' />} />
                    <Route path="/misc" element={<Subjects course='misc' />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/lectures" element={<Lectures />} />

                </Routes>
                <div className="footer">
                    <p className="footer-text">Designed & Developed by: <span className="">Anshu Kumar</span></p>
                    <div className="icon-box">
                        <a href="https://www.instagram.com/call_me_anshu_____?igsh=MW4wM3kxNWZ4c210bw==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ color: "#E1306C", fontSize: "25px" }} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100010394683455&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ color: "#1877F2", fontSize: "25px" }} />
                        </a>
                        <a href="https://github.com/AnsQuartz07" target="_blank" rel="noopener noreferrer">
                            <FaGithub style={{ color: "#333", fontSize: "25px" }} />
                        </a>
                        <a href="https://youtube.com/@anshukumar-jx8hx?si=vF4xgBJjSJqdult0" target="_blank" rel="noopener noreferrer">
                            <FaYoutube style={{ color: "#FF0000", fontSize: "25px" }} />
                        </a>
                        <a href="https://linkedin.com/in/ans-algo" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ color: "#0077B5", fontSize: "25px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout