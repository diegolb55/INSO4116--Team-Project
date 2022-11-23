import {FaXRay, FaLungs} from "react-icons/fa"
import {TbEmergencyBed} from "react-icons/tb"
import {RiHeartPulseFill} from "react-icons/ri"


export default function ActivityBar({activity, styles, name, footer}) {

    const getIcon = (name) => {
        switch(name){
            case "Radiology":
                return <FaXRay/>;
                break;
            case "Emergency":
                return <TbEmergencyBed/>;
                break;
            case "Pulmonology":
                return <FaLungs/>;
                break;
            case "Cardiology":
                return <RiHeartPulseFill/>;
                break;
            default:
                return "no icon"
        }
    }

    return(
        <div className={styles.barbox}>

            <p className={styles.baricon}>{getIcon(name)}</p>

            <div className={styles.barCont}>
                <div className={styles.fill}
                style={{ height: `${activity}%`}}
                ></div>

            </div>
            {
                footer ?   
                    <div className={styles.barInfo}>
                        <p>{activity}%</p>
                        <p>{name}</p>
                    </div> 
                : <></>
            }

           
        </div>
    )
}