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
        name: "NCERT",
        url: "/ncert"
    },
    {
        name: "Others",
        url: "/others"
    },
    {
        name: "Anshu",
        url: "/anshu"
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
                        <img style={{ height: "auto", width: "130px" }} src="/images/freeflix_logo2.png" />
                    </div>
                    <div className="categories">
                        <Navbar category={categories} />


                    </div>
                    <div className="right-corner">
                        <Searchbar onSearch={onSearch} />
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/upsc" element={<UPSC />} /> */}
                    {/* <Route path="/jee" element={<Contact />} /> */}
                </Routes>
                <div className="footer" >

                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout