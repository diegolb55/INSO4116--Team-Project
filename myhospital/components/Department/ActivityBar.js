import {FaXRay} from "react-icons/fa"


export default function ActivityBar({activity, styles, name, capacity, length}) {

    const getIcon = (name) => {
        switch(name){
            case "Radiology":
                return <FaXRay/>;
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
                length && capacity ?   
                    <div className={styles.barInfo}>
                        <p>{length} / {capacity}</p>
                        <p>{name}</p>
                    </div> 
                : <></>
            }

           
        </div>
    )
}