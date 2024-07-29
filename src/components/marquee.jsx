import '../css/component.css';
import Image1 from '../assets/marquee/Brands-10.png'
import Image2 from '../assets/marquee/Brands-11.png'
import Image3 from '../assets/marquee/Brands-14.png'
import Image4 from '../assets/marquee/Brands-15.png'
import Image5 from '../assets/marquee/Brands-16.png'
import Image6 from '../assets/marquee/Brands-17.png'
import Image7 from '../assets/marquee/Brands-18.png'
import Image8 from '../assets/marquee/Brands-41.png'
import Image9 from '../assets/marquee/Brands-42.png'
import Image10 from '../assets/marquee/Brands-43.png'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Marquee from "react-fast-marquee";



export const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10 ]

function ImageMarquee () {
    /* const Ref  = useRef(null);
   
    let distance = -90;
    useEffect(() => {
        const element = Ref.current;
        const interval = setInterval(() => {
            
            if(distance < -1260 ) {
                distance = distance - 90
            } else {

                distance = distance - 90
            }
            element.style.transform = `translateX(${distance}px)`
          }, 2000);
      return () => clearInterval(interval);
    }, []); */
    
    return (
        <div  className='images-marquee'>
            <div className='images-marquee-container' style={{transform: 'unset'}}>
                {/* <div className='images-marquee-warpper'ref={Ref}></div> */}
                <Marquee pauseOnHover>
                    {images.map((image, index) => {
                        return (
                            <img key={index} className='marquee-image' src={image} />
                        )
                    })}
                </Marquee>
                
            </div>
        </div>
    )
}


export default ImageMarquee;