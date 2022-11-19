import {FaXRay} from "react-icons/fa"
import {TbEmergencyBed} from "react-icons/tb"


export default function ActivityBar({activity, styles, name, footer}) {

    const getIcon = (name) => {
        switch(name){
            case "Radiology":
                return <FaXRay/>;
                break;
            case "Emergency":
                return <TbEmergencyBed/>;
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