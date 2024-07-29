import { useEffect } from "react";
import { InlineHeader } from "../components/widgets";

function Item ({title, p}) {
    return(
        <>
       <li><h5 style={{width: '100%', textAlign: 'left', fontSize: '24px', marginBottom: '0px'}}>{title}</h5></li> 
        <p style={{maxWidth: '400px', textAlign: 'left', color: '#7E7E7E'}}>{p}</p>
        </>
    )
}

const items = [
    {title: 'Client preps recyclables', p: 'Client cleans and sorts his used bottles and places them outside his door.'},
    {title: 'Delivery + Pickup', p: 'Recyclable bottles are collected during future deliveries.'},
    {title: 'Hydrocoins reward', p: 'Deposited into the users account.'},
    {title: 'Collection', p: '3rd party collects bottles for recycling.'},
    {title: 'Reorder', p: 'Client reorders using hydrocoins'},
]

function Recycling () {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div style={{display:'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <InlineHeader title="Recycling" />
            <div className="flex-colum-sm-sc" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <ol>
                    {items.map((item) => {
                        return(
                            <Item title={item.title} p={item.p} />
                        )
                    })}
                    </ol>
                    
                </div>
                <div style={{flex: 1}}>
                    <img style={{width: '100%', height: 'auto'}} src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-27-at-2.24.09-PM.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Recycling;