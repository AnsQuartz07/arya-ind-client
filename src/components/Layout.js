import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import {useHistory} from 'react-router';
import '../css/Layout.css';
import Miscelleneous from "../Page/Miscelleneous";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Backaction from '../Page/Backaction';
const arr = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Movies",
        url: "/movies"
    },
    {
        name: "Songs",
        url: "/songs"
    },
    {
        name: "Reels",
        url: "/reels"
    },
    {
        name: "Others",
        url: "/others"
    }
];
const Layout = function () {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        setCategories(arr);
    }, [categories])
    const openNewPage = (category) => {
    }    
    // const history = useHistory();
    const onSearch = (e) => {
        // history.push(`/search?query=${e}`)
        Backaction.getSearchList(e).then( items => {
            
            setVideos(items.map( ele => {
                return {
                    url: 'https://www.youtube.com/embed/' + ele.id.videoId +'?'
                }
            }));
        })
        // window.location.href = `/search?query=${e}`;

    }
    return (
        <BrowserRouter>
        
        <div style={{background: 'black'}}>
            <div className="header" >
                <div className="logo">
                    <img style={{height: "auto", width: "130px"}} src="/images/freeflix_logo2.png" />
                </div>
                <div className="categories">
                    <Navbar category={categories} />
                </div>
                <div className="right-corner">
                    <Searchbar onSearch={onSearch} />
                </div>
            </div>
            <div className="content" >                    
                    <Routes>
                    {categories && categories.map((ele, index) => {
                        return (
                            <Route exact path={ele.url} element={<Miscelleneous data={videos} />} />
                        );
                    })}
                    </Routes>
            </div>
            <div className="footer" >

            </div>
        </div>
        </BrowserRouter>
    )
}

export default Layout