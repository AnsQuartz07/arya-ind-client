import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import '../css/Lectures.css';

function Lectures(props) {
    const [data, setData] = useState([1, 1, 1,2,2,2,2]);
    // const [teacherInfo, setTeacherInfo] = useState()
    const location = useLocation();
    const teacherInfo = location.state
    useEffect(() => {
        // setTeacherInfo(location.state );
    },)
    console.log('xxxxxxxxx  ', teacherInfo)

    return (
        <div className='lectures-page'>
            <div className='lectures-section' style={{background: `linear-gradient( ${teacherInfo.buttonColor})`}}>
                <h1>All Lectures : </h1>
                <div>
                    {data.map((ele) => {
                        return (
                            <div className="element pad1">
                                <div className="pad1" >
                                    <img className="videoSize" src='https://travellerscribe.com/wp-content/uploads/2023/07/Lal-Qila-Delhi.webp'></img>
                                </div>
                                <div className="lectureInfo">
                                    <h3 className="videoTitle mar0">Title of the Videos</h3>
                                    <p className="mar0">Subject - Course name</p>
                                    <p className="mar0">2.3k views</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="course-section" style={{background: `linear-gradient( ${teacherInfo.buttonColor})`}}>
                {/* Subject Card */}
                <div className="course-card">
                    <h2>Physics</h2>
                </div>

                {/* Course Name Card */}
                <div className="course-card">
                    <h3 >IIT JEE (Mains & Advance)</h3>
                </div>

                {/* Teacher Info Card */}
                <div className="course-card teacher-card">
                    <img
                        src="/images/vikash.jpg"  // Replace with actual teacher image URL
                        alt="Amitabh Sharma"
                        className="teacher-img"
                    />
                    <div>
                        <h3>{teacherInfo.name}</h3>
                        <p>Experience: 11 years</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lectures