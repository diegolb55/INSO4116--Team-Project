import styles from "../../styles/Department/Doctors.module.css"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";


export default function Doctors(){
    return (
        <div className={styles.docbox}>
            <h3>Our Doctors</h3>
            <Swiper
                autoHeight={true}

                slidesPerView={2}
                spaceBetween={15}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperImg}>
                        <Image src="/images/mdoctor.jpg" layout={'fill'} objectFit={'cover'} alt="building"/>
                        <p>Dr. Hernandez</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperImg}>
                        <Image src="/images/fdoctor.jpg" layout={'fill'} objectFit={'cover'} alt="building"/>
                        <p>Dr Rodriguez</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperImg}>
                        <Image src="/images/mdoctor.jpg" layout={'fill'} objectFit={'cover'} alt="building"/>
                        <p>Dr. Hernandez</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.swiperImg}>
                        <Image src="/images/fdoctor.jpg" layout={'fill'} objectFit={'cover'} alt="building"/>
                        <p>Dr Rodriguez</p>
                    </div>
                </SwiperSlide>
                
                
            
            </Swiper>
        </div>
    )
}