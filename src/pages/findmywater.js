import { useEffect } from "react";
import Iframe from "react-iframe";

function FindMyWater () {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <Iframe className="fmy-fram" src="https://tearappy.com/wp-content/reactpress/apps/findyourwater/build/"></Iframe>
    )
}


export default FindMyWater;