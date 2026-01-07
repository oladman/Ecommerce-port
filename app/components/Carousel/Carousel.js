"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Carousel.module.css"; 
import Link from "next/link";

export default function Carousel() {
  return (
  <>

    {/*<Swiper
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
    </Swiper> */}

    <div className={styles["new-carousel"]}>
      <div className={styles["carousel-left"]}>
  <div className={styles["carousel-style"]}>
        <img src="/assets/logos/carousel1.jpg"/>
        <div>
          <p>Faded Effect <br/> SweartShirt</p>
        <Link href="/" className={styles["carousel-link"]} >
        Shop Now
        </Link>
          </div>
        </div>
      </div>
      <div className={styles["carousel-right"]}>
        <div className={styles["carousel-two"]} >
              <img src="/assets/logos/carousel3.jpg"/>
                  <div>
          <p>Women <br/> Collection</p>
       
          </div>
        </div>
        <div className={styles["carousel-three"]}> 
          <img src="/assets/logos/carousel4.jpg"/>
             <div>
          <p>Unisex <br/> Collection</p>
       
          </div>
        </div>
        <div className={styles["carousel-inner"]}>
          <div className={styles["carousel-four"]}>    
            <img src="/assets/logos/carousel2.jpg"/>
                 <div>
          <p>Clothing</p>
       
          </div>
            </div>
          <div className={styles["carousel-five"]}>
                <img src="/assets/logos/carousel5.jpg"/>
                     <div>
          <p>Accessories</p>
        
          </div>
          </div>
        </div>
      </div>
    

        </div>
      </>
  )
 
}
