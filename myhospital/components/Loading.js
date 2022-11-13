import { motion } from "framer-motion"
import {AiOutlineLoading3Quarters} from "react-icons/ai"

export default function Loading(){
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
            >
                <AiOutlineLoading3Quarters style={{fontSize:"3rem"}}/>
            </motion.div>
            <h3>loading</h3>
        </div>
    )
}