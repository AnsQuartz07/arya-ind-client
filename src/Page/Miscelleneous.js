import React, { useEffect, useRef, useState } from "react";
import '../css/Miscelleneous.css';
import Backaction from "./Backaction";

const defaultLinks = [
    {url: "https://www.youtube.com/embed/ARWz_c3rEhM?"},
    {url: "https://www.youtube.com/embed/ARWz_c3rEhM?"},
    {url: "https://www.youtube.com/embed/ARWz_c3rEhM?"},
    {url: "https://www.youtube.com/embed/ARWz_c3rEhM?si=vqz9BqRqB6zY6d85"},
    {url: "https://www.youtube.com/embed/7cQ5IAYMFZk?si=V7vUmV1CGK-olveH"},
    {url: "https://www.youtube.com/embed/7cQ5IAYMFZk?si=V7vUmV1CGK-olveH"},
    {url: "https://www.youtube.com/embed/RyZfsWf0wG8?si=QZAg-McY2Oqk2TUQ"}
]
const Miscelleneous = (props) => {
    const [arr, setArr] = useState(defaultLinks);
    const [currentVideo, setCurrentVideo] = useState();
    const [mainVideo, setMainVideo] = useState();
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    useEffect( () => {
        Backaction.getRecommendedMovies().then( res => {
            setArr( res.map( ele => {
                return {
                    url: ele.id.videoId
                }
            }))
        })
    })
    // const iframes = useRef([]);
    const playVideo = (ele) => {
        setMainVideo(ele + '&autoplay=1')
    }
    const autoPlayVideo = (i, ele) => {
        setCurrentVideo(ele + '&autoplay=1')
        setHoveredIndex(i);
    };
    return (
        <div>
            <div className="main-screen">
                <iframe src={mainVideo} frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="miscellaneous-grid">
                {props.data && props.data.map((ele, index) => {
                    return (
                        <div 
                            key={index}
                            className="single-box" 
                            onMouseEnter={() => autoPlayVideo(index, ele.url)}
                            onMouseLeave={() => autoPlayVideo(null, ele.url)}
                        >
                            {/* <div className={`overlay`}>
                            </div> */}
                            <button 
                                className={hoveredIndex === index ? "play-button" : 'none'} 
                                onClick={() => playVideo(ele.url)}
                            > PLAY</button>    
                            <iframe 
                                className="i-frame"
                                style={hoveredIndex === index ? {height: '80%'}: {}}
                                src={hoveredIndex === index ? currentVideo : (ele.url + '&modestbranding=1&showinfo=0')}
                                frameborder="0"
                                allowfullscreen
                            />
                        </div>
                    )
                })
                }
                
            </div>
        </div>
    )
}

export default Miscelleneous;