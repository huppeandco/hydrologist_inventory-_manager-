import { useContext, useEffect, useState } from "react"
import { DataContext } from "./data";

const MenuIcon = ({ onClick }) => {
    return (
        <svg
            onClick={onClick}
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#858585"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                    fill="#858585"
                ></path>
                <path
                    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                    fill="#858585"
                ></path>
                <path
                    d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                    fill="#858585"
                ></path>
            </g>
        </svg>
    );
};
export default function Orders({ type, status }) {

    const [orders, setOrders] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const { getOrders } = useContext(DataContext);



    useEffect(() => {

        if (!dataFetched) {
            (async () => {
                try {
                    const data = await getOrders(status);
                    const valuesArray = Object.values(data);
                    console.log(valuesArray);
                    setOrders(valuesArray)
                    setDataFetched(true);
                } catch (error) {
                    console.error("Error fetching orders:", error);
                }
            })();
        }

    }, [])
    useEffect(() => {

        console.log(orders)
    }, [Orders])

    function OrderItem({ item, index }) {
        const [mOpen, setMOpen] = useState(false);
        return (
            <div key={index} className="display-order-item" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 9px 1px', width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 15, paddingLeft: 35, padding: 13, borderRadius: 2, marginRight: 20, boxSizing: 'border-box', textAlign: 'left' }}>
                <div style={{ marginRight: 15 }}>
                    <p>order:</p>
                    <p>{item?.order[0]?.productName}</p>

                </div>
                <div style={{ marginRight: 15, display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ border: '1px solid rgb(204 204 204)', borderRadius: 8, padding: 3 }}>
                        {
                            item?.order?.slice(0, 3).map((pimage, index) => <img key={index} src={pimage.productImage} style={{ width: 24, objectFit: 'contain' }} />)
                        }

                    </div>
                    {/*  <img src={item?.order[0]?.productImage || 'https://billpay.slu.edu/C20197_ustores/web/images/product-default-image.png'} style={{ width: 50, objectFit: 'contain' }} /> */}

                </div>
                <div style={{ marginRight: 15 }}>
                    <p>user:</p>
                    <p>{item.name}</p>

                </div>
                <div>
                    <p>status:</p>
                    <p>{item.status}</p>

                </div>
                <div style={{ flex: .3, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', cursor: 'pointer' }}>
                    {mOpen ?
                        <div className="m-menu">
                            <p > View order</p>
                            <p > track order </p>
                            <p > make shift belive  </p>
                        </div>
                        :
                        <>
                            <MenuIcon onClick={() => setMOpen(true)} />
                        </>
                    }

                </div>
            </div>
        )
    }
    return (
        <div className="display-orders">
            {orders?.length > 0 ?
                <div style={{ width: '100%', display: 'flex', textAlign: 'left', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>

                    {
                        orders.map((item, index) => {
                            return (
                                <OrderItem item={item} index={index} />
                            )
                        })
                    }
                </div>
                :
                <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="rect-loader"></div>
                    ))}
                </div>
            }
        </div>
    )
}