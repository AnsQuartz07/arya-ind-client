import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
                </Routes>
                <div className="footer" >

                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout