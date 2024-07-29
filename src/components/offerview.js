import '../css/component.css';
import imageOne from '../assets/offers/banner-1.jpeg'
import imageTwo from '../assets/offers/banner-2-1.jpeg'
import { EditIcon, OfferComponent } from './widgets';

const offers = [
    {limited: true, title: 'SUMMER HYDRATION', desc: '', footer: 'NATRL WATER 10L', priece: 'AED63.00', image: imageOne, type: 'get'},
    {limited: false, title: '25% OFF EXECUTIVE LOUNGE', desc: 'The aquifer from which the spring flows lies 150 -180 ft below', footer: 'NATRL WATER 10L', priece: 'AED63.00', image: imageTwo, type: 'shope'}
]
function OfferView () {
    return (
        <div className='offer-view'>
           
            {offers.map ((offer, index) => {
                return (
                    <OfferComponent key={index} title={offer.title} 
                                    desc={offer.desc} 
                                    footer={offer.footer}
                                    image={offer.image}
                                    type={offer.type}
                                    priece={offer.priece}
                                    limited={offer.limited}
                                    />
                )
            })}
            <div style={{cursor: 'pointer'}}>
             <EditIcon />
            </div>
        </div>
    )
}

export default OfferView;