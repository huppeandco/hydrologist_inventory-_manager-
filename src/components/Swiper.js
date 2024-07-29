import { useEffect, useState } from "react"
import { EditIcon } from "./widgets";
const sliderData = [
    {
        image: 'https://tearappy.com/wp-content/uploads/2022/08/Banner_1.png',
        title: 'FIND YOUR WATER',
        description: 'Discover & Personalize your drinking experience',
    },
    {
        image: 'https://tearappy.com/wp-content/uploads/2022/08/Banner_2.png',
        title: '#KISSPLASTICGOODBYE',
        description: 'The World needs more kisses and less plastic.',
    },
    {
        image: 'https://tearappy.com/wp-content/uploads/2022/08/Banner_3.png',
        title: 'A WATER, WHICH REMAINS WATER,BUT STILL SO DIFFERENT',
        description: 'NEVAS Water combines the water of two natural springs and thus the best mineralization and taste.',
    },
    {
        image: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2022/08/Banner_4.png',
        title: 'PURE GOLD DELICACY',
        description: 'no preservatives, no coloring, no flavor enhancement - only 2 most basic and',
    },
    {
        image: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2022/08/Banner_5.png',
        title: 'EARTH’S FINEST WATER',
        description: 'Purified by trade winds, and filtered by volcanic rock, it collects in an underground Aquifer, where we bottle it at the source.',
    },
];

export default function ({toggleEditModal, swiperData}) {
    const [slider, setSlider]  = useState(1);
    
 /*    useEffect(() => {
         const interval = setInterval(() => {
             if(slider >= 5 ){ setSlider(1) ;
           
        }
             else {
                setSlider(slider + 1);
               
            }
              
         }, 4500);

         return () => clearInterval(interval);
        
    }, [slider]); */
   
    const handleEdit = () => {
        let content = {
            title: 'Swiper',
            content: 'label x'
        }
        toggleEditModal(content, 'swiper')
    }
    return (
      
        <div className="home-swiper">
            <div style={{position: 'absolute', top: 20, right: 20, zIndex: 18, cursor: 'pointer'}} onClick={handleEdit}>
                <EditIcon size={50}  />
            </div>
            {swiperData?.slides?.map((slide, index) => (
                <div
                    key={index}
                    className={`slider ${slider === index + 1 ? 'active' : ''}`}
                    style={{ backgroundImage: `url('${slide.bg}')` }}
                >
                    <div className="slider-content">
                        <h4 style={{ color: slide.color }}>{slide.title}</h4>
                        <p style={{ color: slide.color }}>{slide.description}</p>
                        <button>shope now</button>
                    </div>
                </div>
            ))}
            <div className="indicator">
            {sliderData.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${slider === index + 1 ? 'on' : ''}`}
                        onClick={() => setSlider(index + 1)}
                    ></div>
                ))}
            </div>
        </div>
    )
}