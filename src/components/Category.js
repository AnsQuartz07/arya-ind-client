import { useLocation } from "react-router";
import '../css/Category.css';
import { useEffect, useState } from "react";

const Category = function () {

    const [data, setData] = useState([1, 1, 1]);
    const [title, setTitle] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cat = queryParams.get("cat"); // Getting 'name' parameter

    useEffect(() => {
        if (cat === 'hist') {
            setTitle('Your Watched History');
            // setData(historyApi());
        }
        else if (cat === 'recom') {
            setTitle('Recommended Lectures');
            // setData(recommendedLecApi());
        }
        else if (cat === 'pop') {
            setTitle('Most Popular Videos');
            // setData(popularVideoApi());
        }
    }, [cat]);
    return (
        <div style={{ padding: '2%' }}>
            <h1>{title}</h1>
            <div>
                {data.map((ele) => {
                    return (
                        <div className="element pad1">
                            <div className="pad1" >
                                <img className="videoSize" src='https://travellerscribe.com/wp-content/uploads/2023/07/Lal-Qila-Delhi.webp'></img>
                            </div>
                            <div className="lectureInfo pad1">
                                <h3 className="videoTitle mar0">Title of the Videos</h3>
                                <p className="mar0">Subject - Course name</p>
                                <p className="mar0">2.3k views</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Category;