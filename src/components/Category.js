import { useLocation } from "react-router";
import '../css/Category.css';
import { useEffect, useState } from "react";

export const videoData = [{
    videoId: 'cbse_maths45_png',
    title: 'Maths Lec-45',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/7HKZmzJtzY8?si=u6VnaH6FGrkDa_7o&modestbranding=1&rel=0',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'cbse_maths56_png',
    title: 'Maths Lec-56',
    subject: 'Mathematics',
    teacher: 'Pradeep Nagar',
    course: 'JEE',
    videoUrl: 'https://www.youtube.com/embed/pybhlOhXkiM?si=a24hD9tXtULhfXkL&modestbranding=1&rel=0',
    videoColor: '135deg, #BFF098,  #6FD6FF',
    views: '5.3k'
}, {
    videoId: 'neet_bio23_ayg',
    title: 'BIO Lec-23',
    subject: 'Biology',
    teacher: 'Ayushi Agrawal',
    course: 'NEET',
    videoUrl: 'https://www.youtube.com/embed/_gOz-V4RtGA?si=ivU2igWoKJBDnKAB&modestbranding=1&rel=0',
    videoColor: '135deg, #E2D1C3 ,  #A890FE',
    views: '3k'
}, {
    videoId: 'misc_astn05_rsn',
    title: 'Astronomy Lec-01',
    subject: 'Astronomy',
    teacher: 'Rohit Sen',
    course: 'Miscellaneous',
    videoUrl: 'https://www.youtube.com/embed/3-UwU0h9wOc?si=GKimNjKDMZbkkIVH&modestbranding=1&rel=0',
    videoColor: '135deg,rgb(122, 241, 226)  ,rgb(182, 113, 222)',
    views: '86k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/Hdd9tcs6Jwk?si=hO0BSycN398nPb2S&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/zkCKx3fpk4Q?si=Rhl9q2D52HmCrLgs&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/foPlxyPuLgk?si=rNcPGENgIWPnSelQ&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/YpyXVkqkQgg?si=2EK4-IHfwgeG-Otd&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/ZAqIoDhornk?si=u5cfn-fzwdmHX_ob&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/FEuSURHQSXs?si=_BUAIWXr67ie3Sgb&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/P60TX-dwd4s?si=AdyslQbg3Ev8to6B&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/wXc2tao51D4?si=vRVsB7HSJvV_ZmBd&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/Oa0ZHfcalCM?si=hqM9vBbPr5BvXT1_&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/ZII3PQ3QkIQ?si=dSj8YJLIsTyWKTZH&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/_gOz-V4RtGA?si=ivU2igWoKJBDnKAB&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/foPlxyPuLgk?si=rNcPGENgIWPnSelQ&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/3-UwU0h9wOc?si=GKimNjKDMZbkkIVH&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/Hdd9tcs6Jwk?si=hO0BSycN398nPb2S&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/zkCKx3fpk4Q?si=Rhl9q2D52HmCrLgs&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/foPlxyPuLgk?si=rNcPGENgIWPnSelQ&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/YpyXVkqkQgg?si=2EK4-IHfwgeG-Otd&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/ZAqIoDhornk?si=u5cfn-fzwdmHX_ob&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/P60TX-dwd4s?si=AdyslQbg3Ev8to6B&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}, {
    videoId: 'upsc_mih01_aks',
    title: 'MIH Lec-01',
    subject: 'Modern India History',
    teacher: 'Akshay Sinha',
    course: 'UPSC',
    videoUrl: 'https://www.youtube.com/embed/wXc2tao51D4?si=vRVsB7HSJvV_ZmBd&modestbranding=1&rel=0',
    videoColor: '135deg, #a9f1df, #ffbbbb',
    views: '2.3k'
}]

const Category = function () {

    const [data, setData] = useState(videoData);
    const [title, setTitle] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cat = queryParams.get("cat");

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
        <div className="lectures-sec">
            <p style={{fontSize: '24px', fontWeight: 'bold'}} >{title}</p>
                {data.map((ele, index) => {
                    return (
                        <div className="video-sec" style={{background: `linear-gradient(${ele.videoColor})`}}>
                            <iframe
                                style={{width: '65%'}}
                                src={ele.videoUrl}
                                loading="lazy"
                                title="YouTube video player"
                                frameBorder="0"
                                height='100%'
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                            <div className="lectureInfo">
                                <p className="videoTitle mar0">{ele.title}</p>
                                <p className="videoInfo mar0">{ele.subject} : {ele.teacher}</p>
                                <p className="mar0">{ele.views} views</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default Category;