import styles from "../../styles/Department/Doctors.module.css"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";


const Slide = ({doc}) => {
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
                <div className={styles.imgCont}>
                    <Image src={doc.g == "m" ?
                        "/images/mdoctor.jpg"
                        :
                        "/images/fdoctor.jpg"
                        } 
                        layout={'fill'} objectFit={'cover'} alt="building"
                    />
                </div>
                
                <motion.div 
                    className={styles.docInfo}
                    animate={{
                        height: openInfo ? "100%": 60,
                        width: openInfo ?  "130%": "110%",
                        borderRadius: openInfo ? 0 : "20px 20px 0 0",
                    }}
                    transition={{type:"tween", duration:.2}}
                >
                    <p>{ doc.name}</p>
                    <AnimatePresence>
                        { openInfo && (
                            <p>{ doc.bio }</p>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
    )
}






export default function Doctors({department}){
   

    const getSlides = () => 

        department.doctors?.map((doc, index) => {

            return (
            <SwiperSlide 
                className={styles.swiperSlide}
                key={Math.random()}
            >
                <Slide doc={doc}/>
            </SwiperSlide>
            )
        })
    
    return (
        <div className={styles.docbox}>
            <h3>Our Doctors</h3>
            <p>Come checkout what our staff and doctors can do for you.</p>
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