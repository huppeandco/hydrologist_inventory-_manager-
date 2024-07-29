import { InlineHeader } from "../components/widgets";
import { images } from "../components/marquee";
import { useEffect } from "react";


function Brands () {
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <div style={{width: '100%'}}>
            <InlineHeader title="Brands"/>
            <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBlock: '2rem'}}>
                {images.map((image) => {
                    return (
                        <img  style={{marginInline: '1rem', height: '200px', width: 'auto'}} src={image}/>
                    )
                })}
            </div>
        </div>
    )
}


export default Brands;