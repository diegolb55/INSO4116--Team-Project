import { useState } from "react"
import Image from "next/image";

export default function CustomImage({alt, ...props}){
    const [src, setSrc] = useState(props.src);

    return (
        <div style={{position:"relative", width:"100vw", height:200, opacity:.7}}>
            <Image 
                {...props}
                src={src}
                alt={alt} // to fix lint warning
                onError={() => setSrc("/images/noImage.png")}
                placeholder="blur"
                blurDataURL="/images/noImage.png"
                
            />
        </div>
    )
}