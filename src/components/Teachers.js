import { useState, useEffect } from "react";
import '../css/Subjects.css';
import { useLocation, useNavigate } from "react-router";

const Teachers = function ({ props, placeholder = "" }) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [buttonColor, setButtonColor] = useState('')
    const location = useLocation();
    const state = location.state || {};
    const data = state.sub;
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setImageUrl(state.imageUrl);
        setTitle(data.name);
        setTeachers(data.teachers);
        setButtonColor(state.buttonColor)
    },)

    return (
        <div>
            <div className="banner" >
                {!loaded && <img src={placeholder} className="placeholder" alt="placeholder" />}
                <img
                    style={{ width: '100%' }}
                    className={`banner-image smooth-image ${loaded ? "loaded" : ""}`}
                    onLoad={() => setLoaded(true)}
                    src={state.imageUrl}
                    placeholder="https://via.placeholder.com/300x200?text=Loading..."
                />
                <div className="banner-overlay">
                    <h1 className="banner-title banner-font">{title}</h1>
                    <h2 className="banner-title">{`- ${state.course} -`}</h2>
                </div>
            </div>
            <div className="grid-container">
                {teachers.map((t) => {
                    return (
                        <div className="grid-box"
                            style={{ background: `linear-gradient(${buttonColor ? buttonColor : '135deg, #C6EA8D ,  #FE90AF'})` }}
                            onClick={() => navigate("/lectures", {state: {...t, buttonColor, subject: title, course: state.course}, })}
                        >
                            <p>{t.name}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Teachers;