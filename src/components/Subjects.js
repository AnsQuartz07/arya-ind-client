import { useState, useEffect } from "react";
import '../css/Subjects.css';
import { useNavigate } from "react-router";

const Subjects = function (props) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [buttonColor, setButtonColor] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (props.course === 'upsc') {
            setTitle('Union Public Service Comission');
            setImageUrl('https://i.postimg.cc/bNhqT4SQ/upsc.jpg')
            setButtonColor('135deg, #a9f1df, #ffbbbb')
            setSubjects([{
                name: 'Geography',
                teachers: [{
                    name: 'Harsh Gupta',
                    teacherId: 'geo01'
                }, {
                    name: 'Ashwani Kumar',
                    teacherId: 'geo02'
                }]
            }, {
                name: 'Modern India History',
                teachers: [{
                    name: 'Rahul Upadhyay',
                    teacherId: 'mih01'
                }, {
                    name: 'Praveen gautam',
                    teacherId: 'mih02'
                }]
            }, {
                name: 'Polity',
                teachers: [{
                    name: 'Ayushi Agrawal',
                    teacherId: 'pol01'
                }, {
                    name: 'Amil Hassan',
                    teacherId: 'pol02'
                }]
            }, {
                name: 'Economics',
                teachers: [{
                    name: 'Aditya Kaliya',
                    teacherId: 'econ01'
                }, {
                    name: 'Ranchan Kaul',
                    teacherId: 'econ02'
                }]
            }, {
                name: 'World History',
                teachers: [{
                    name: 'Pavan Jha',
                    teacherId: 'wlh01'
                }, {
                    name: 'Priya Gupta',
                    teacherId: 'wlh02'
                }]
            }])
            // setData(historyApi());
        }
        else if (props.course === 'jee') {
            setTitle('JEE ( Mains + Advance )');
            setImageUrl('https://i.postimg.cc/0ykH50hg/jee.jpg')
            setButtonColor('135deg, #BFF098,  #6FD6FF')
            setSubjects([{
                name: 'Physics',
                teachers: [{
                    name: 'Lalit Kumar',
                    teacherId: 'phy01'
                }, {
                    name: 'Mukim Khan',
                    teacherId: 'phy02'
                }]
            }, {
                name: 'Inorganic Chemistry',
                teachers: [{
                    name: 'Manoj Jha',
                    teacherId: 'ioc01'
                }, {
                    name: 'Amitabh Sharma',
                    teacherId: 'ioc02'
                }]
            }, {
                name: 'Organic Chemistry',
                teachers: [{
                    name: 'Jaswant Charan',
                    teacherId: 'orgc01'
                }, {
                    name: 'Navneet Jethwani',
                    teacherId: 'orgc02'
                }]
            }, {
                name: 'Physical Chemictry',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Mathematics',
                teachers: [{
                    name: 'Nagar Sir',
                    teacherId: 'maths01'
                }, {
                    name: 'Ajai Sharma',
                    teacherId: 'maths2'
                }]
            }])
            // setData(recommendedLecApi());
        }
        else if (props.course === 'neet') {
            setTitle('NEET (Medical)');
            setImageUrl('https://i.postimg.cc/yYZ7XsN6/neet.jpg')
            setButtonColor('135deg, #E2D1C3 ,  #A890FE')
            setSubjects([{
                name: 'Physics',
                teachers: [{
                    name: 'Lalit Kumar',
                    teacherId: 'phy01'
                }, {
                    name: 'Mukim Khan',
                    teacherId: 'phy02'
                }]
            }, {
                name: 'Inorganic Chemistry',
                teachers: [{
                    name: 'Manoj Jha',
                    teacherId: 'ioc01'
                }, {
                    name: 'Amitabh Sharma',
                    teacherId: 'ioc02'
                }]
            }, {
                name: 'Organic Chemistry',
                teachers: [{
                    name: 'Jaswant Charan',
                    teacherId: 'orgc01'
                }, {
                    name: 'Navneet Jethwani',
                    teacherId: 'orgc02'
                }]
            }, {
                name: 'Physical Chemictry',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Biology',
                teachers: [{
                    name: 'Shreedhar Babu',
                    teacherId: 'bio01'
                }, {
                    name: 'Vishal Joshi',
                    teacherId: 'bio02'
                }]
            }])
            // setData(popularVideoApi());
        }
        else if (props.course === 'cbse') {
            setTitle('CBSE Board Examination');
            setImageUrl('https://i.postimg.cc/Z54CDC2K/cbse.jpg');
            setButtonColor('135deg, #D8B5FF   , #38EF7D')
            setSubjects([{
                name: 'Physics : Class X',
                teachers: [{
                    name: 'Lalit Kumar',
                    teacherId: 'phy01'
                }, {
                    name: 'Mukim Khan',
                    teacherId: 'phy02'
                }]
            }, {
                name: 'Chemistry : Class X',
                teachers: [{
                    name: 'Manoj Jha',
                    teacherId: 'ioc01'
                }, {
                    name: 'Amitabh Sharma',
                    teacherId: 'ioc02'
                }]
            }, {
                name: 'Biology : Class X',
                teachers: [{
                    name: 'Jaswant Charan',
                    teacherId: 'orgc01'
                }, {
                    name: 'Navneet Jethwani',
                    teacherId: 'orgc02'
                }]
            }, {
                name: 'Mathematics : Class X',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'English : Class X',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Social Science : Class X',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Hindi : Class X',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Mathematics : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Mathematics : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Physics : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Physics : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Chemistry : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Chemistry : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Biology : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Biology : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'English : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'English : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Hindi : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Hindi : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Economics : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Economics : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Polity : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Polity : Class XII',
                teachers: [{
                    name: 'Shreedhar Babu',
                    teacherId: 'bio01'
                }, {
                    name: 'Vishal Joshi',
                    teacherId: 'bio02'
                }]
            }, {
                name: 'Geography : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Geography : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'History : Class XI',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'History : Class XII',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }])
            // setData(popularVideoApi());
        }
        else if (props.course === 'misc') {
            setTitle('Miscellaneous Discussions');
            setImageUrl('https://i.postimg.cc/4dsYjnm1/misc.jpg');
            setButtonColor('135deg,rgb(122, 241, 226)  ,rgb(182, 113, 222)')
            setSubjects([{
                name: 'Theory Of Relativity',
                teachers: [{
                    name: 'Lalit Kumar',
                    teacherId: 'phy01'
                }, {
                    name: 'Mukim Khan',
                    teacherId: 'phy02'
                }]
            }, {
                name: 'Astronomy Introduction',
                teachers: [{
                    name: 'Manoj Jha',
                    teacherId: 'ioc01'
                }, {
                    name: 'Amitabh Sharma',
                    teacherId: 'ioc02'
                }]
            }, {
                name: 'Motivational Lectures',
                teachers: [{
                    name: 'Jaswant Charan',
                    teacherId: 'orgc01'
                }, {
                    name: 'Navneet Jethwani',
                    teacherId: 'orgc02'
                }]
            }, {
                name: 'Theory of Evolution',
                teachers: [{
                    name: 'Girish Kumar Gupta',
                    teacherId: 'phc01'
                }, {
                    name: 'Shreedhar babu',
                    teacherId: 'phc02'
                }]
            }, {
                name: 'Intresting Historical Stories',
                teachers: [{
                    name: 'Shreedhar Babu',
                    teacherId: 'bio01'
                }, {
                    name: 'Vishal Joshi',
                    teacherId: 'bio02'
                }]
            }])
            // setData(popularVideoApi());
        }
    }, [props.course]);
    // banner image aspect ratio = 315 px : 1520 px
    return (
        <div>
            <div className="banner">
                <img
                    className="banner-image"
                    src={imageUrl}
                    alt="Banner"
                />
                <div className="banner-overlay">
                    <h1 className="banner-title">{title}</h1>
                </div>
            </div>

            <div className="grid-container">
                {subjects.map((sub) => {
                    return (
                        <div className="grid-box"
                            style={{ background: `linear-gradient(${buttonColor ? buttonColor : '135deg, #C6EA8D ,  #FE90AF'})` }}
                            onClick={() => navigate("/teachers", { state: { sub, buttonColor, imageUrl } })}
                        >
                            <h1>{sub.name}</h1>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Subjects;