import { motion } from "framer-motion"
import { useState } from "react"
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
import styles from "../styles/Navigation.module.css"
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";

export default function Navigation(){

    const [openNav, setOpenNav] = useState(false);

    const variants = {
        open: {
            right:0,
        },
        closed:{
            right:"-80%",
        },
        menuopen:{
            left: 20
        },
        menuclosed:{
            left: -60
        }
    }

    return (
        <motion.div className={styles.navcontainer}
            variants={variants}
            animate={openNav ? "open" : "closed"}
            transition={{type:"tween"}}
        >
            
            {openNav ? 
                <motion.div 
                    className={styles.menubox}
                    variants={variants}
                    animate={openNav ? "menuopen" : "menuclosed"}

                >
                    <AiOutlineMenuFold onClick={()=>setOpenNav(false)}/>
                </motion.div>
                : 
                <motion.div 
                    className={styles.menubox}
                    variants={variants}
                    animate={openNav ? "menuopen" : "menuclosed"}

                >
                    <AiOutlineMenuUnfold onClick={()=>setOpenNav(true)}/>
                </motion.div>
            }
            <div className={styles.navlinks}>
                <p>Departments</p>
                <p>Activity</p>
                <p>Transmissibility</p>
                <button onClick={ () => signOut(auth)}>SignOut</button>
            </div>

        </motion.div>
    )
}