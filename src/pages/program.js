import { useEffect } from "react";
import { InlineHeader } from "../components/widgets";



function Program () {
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <InlineHeader title="Loyalty Program" />
            <p style={{maxWidth: '60%', marginBlock: '4rem'}}>Introducing Hydrologist all new Loyalty Program. Now get rewarded every time you shop with us. Happy Shopping!<br />

Please note that Loyalty discounts are applicable on pre-paid orders only. Any cancelled orders will not be considered for Loyalty offers.</p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexWrap: 'wrap', width: '70%', flexDirection: 'column'}}>
            <h1 style={{ width: '100%', textAlign: 'left'}}>Available offers</h1>
          <div style={{alignItems: 'center', justifyContent:'center', flexWrap: 'wrap', width: '100%'}}>
            {Array.from({ length: 20 }).map(() => {
                return (
                    <img style={{margin: '2rem'}}  src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/Bisleri-offer-.png" />
                )
            })}

          </div>
        </div>
        </div>
    )
}

export default Program;