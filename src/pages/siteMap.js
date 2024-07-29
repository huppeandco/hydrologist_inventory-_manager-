import { Link } from "react-router-dom";
import { DownArrow, InlineHeader } from "../components/widgets";
import '../css/pages/sitemap.css'
import { useEffect } from "react";
import { useState } from "react";

function SiteMap() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div style={{
            width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column'
        }} className="sitemap">
            <InlineHeader title="Site Map" />
            <div className="site-map-container">
                <Link> HOME </Link>
                <div className="site-map-cats">
                    <h4 onClick={() => setOpen(!open)} > CATEGORIES </h4> <DownArrow />
                    <ul>

                        <li><Link>  BEYOUTY</Link></li>
                        <li><Link>WELL BEING</Link></li>
                        <li><Link> GENESIS WILL</Link></li>
                        <li><Link>   YOUNGSTER</Link></li>
                        <li><Link> FUNCTIONAL DRINKS</Link></li>
                        <li><Link> MOMS-CLUB</Link></li>
                        <li><Link>  MIXOLOGIST</Link></li>
                        <li><Link> B-HEALTHY</Link></li>
                        <li><Link> LEAVES-BEANS</Link></li>
                        <li><Link> ACCESSORIES</Link></li>
                    </ul>
                </div>
                <Link> SHOP </Link>
                <Link> INSIGHTS</Link>
                <Link>OFFERS</Link>
                <Link> ABOUT US</Link>
                <Link>WATER SOMMELIER</Link>
                <Link> EXECUTIVE LOUNGE</Link>
                <Link> BRANDS</Link>
                <Link>  INSIGHTS</Link>
                <Link>OFFERS</Link>
                <Link>   CAREER</Link>
                <Link>   BECOME OUR AFFILIATE</Link>
                <Link> FAQ</Link>
                <Link>  CONTACT</Link>
                <Link>  WHO WE ARE</Link>
                <Link> RETURN POLICY</Link>
                <Link> PRIVACY POLICY</Link>
                <Link> DELIVERY POLICY</Link>
            </div>

        </div>
    )
}


export default SiteMap;