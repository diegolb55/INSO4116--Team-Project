import styles from "../../styles/Department/Doctors.module.css"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";


const Slide = () => {
    const [openInfo, setOpenInfo] = useState(false);
    const variants = {
        open:{
            height: 300,
            width:"120%",
    
        },
        closed:{
            height: 100,
            width:"102%",
    
        }
    }

    return (
        <div className={styles.swiperbox} onClick={()=>setOpenInfo((b)=>!b)}>
                <Image src="/images/fdoctor.jpg" layout={'fill'} objectFit={'cover'} alt="building"/>
                
                <motion.div 
                    className={styles.docInfo}
                    animate={{
                        height: openInfo ? "100%": 60,
                        width: openInfo ?  "120%": "105%",
                        borderRadius: openInfo ? 0 : "20px 20px 0 0",
                    }}
                    transition={{type:"tween", duration:.3}}
                >
                    <p>Dr. Hernan</p>
                    <AnimatePresence>
                        { openInfo && (
                            <p>Education, experience</p>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
    )
}

let n = [0, 1, 2, 3];
const getSlides = () => 

    n?.map((doc, index) => {


        return (
        <SwiperSlide 
            className={styles.swiperSlide}
            key={Math.random()}
        >
            <Slide />
        </SwiperSlide>
        )
    })




export default function Doctors(){
   

    const [isRect, setIsRect] = useState(false)
    
   
    return (
        <div className={styles.docbox}>
            <h3>Our Doctors</h3>
            <Swiper
                autoHeight={true}

                slidesPerView={2}
                spaceBetween={"10%"}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                className={styles.swiper}
            >
                
                { getSlides() }
            
                      
            
            
            </Swiper>

        
        </div>
    )
}