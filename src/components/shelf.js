import '../css/component.css'
import Image1 from '../assets/shelf/mixilogist/gold-emotion.png';
import Image2 from '../assets/shelf/mixilogist/martini-rose-non-alcoholic-premium.png';
import Image3 from '../assets/shelf/mixilogist/memento.png';
import Image4 from '../assets/shelf/mixilogist/Vintense-Cuvee-Prestige.png'
import Image5 from '../assets/shelf/mixilogist/Vintense-Cuvee-Prestige.png'
import Image6 from '../assets/shelf/youngster/al-ain-bambni.png'
import Image7 from '../assets/shelf/youngster/azzurra.png'
import Image8 from '../assets/shelf/youngster/highland-spring.png'
import Image9 from '../assets/shelf/youngster/wildnap-baby.png'
import Image10 from '../assets/shelf/youngster/zevia-kidz.png'
import Image101 from '../assets/shelf/wellbeing/Franklin-_-Sons-Ginger-Ale.png'
import Image11 from '../assets/shelf/wellbeing/Soylent-Meal-Replacement.png'
import Image12 from '../assets/shelf/wellbeing/oxygizer.png';
import Image13 from '../assets/shelf/wellbeing/pocari-sweat.png';
import Image14 from '../assets/shelf/wellbeing/vitamin-well.png';
import Image15 from '../assets/shelf/gensiswell/90h20-1.png';
import Image16 from '../assets/shelf/gensiswell/addwater.png';
import Image17 from '../assets/shelf/gensiswell/alitasa.png';
import Image18 from '../assets/shelf/gensiswell/antipodes.png';
import Image19 from '../assets/shelf/gensiswell/aqua-premium.png';
import Image20 from '../assets/shelf/gensiswell/aquafina.png';
import Image21 from '../assets/shelf/gensiswell/artic-silent.png';
import Image22 from '../assets/shelf/gensiswell/fiji.png';
import Image23 from '../assets/shelf/gensiswell/fiuggi.png';
import Image24 from '../assets/shelf/gensiswell/haage.png';
import Image25 from '../assets/shelf/gensiswell/lamate.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-reveal';
import axios from 'axios';
import 'swiper/css';
import DraggableSlider from './slider';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const cats = ['YOUNGSTER', 'well-being', 'mixologist', 'gensis-well', 'mom-club', 'leaves-beans', 'functional-drinks', 'essentials', 'be-youty', 'B-HEALTHY'];
/* const imgs = [
    { img: Image1, type: 'mixologist' },
    { img: Image2, type: 'mixologist' },
    { img: Image3, type: 'mixologist' },
    { img: Image4, type: 'mixologist' },
    { img: Image5, type: 'mixologist' },
    { img: Image6, type: 'YOUNGSTER' },
    { img: Image7, type: 'YOUNGSTER' },
    { img: Image8, type: 'YOUNGSTER' },
    { img: Image9, type: 'YOUNGSTER' },
    { img: Image10, type: 'YOUNGSTER' },
    { img: Image11, type: 'well-being' },
    { img: Image11, type: 'well-being' },
    { img: Image11, type: 'well-being' },
    { img: Image12, type: 'well-being' },
    { img: Image13, type: 'well-being' },
    { img: Image14, type: 'well-being' },
    { img: Image101, type: 'well-being' },
    { img: Image16, type: 'gensis-well' },
    { img: Image17, type: 'gensis-well' },
    { img: Image18, type: 'gensis-well' },
    { img: Image19, type: 'gensis-well' },
    { img: Image20, type: 'gensis-well' },
    { img: Image21, type: 'gensis-well' },
    { img: Image22, type: 'gensis-well' },
    { img: Image23, type: 'gensis-well' },
    { img: Image24, type: 'gensis-well' },
    { img: Image25, type: 'gensis-well' },


] */

function Shelf() {
    const navigator = useNavigate();
    const [visible, setVisible ] = useState(false);
    const [ data, setData ] = useState([]);
    const [ref, inView ] = useInView();
    const [selectedImage, setSelectedImage ] = useState(-2);
    const ref2 = useRef()
    

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await axios.get('https://thehydrologist.com/get-all-products.php');
            const allProducts = response.data;
            return allProducts;
          } catch (error) {
            throw error;
          }
        }
      
       if(inView) {
          fetchProducts()
          .then((products) => {
             // Log the JavaScript object
            
            setData(products);
       
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
          
       }
      }, [inView]);
    const navigate = (img, id, index) => {
      /*  setSelectedImage(index) */
       
      
        setTimeout(() => {
            navigator(`/product?img=${img}&&id=${id}`)
        }, 0);
    }
    return (
        <div className='shelf-container' ref={ref}>
            <h2>HYDRO LIBRARY</h2>
            <div className='shelf'>

                {cats.map((cat, index) => {
                    return (
                        <div className='shelf-part' key={index}>
                            <div className='shelf-headers'>
                                <h2>{cat}</h2>
                                <p>5 products</p>
                            </div>
                            <Swiper
                                 spaceBetween={0}
                                 slidesPerView={4}
                                 loop={true}
                                 autoplay={{ delay: 1500 }}
                                 style={{ paddingTop: 30 }}
                                 pagination
                            >
                                {data?.map((item, index) => {
                                    return (
                                        item?.category == cat ? (
                                            <SwiperSlide style={{ width: 30 }} key={index}>
                                                <div onClick={() => navigate(item?.image, item.id, index)}>
                                                   <Fade top> <div><img style={{transform:  index == selectedImage ? 'scale(3)' : '' }}  onLoad={() => setVisible(!visible)}  width={60} height={'auto'} src={item?.image} /> </div> </Fade>
                                                    {/*  <div style={{display: visible ? 'none': 'block'}} class="spinner-loader"></div> */}
                                                </div>
                                            </SwiperSlide>) : (<></>)
                                    )
                                })}

                            </Swiper>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


/* <div className='shelf-part'>
<div className='shelf-headers'>
    <h2>YOUNGSTER</h2>
    <p>5 products</p>
</div>
<div className='shelf-wrapper'>
    <img src={Image1} />
    <img src={Image2} />
    <img src={Image3}/>

</div>
</div> */

export default Shelf;