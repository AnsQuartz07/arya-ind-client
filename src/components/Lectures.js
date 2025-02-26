import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import '../css/Lectures.css';

const videoData = [{
    videoId: 'cbse_maths01_png',
    title: 'Maths Lec-01',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/7HKZmzJtzY8?si=u6VnaH6FGrkDa_7o',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths02_png',
    title: 'Maths Lec-02',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/pybhlOhXkiM?si=a24hD9tXtULhfXkL',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths03_png',
    title: 'Maths Lec-03',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/_gOz-V4RtGA?si=ivU2igWoKJBDnKAB',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths04_png',
    title: 'Maths Lec-04',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/3-UwU0h9wOc?si=GKimNjKDMZbkkIVH',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths05_png',
    title: 'Maths Lec-05',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/Hdd9tcs6Jwk?si=hO0BSycN398nPb2S',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths06_png',
    title: 'Maths Lec-06',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/zkCKx3fpk4Q?si=Rhl9q2D52HmCrLgs',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
},{
    videoId: 'cbse_maths07_png',
    title: 'Maths Lec-07',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/foPlxyPuLgk?si=rNcPGENgIWPnSelQ',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths08_png',
    title: 'Maths Lec-08',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/YpyXVkqkQgg?si=2EK4-IHfwgeG-Otd',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths09_png',
    title: 'Maths Lec-09',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/ZAqIoDhornk?si=u5cfn-fzwdmHX_ob',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths10_png',
    title: 'Maths Lec-10',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/FEuSURHQSXs?si=_BUAIWXr67ie3Sgb',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths11_png',
    title: 'Maths Lec-11',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/P60TX-dwd4s?si=AdyslQbg3Ev8to6B',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths12_png',
    title: 'Maths Lec-12',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/wXc2tao51D4?si=vRVsB7HSJvV_ZmBd',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths14_png',
    title: 'Maths Lec-14',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/Oa0ZHfcalCM?si=hqM9vBbPr5BvXT1_',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths15_png',
    title: 'Maths Lec-15',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/ZII3PQ3QkIQ?si=dSj8YJLIsTyWKTZH',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}]
function Lectures(props) {
    const [data, setData] = useState(videoData);
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
                <h1 style={{marginLeft: '2%'}}>All Lectures : </h1>
                <div>
                    {data.map((ele) => {
                        return (
                            <div className="video-container" >
                                <iframe
                                    style={{borderRadius: '8px'}}
                                    src={ele.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    height='100%'
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                                {/* <img className="videoSize" src='https://travellerscribe.com/wp-content/uploads/2023/07/Lal-Qila-Delhi.webp'></img> */}
                            <div className="lectureInfo">
                                <h3 className="videoTitle mar0">{ele.title}</h3>
                                {/* <p className="mar0">{ele.subject} : {ele.teacher}</p> */}
                                <p className="mar0">{ele.views} views</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="course-section" style={{background: `linear-gradient( ${teacherInfo.buttonColor})`}}>
                <div className="course-card">
                    <h2>{teacherInfo.subject}</h2>
                </div>

                <div className="course-card">
                    <h3 >{teacherInfo.course}</h3>
                </div>

                <div className="course-card teacher-card">
                    <img
                        src="https://i.postimg.cc/fb0P1T6k/vikash.jpg"
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