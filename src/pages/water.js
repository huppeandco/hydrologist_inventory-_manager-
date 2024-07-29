import { useEffect } from "react";
import { InlineHeader } from "../components/widgets";


function Water () {
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    return (
        <div style={{width:'100%'}}>
            <InlineHeader title="Water sommelier" />
        </div>
    )
}


export default Water;