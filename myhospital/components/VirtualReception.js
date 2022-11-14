import { motion, AnimatePresence } from "framer-motion"
import styles from "../styles/VirtualReception.module.css"
import {IoIosArrowBack} from "react-icons/io"

export default function VirtualReception({isVROpen, setIsVROpen, dept}){
    return (
        <AnimatePresence>
            { isVROpen && (
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
                        <div className={styles.circle}>
                            <p>{ dept.length }</p>
                        </div>
                        <button onClick={() => dept.addTurn()}>take turn!</button>
                    </div>




                </motion.div>
            )}
        </AnimatePresence>
    )
}