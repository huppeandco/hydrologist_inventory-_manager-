import { useEffect, useState } from "react";
import { InlineHeader, OfferComponent } from "../components/widgets";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const imageOne = 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/W1.jpg';
const imageTwo = 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/W2.jpg'
const offers = [
    {limited: true, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageOne, type: 'get', dark: false},
    {limited: false, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageTwo, type: 'get', dark: true},
    {limited: true, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageOne, type: 'get', dark: false},
    {limited: false, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageTwo, type: 'get', dark: true},
    {limited: true, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageOne, type: 'get', dark: false},
    {limited: false, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: '', priece: '', image: imageTwo, type: 'get', dark: true},
    
]





function Offers () {
    const [pageData, setPageData] = useState([]);
    const getAllData = async () => {
        try {
            const response = await axios.get('https://thehydrologist.com/api/get-all-offers.php', {
               
            });
            setPageData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error retrieving page data:', error);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        getAllData();
    }, []);
    const navigation = useNavigate();
    return (
        <div className="offers-container" >
            <InlineHeader title="Offers" />
            <div >
             {pageData ? 
             <>
              {pageData?.map ((offer) => {
                return (
                    <OfferComponent title={offer.title} 
                                    desc={offer.description} 
                                    footer={offer.footer}
                                    image={offer.image}
                                    type={offer.type}
                                    priece={offer.priece}
                                    limited={offer.limited}
                                    dark={offer.dark}
                                   id={offer.id}/>
                )
            })}
            
             </> : 
             <h1>😭 sorry no offers</h1> 
             }

            </div>
            
        </div>
    )
}


export default Offers;