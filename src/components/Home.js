import React, { useState } from 'react';
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


const Home = () => {
    const images = [
        'https://plus.unsplash.com/premium_photo-1697729636512-61ef6695d115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFqJTIwbWFoYWwlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
        'https://img-cdn.thepublive.com/fit-in/1280x720/filters:format(webp)/thetatva/media/post_attachments/wp-content/uploads/2020/12/53331482_2283781921869816_2361277172979920993_n.jpg',
        'https://travellerscribe.com/wp-content/uploads/2023/07/Lal-Qila-Delhi.webp',
    ];
    const styles = {
        carouselWrapper: {
            display: "flex",
            justifyContent: "flex-start", // Aligns the carousel to the left
            padding: "13%", // Adds spacing around the carousel
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
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
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
                        <img src={slide.img} alt={slide.title} />
                        <p className='carousel-card p'>{slide.title}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>)
    }
    return (
        <div >
            <div className="banner">
                <img className="banner-image" src={'https://i.postimg.cc/W3FGbd2c/equity.png'} alt="Banner" />
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '60%' }}>
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
                                style={{ height: "100%" }} // Swiper takes full height
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index} style={styles.slide}>
                                        <img src={img} alt={`Slide ${index + 1}`} style={styles.image} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div  > {/* Changed col-4 to col-6 to match grid */}
                    <img
                        style={{ padding: '13%' }}
                        src="https://storage.googleapis.com/tb-img/production/18/08/Capture%2029.PNG"
                        className="img-fluid"
                        alt="Taj Mahal"
                    />
                </div>
            </div>
            <div className="carousel-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>Continue Watching...</h1>
                    <a href='/category?cat=hist' style={{ height: '28px' }}>
                        <button style={{ cursor: 'pointer' }} >Show more</button>
                    </a>
                </div>
                {swiperFunction(slides)}
            </div>
            <div className="carousel-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>Recommended Lectures</h1>
                    <a href='/category?cat=recom' style={{ height: '28px' }}>
                        <button style={{ cursor: 'pointer' }} >Show more</button>
                    </a>
                </div>
                {swiperFunction(slides)}
            </div>
            <div className="carousel-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>Most Popular Videos</h1>
                    <a href='/category?cat=pop' style={{ height: '28px' }}>
                        <button style={{ cursor: 'pointer' }} >Show more</button>
                    </a>
                </div>
                {swiperFunction(slides)}
            </div>
        </div>
    );

}


export default Home;
