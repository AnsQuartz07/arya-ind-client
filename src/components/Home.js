import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon
import '../css/Searchbar.css';
import Layout from './Layout';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../css/Home.css';
import '../css/Subjects.css';
import { videoData } from './Category';

const Home = () => {
    const images = [
        'https://i.postimg.cc/MHgFzt5n/pexels-espinozafotos-2269648.jpg',
        'https://i.postimg.cc/fThybsPR/slider-4.jpg',
        'https://i.postimg.cc/Pq8NxqdN/slider-3.jpg',
        'https://i.postimg.cc/tg0pBNHC/slider-1.jpg',
        'https://i.postimg.cc/VNcPqsjJ/slider-2.jpg',
    ];
    const styles = {
        carouselWrapper: {
            display: "flex",
            justifyContent: "flex-start", // Aligns the carousel to the left
            padding: "2%", // Adds spacing around the carousel
        },
        carouselContainer: {
            width: "100%", // Takes full width of the wrapper
            height: "100%", // Takes full height of the wrapper
            borderRadius: "10px",
            overflow: "hidden",
        },
        slide: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    };

    const slides = [
        {
            title: "Tail Helps MI Snatch Dramatic Win",
            img: "https://plus.unsplash.com/premium_photo-1697729636512-61ef6695d115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URLs
        },
        {
            title: "Greenock Morton vs Falkirk",
            img: "https://img-cdn.thepublive.com/fit-in/1280x720/filters:format(webp)/thetatva/media/post_attachments/wp-content/uploads/2020/12/53331482_2283781921869816_2361277172979920993_n.jpg",
        },
        {
            title: "NEUFC 0-2 BFC",
            img: "https://travellerscribe.com/wp-content/uploads/2023/07/Lal-Qila-Delhi.webp",
        },
        {
            title: "Legends Banter Ahead of Ind-Pak Tie",
            img: "https://lalqila.com/wp-content/uploads/2024/06/lal_qila_project.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/06/Lalqila-Restaurant-Lahore.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g3.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g4.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g5.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g6.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g7.jpg",
        },
        {
            title: "Tail Helps MI Snatch Dramatic Win",
            img: "https://plus.unsplash.com/premium_photo-1697729636512-61ef6695d115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URLs
        },
        {
            title: "Greenock Morton vs Falkirk",
            img: "https://img-cdn.thepublive.com/fit-in/1280x720/filters:format(webp)/thetatva/media/post_attachments/wp-content/uploads/2020/12/53331482_2283781921869816_2361277172979920993_n.jpg",
        },
        {
            title: "NEUFC 0-2 BFC",
            img: "https://travellerscribe.com/wp-content/uploads/2023/07/Lal-Qila-Delhi.webp",
        },
        {
            title: "Legends Banter Ahead of Ind-Pak Tie",
            img: "https://lalqila.com/wp-content/uploads/2024/06/lal_qila_project.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/06/Lalqila-Restaurant-Lahore.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g3.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g4.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g5.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g6.jpg",
        },
        {
            title: "Candid with Arne Slot",
            img: "https://lalqila.com/wp-content/uploads/2024/08/g7.jpg",
        },
    ];
    const categoryData = [{
        categoryName: "Continue Watching...",
        catUrl: "hist",
        filterredVideos: videoData
    }, {
        categoryName: "Recommended Lectures",
        catUrl: "recom",
        filterredVideos: videoData
    }, {
        categoryName: "Most Popular Videos",
        catUrl: "pop",
        filterredVideos: videoData
    }]
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025);
        };
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log('asdfghjkjhgfds    ', videoData)
    const swiperFunction = (slides) => {
        return (<Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={'auto'} // Adjust width dynamically
            slidesPerGroup={5}
            loop={false}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} style={{ width: "250px" }}> {/* Adjust width of each card */}
                    <div className="carousel-card">
                        <iframe
                            src={slide.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            width='100%'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                        {/* <img src={slide.img} alt={slide.title} /> */}
                        <p className='carousel-card p'>{slide.title}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>)
    }
    const framerFunction = (videos) => {
        return (
            <div className='horizontal-scroll'>
                {videos.map ((v, index) => (
                    <div className="phone-carousel-card">
                        <iframe
                            src={v.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            width='120px'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                        <p style={{margin: 0}} className='carousel-card p'>{v.title}</p>
                    </div>
                ))}
            </div>
        )
    }
    const categoryFunction = function (category) {
        return (
            <div className="carousel-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>{category.categoryName}</h2>
                    <a href={'/category?cat=' + category.catUrl } style={{ height: '28px' }}>
                        <button style={{ cursor: 'pointer' }} >Show more</button>
                    </a>
                </div>
                {isMobile ? framerFunction(category.filterredVideos) : swiperFunction(category.filterredVideos)}
            </div>
        )
    }
    return (
        <div >
            <div className="banner">
                <img className="banner-image" src={'https://i.postimg.cc/W3FGbd2c/equity.png'} alt="Banner" />
            </div>
            <div className='advertisement'>
                <div className='ad-banner'>
                    <div style={styles.carouselWrapper}>
                        <div style={styles.carouselContainer}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={1}
                                style={{ height: "100%" }}
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index} style={styles.slide}>
                                        <img className='ad-banner-image' src={img} alt={`Slide ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className='main-logo'>
                    <img
                        src="/images/inde.gif"
                        className="img-fluid logo-image"
                    />
                </div>
            </div>
            {categoryData.map((category) => categoryFunction(category))}
        </div>
    );

}


export default Home;
