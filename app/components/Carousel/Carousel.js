"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Carousel.module.css"; 

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }} 
      className={styles["carousel-container"]}
    >
      <SwiperSlide>
      <img src="/images/mainyeffso3.jpeg" alt="Slide 3" className={styles.carouselImg} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/images/mainyeffso3.jpeg" alt="Slide 3" className={styles.carouselImg} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/images/mainyeffso3.jpeg" alt="Slide 3" className={styles.carouselImg} />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/images/mainyeffso3.jpeg" alt="Slide 3" className={styles.carouselImg} />
      </SwiperSlide>
    </Swiper>
  );
}
