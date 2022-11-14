import { motion } from "framer-motion"
import { useState } from "react"
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
import styles from "../styles/Navigation.module.css"
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import Link from "next/link";

export default function Navigation(){

    const [openNav, setOpenNav] = useState(false);

    const variants = {
        open: {
            right:0,
        },
        closed:{
            right:"-80vw",
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
            <ul className={styles.navlinks}>
                <li>
                    <Link href="./">Home</Link>
                </li>
                <li>
                    <Link href="./Radiology">Departments</Link>
                </li>
                <li>
                    <Link href="./">Activity</Link>
                </li>
                <li>
                    <Link href="./">Transmissibility</Link>
                </li>
                
                <button onClick={ () => signOut(auth)}>SignOut</button>
            </ul>

        </motion.div>
    )
}