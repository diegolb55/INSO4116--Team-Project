import { motion, AnimatePresence } from "framer-motion"
import styles from "../styles/VirtualReception.module.css"
import {IoIosArrowBack} from "react-icons/io"
import { useState } from "react"

export default function VirtualReception({isVROpen, setIsVROpen, line}){

    

    return (
        <>
        <AnimatePresence>
            { isVROpen && !line.hasTurn() && (
                <motion.div className={styles.vrContainer}
                    initial={{x: "100%" }}
                    animate={{ x: "0%" }}
                    transition={{ type: "tween", duration: .2, }}
                    exit={{ x: "100%"}}
                >
                    <IoIosArrowBack
                        className={styles.backbtn} 
                        onClick={()=> setIsVROpen(false)}
                    />

                    <div className={styles.header}>
                        <h3>Virtual Reception</h3>
                        <h3>Radiology</h3>
                    </div>
                    <div className={styles.vrinfo}>
                        <p>Number of patients currently in queue</p>
                        <div className={`${styles.circle} ${styles.circle1}`}>
                            <p>{ line.length }</p>
                        </div>
                        <button
                            className={`${styles.btn} ${styles.btn1}`} 
                            onClick={() => line.addPatient()}>take turn!</button>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence>
            { isVROpen && line.hasTurn() &&(
                <motion.div className={styles.vrContainer}
                    initial={{x: "100%" }}
                    animate={{ x: "0%" }}
                    transition={{ type: "tween", duration: .2, }}
                    exit={{ x: "100%"}}
                >
                    <IoIosArrowBack
                        className={styles.backbtn} 
                        onClick={()=> setIsVROpen(false)}
                    />

                    <div className={styles.header}>
                        <h3>Virtual Reception</h3>
                        <h3>Radiology</h3>
                    </div>
                    <div className={styles.vrinfo}>
                        <div className={styles.textbox}>
                            <h3>Hi patient { line?.patientName }</h3>
                            <p>Thank you for waiting!</p>
                            <p>Your position in our queue is:</p>
                        </div>
                        <div className={`${styles.circle} ${styles.circle2}`}>
                            <p>{ line.position }</p>
                        </div>
                        <button 
                            className={`${styles.btn} ${styles.btn2}`} 
                            onClick={() => line.deletePatient()}>leave queue!</button>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
        </>
        
    )
}