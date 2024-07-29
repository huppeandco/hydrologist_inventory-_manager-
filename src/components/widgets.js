import '../css/widgets.css';
import imageOne from '../assets/widgets/banner_blue.jpg'
import { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from "react-intersection-observer";
import { Slide, Fade } from 'react-reveal';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide  } from 'swiper/react';
import Eu from '../assets/currency/eu.svg';
import Uae from '../assets/currency/ae.svg';
import Us from '../assets/currency/us.svg';
import { Link, useNavigate } from 'react-router-dom';
import ar from '../assets/langs/ar.svg';
import eng from '../assets/langs/en.svg';
import fr from '../assets/langs/fr.svg';
import ru from '../assets/langs/ru.svg';
import es from '../assets/langs/es.svg';
import 'swiper/css';
import { useContext } from 'react';
import { LangContext } from '../data/lang';

export function FywWidget ({toggleEditModal, fywData}) {

    const handleEdit = () => {
        let content = {
            title: 'banner',
            content: 'label x'
        }
        toggleEditModal(content, 'fyw')
    }
    return (
        <div className='fyw-widget'>
            <div className='fyw-container' style={{backgroundImage:`url(${fywData?.bg})`}}>
            <div style={{alignSelf: 'flex-end', cursor: 'pointer'}} onClick={handleEdit}>
                <EditIcon />
            </div>
            <Fade bottom duration={1000}>
            <WaterBottle width='60px' height='60px' />
            </Fade>
            <Slide bottom duration={1000}>
            <h4>{fywData?.title}</h4>
            <p>{fywData?.text} </p>
            </Slide>
            <Slide left duration={1000}>
            <a>TRY NOW</a>
            </Slide>
            </div>
        </div>
    )
}

export function WaterBottle ({width, height}) {
    return (
        <svg width={width} height={height} className="milk-bottle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 51">
            <defs>
                <mask id="milk-mask">
                    <rect className="mask-rect" x="477" y="108" width="15" height="40" transform="rotate(-180 247.5 78.5)" fill="#ffffff"></rect>
                </mask>
            </defs>
            <path className="bottle" d="M19 21.1L15 8.74V6a2.3 2.3 0 0 0-.14-.9 1.54 1.54 0 0 0 .14-.65V3c0-.85-.35-1.5-1.19-1.5H7.86C7.02 1.5 6 2.15 6 3v1.47a1.55 1.55 0 0 0 .22.79 1.32 1.32 0 0 0-.22.76v2.72L2 21.09a12.12 12.12 0 0 0-.51 3.21v22.1a3.29 3.29 0 0 0 3.15 3.1h12a2.92 2.92 0 0 0 2.85-3.1V24.3a12.14 12.14 0 0 0-.49-3.2zM7.69 3h5.81v1.47a3.12 3.12 0 0 0 .31.08h-.08l-6-.05zM18 46.4a1.63 1.63 0 0 1-1.4 1.58H4.65C3.93 47.98 3 46.85 3 46.4V24.3a11 11 0 0 1 .61-2.73L7.72 9.1l.08-3a3.72 3.72 0 0 1 .88-.06h4.82v2.79l4.06 12.71a10.67 10.67 0 0 1 .44 2.73z" fill="#fff"></path>
            <path className="milk" mask="url(#milk-mask)" d="M4.5 46.5v-23l4-14h4l4 14v23" fill="white"></path>
        </svg>
    )
}




export function NumberPlus({ value, plus, color, size, start }) {
  let fontSize = size === 'big' ? '4.5rem' : '3rem';
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (start && counter < value) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [counter, value, start]);

  return (
    <div style={{ marginBlock: 0 }}>
      <p style={{ color: color, fontSize, fontWeight: 'bolder', marginBlock: '0rem' }}>
        {counter}
        {plus ? '+' : ''}
      </p>
    </div>
  );
}



export function NumberView () {
    const image1 = 'data:image/png;base64,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'
    const image2 = 'data:image/png;base64,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'
    const image3 = 'data:image/png;base64,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'
    const image4 = 'data:image/png;base64,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'
    const [start, setStart ] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true
    });
    useEffect(() => {
       
        if(inView) {
            setStart(true);
        }
    }, [inView])

    return (
        <div className='number_view'>
            <div className='number_view-container' ref={ref}>
                <div className='number_view-element'>
                    <img  src={image1} /> 
                    <NumberPlus start={start} value={100} size='big' color='#9EE5C5' plus={true} />
                    <p>WIDERANGE OF PRODUCTS</p>
                    <div style={{cursor: 'pointer'}}>
                        <PenIcon size="21px" />
                    </div>
                </div>
                <div className='number_view-element'>
                    <img  src={image2} /> 
                    <NumberPlus start={start} value={60} size='big' color='#9EE5C5' plus={true} />
                    <p>ASSOCIATED BRANDS</p>
                    <div style={{cursor: 'pointer'}}>
                        <PenIcon size="21px" />
                    </div>
                </div>
                <div className='number_view-element'>
                    <img  src={image3} /> 
                    <NumberPlus start={start} value={456} size='big' color='#9EE5C5' plus={false} />
                    <p>UNITS SHIPPED</p>
                    <div style={{cursor: 'pointer'}}>
                        <PenIcon size="21px" />
                    </div>
                </div>
                <div className='number_view-element'>
                    <img src={image4} /> 
                    <NumberPlus start={start} value={30} size='big' color='#9EE5C5' plus={false} />
                    <p>PLASTIC BOTTLE</p>
                    <div style={{cursor: 'pointer'}}>
                        <PenIcon size="21px" />
                    </div>
                </div>
            </div>
        </div>
    )
}


/* export function Testimonial () {
    const [slider, setSlider ] = useState(1);
    const [testi, setTesti ] = useState([
        {testi: 'Amazing product. The results are so transformative in texture and my face feels plump and healthy.', name: 'KATHLEEN LEE'},
        {testi: 'Commodo aute nulla ccaecat ea et dolor id ipsum irure laboris et fugiat ad excepteur consectetur nulla. Irure eu dolore labore ad magna labore ad commodo sint deserunt nostrud. .', name: 'KAREN LEE'},
        {testi: 'Ad ex enim sunt nostrud aute aliquip ut id nostrud proident fugiat do.', name: 'JAMMY NEUTRON'},
        {testi: 'Exercitation elit consequat veniam do fugiat est laborum exercitation reprehenderit adipisicing aliquip Lorem non amet.', name: 'MOUTIN DU'},

    ])
   
    const handleSwiper = (d) => {
       

        if (d == 'l') setSlider(slider + 1);
        else setSlider(slider - 1)
    }
    return (
        <div className='testimonial'>
            <div className='testimonial_container'>
                <h4> TESTIMONIALS </h4>
                <div  style={{height: '40vh', cursor: 'pointer'}} >
                    <Swiper 
                     slidesPerView={1}
                     loop={true}
                     navigation={{
                       nextEl: '.right-a',
                       prevEl: '.left-a',
                     }}
                     pagination={{
                       el: '.swiper-pagination',
                       clickable: true,
                     }}>
                        {
                            testi.map((t, index) => {
                                return(
                                 <SwiperSlide key={index}>
                                        <div>
                                            <img src='https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/11/testimonial-12-1.png' />
                                            <p> ‟ {t.testi} “</p>
                                        
                                            <p>{t.name}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        
                        <div className='left-a' onClick={() => handleSwiper('l')}>
                            ←
                        </div>
                        <div className='right-a' onClick={() => handleSwiper('r')}>
                            →
                        </div>
                    </Swiper>
                    </div>
            </div>
               <div className='left-a' onClick={() => handleSwiper('l')}> ← </div>
                <div className='right-a' onClick={() => handleSwiper('r')}>→</div> 
           
        </div>
    )
} */


export const Testimonial = ({ items, toggleEditModal, txtData  }) => {
 
  const testi = [
    {testi: 'Amazing product. The results are so transformative in texture and my face feels plump and healthy.', name: 'KATHLEEN LEE'},
    {testi: 'Commodo aute nulla ccaecat ea et dolor id ipsum irure laboris et fugiat ad excepteur consectetur nulla. Irure eu dolore labore ad magna labore ad commodo sint deserunt nostrud. .', name: 'KAREN LEE'},
    {testi: 'Ad ex enim sunt nostrud aute aliquip ut id nostrud proident fugiat do.', name: 'JAMMY NEUTRON'},
    {testi: 'Exercitation elit consequat veniam do fugiat est laborum exercitation reprehenderit adipisicing aliquip Lorem non amet.', name: 'MOUTIN DU'},

]


const handleEdit = () => {
    let content = {
        title: 'testimonial',
        content: 'label x'
    }
    toggleEditModal(content, 'testimonials')
    
}


  
  return (
    <div className='testimonial'>
         <h4> TESTIMONIALS </h4>
        <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', top: 20, right: 20, zIndex: 18, cursor: 'pointer'}} onClick={handleEdit}>
                <EditIcon size={50}  />
        </div>
        <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            style={{padding: '3rem', paddingBottom: '5rem'}}
            pagination={{ clickable: true }}
            autoplay
            >
        {txtData?.map((item, index) => (
            <SwiperSlide key={index}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <img src='https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/11/testimonial-12-1.png' />
                    <p style={{maxWidth: '600px', alignSelf: 'center'}}> ‟ {item.title} “</p>
                
                    <p>{item.author}</p>
                </div>
            </SwiperSlide>
        ))}
        {/*  <div className="swiper-button-next"><span style={{fontSize: '4rem'}}>→</span></div>
         <div className="swiper-button-prev"><span style={{fontSize: '4rem'}}>←</span></div> */}
    </Swiper>
        </div>
    </div>
  );
};






export function InsightsComponent ({data, title, toggleEditModal}) {
    const handleEdit = () => {
        let content = {
            title: 'Swiper',
            content: 'label x'
        }
        toggleEditModal(content, 'insights')
    }
    return (
        <div className='insights'>
            {title ? (<h2>{title}</h2>) : (<></>)}
            <div className='insights_wrapper'>
                {data?.map((element, index) => {
                    return(
                        <div className='insight-element' key={index}> 
                            {/* <a><div  className='flare' style={{ backgroundImage: `url('${element.img}')`, width: '300px', height: '300px', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div></a> */}
                            <div className='flare'></div>
                            <Link to={element.url}>
                                <img src={element.img} />
                            </Link>
                            <time> { element.date}</time>
                            <Link to={element.url}>
                            <h4>{element.title}</h4>
                            <p>Read more </p>
                            </Link>
                        </div>
                    )
                })}
                <div onClick={handleEdit} style={{position: 'absolute', bottom: '30%', right: "30%", cursor: 'pointer'}}>
                    <AddIcon />
                </div>
            </div>
        </div>
    )
}

export function InlineHeader ({title, children, DontshowTitle}) {
    return (
        <div style={{width: '100%', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0693e3', paddingBlock: '2rem'}}>
            {!DontshowTitle && <h1 style={{ fontSize: '2.5rem', color: 'white', fontWeight: 'lighter'}}>{title}</h1>}
            {children}
        </div>
    )
}

function SettingIcon () {
    return (
        <svg width="20px" height="20px" viewBox="0 -3.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>settings [#1389]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -760.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M53.5,603 C53.5,602.647 53.5756,602 53.6932,602 L43,602 L43,604 L53.6932,604 C53.5756,604 53.5,603.353 53.5,603 L53.5,603 Z M61.7068,602 C61.27315,601 60.1192,600 58.75,600 C57.01015,600 55.6,601.343 55.6,603 C55.6,604.657 57.01015,606 58.75,606 C60.1192,606 61.27315,605 61.7068,604 L64,604 L64,602 L61.7068,602 Z M53.5,611 C53.5,611.353 53.4244,611.686 53.3068,612 L64,612 L64,610 L53.3068,610 C53.4244,610 53.5,610.647 53.5,611 L53.5,611 Z M51.4,611 C51.4,612.657 49.98985,614 48.25,614 C46.8808,614 45.72685,613 45.2932,612 L43,612 L43,610 L45.2932,610 C45.72685,609 46.8808,608 48.25,608 C49.98985,608 51.4,609.343 51.4,611 L51.4,611 Z" id="settings-[#1389]"> </path> </g> </g> </g> </g></svg>
    )
}

export function FilterBy () {
    const [open, setOpen] = useState(false)
    return (
        <div className='filter-by'>
            <div className='filter-by_wrapper'>
                <div className='filter-by-btn' onClick={() => setOpen(!open)}>
                    <SettingIcon />
                    <h4> Filter </h4>
                </div>
                <div className={`${open ? "filter-by-filters filter-by-open" : "filter-by-filters"}`}>
                    <div>
                   <h5>Sort by</h5> 
                        <button> Sort by popularity</button>
                        <button>Sort by average rating</button>
                        <button>Sort by latest</button>
                        <button>Sort by price: low to high</button>
                        <button>Sort by price: high to low</button>
                    </div>
                    <div>
                   <h5> Filter by price</h5>
                   <button> All</button>
                   <button>AED 0.00 - AED 350.00</button>
                    <button>    AED 350.00 - AED 700.00</button>
                   <button>  AED 700.00 - AED 1,050.00</button>
                   <button> AED 1,050.00 - AED 1,400.00</button>
                   <button> AED 1,400.00 - AED 1,750.00</button>
                   <button>  AED 1,750.00 +</button>
                    </div>
                    <div>
                    <h5>Product categories</h5>
                    <button>ALL CATEGORY</button>
                    <button>ACCESSORIES0</button>
                    <button>B-HEALTHY0</button>
                    <button>BEYOUTY0</button>
                    <button>ESSENTIALS0</button>
                    <button>FUNCTIONAL DRINKS0</button>
                    <button>GENESIS WILL35</button>
                    <button>LEAVES & BEANS0</button>
                    <button>MIXOLOGIST6</button>
                    <button>MOM'S CLUB0</button>
                    <button>UNCATEGORIZED34</button>
                    <button>WELL BEING6</button>
                    <button>YOUNGSTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
} ;





export const Paginations = ({ currentPage, totalPages, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState(5);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  let pages = [];

  if (totalPages <= visiblePages) {
    pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  } else {
    const leftOffset = Math.floor(visiblePages / 3);
    const rightOffset = visiblePages % 2 === 0 ? leftOffset - 1 : leftOffset;

    let startPage = currentPage - leftOffset;
    let endPage = currentPage + rightOffset;

    if (startPage <= 0) {
      endPage += Math.abs(startPage) + 1;
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }

    pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage);

    if (startPage !== 1) {
      pages.unshift(1, '...');
    }

    if (endPage !== totalPages) {
      pages.push('...', totalPages);
    }
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => handlePageChange(page)}
        >
          {currentPage === page ? `${page}` : page}
        </button>
      ))}
    </div>
  );
};

export function DefaulBtn ({title, noCap, styles, secondary, onpress}) {
    let theme = secondary ? 'secondary' : 'primary';
    return (
        <button onClick={onpress} className={`default-btn ${theme}`} style={{...styles,textTransform: noCap ? 'none' : 'uppercase'}}>{title}</button>
    )
}

export function OfferComponent ({title, desc, type, footer, priece, image, limited, dark, id }) {
   const navigation = useNavigate();
    return ( 
        <Fade bottom>
            <Link to={`/updateoffer?id=${id}&title=${title}&desc=${desc}&type=${type}&footer=${footer}&priece=${priece}&image=${image}&limited=${limited}&dark={dark}`}>
        <div className='offer-wrapper' >
            <div className='bg-img' style={{backgroundImage:`url(${image})`}}></div>
            <div className='offer-txt' >
            {limited ? <h5> limited offer</h5> : <></>}
                
                <h2 style={{color: dark ? 'white': 'black'}}>{title}</h2>
                <p style={{color: dark ? 'white': 'black'}}>{desc}</p>
                <DefaulBtn title={ type == 'get' ? 'GET NOW' : 'SHOPE NOW'} />
                <div> 
                    <p> {footer}</p>
                    <p>{priece}</p>
                </div>
            </div>
        </div>
        </Link>
        </Fade>
    )
}

export function EyeOfTruth ({size}) {
    return (
        <svg fill="#363636" width={size || "30px" } height={size || "30px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#363636"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.062,11.346a.99.99,0,0,1,0-.691C3.773,6,7.674,3,12,3s8.227,3,9.938,7.655a.987.987,0,0,1,0,.69,13.339,13.339,0,0,1-1.08,2.264,1,1,0,1,1-1.715-1.028A11.3,11.3,0,0,0,19.928,11C18.451,7.343,15.373,5,12,5S5.549,7.343,4.072,11a9.315,9.315,0,0,0,6.167,5.787,1,1,0,0,1-.478,1.942A11.393,11.393,0,0,1,2.062,11.346ZM16,11a4,4,0,0,0-5.577-3.675,1.5,1.5,0,1,1-2.1,2.1A4,4,0,1,0,16,11Zm1.5,10a1,1,0,0,0,1-1V18.5H20a1,1,0,0,0,0-2H18.5V15a1,1,0,0,0-2,0v1.5H15a1,1,0,0,0,0,2h1.5V20A1,1,0,0,0,17.5,21Z"></path></g></svg>
    )
}

export function DownArrow ({size, color, transform}) {
    return (
        <svg style={{transform: transform ? transform : ''}} width={size || "15px"} height={size || "15px"} viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill={color || "#000000"}></path></g></svg>
    )
}
export function RightArrow () {
    return (
        <svg width="8px" height="8px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#757575" stroke="#757575"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path></g></svg>
    )
}

export function Loader ({style}) {
    return (
        <svg style={style} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3L12 6" stroke="#000000" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"></path> <path d="M21 12L18 12" stroke="#000000" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"></path> <path d="M12 21L12 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 12L6 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5.63586 5.63605L7.75718 7.75737" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.3639 5.63605L16.2426 7.75737" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.3641 18.3639L16.2428 16.2426" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5.63623 18.3639L7.75755 16.2426" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}



export function CurrencySelector () {
    const [active, setActive ] = useState(false);
    const [currancy, setCurrncy ] = useState('ae');
    const [text, setText ] = useState('United Arab Emirates Dirham AED');
    const [flag, setFlag ] = useState(Uae);
    useEffect(() => {
        switch(currancy){
            case 'ae':
                setText('United Arab Emirates Dirham AED');
                setFlag(Uae);
                break;
            case 'us':
                setText('united State Dollar USD');
                setFlag(Us);
                break;
            case 'eu':
                setText('Euro');
                setFlag(Eu);
                break;
           


        } 
    }, [currancy])

    return (
        <div className={`currancy-selector ${active ? 'active': ''}`}>
           <img src={flag} /> <p onClick={() =>  setActive(!active)}>{text} <DownArrow /></p> 
           <ul>
            <li onClick={() => {setCurrncy('ae'); setActive(false)}}> <img src={Uae} /> <p>United Arab Emirates Dirham AED</p></li>
            <li onClick={() => {setCurrncy('us'); setActive(false)}}> <img src={Us} /> <p>united State Dollar USD</p></li>
            <li onClick={() => {setCurrncy('eu'); setActive(false)}}> <img src={Eu} /> <p>Euro </p></li>
          </ul>             
        </div>
    )
}



export function SkeletonTxtLoader () {
    return (
        <div className='skeleton-txt-loader'>
            <div></div>
            <div></div>
        </div>
    )
}
export function SkeletonEditLoader () {
    return (
        <div className='skeleton-edit-loader'>
            <div></div>
            <div></div>
        </div>
    )
}











export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
    console.log('Rating:', index);
  };

  const renderStars = () => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const filled = i <= (hoveredRating || rating);
      stars.push(
        <span
          key={i}
          className={`star ${filled ? 'filled' : ''}`}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
        ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="star-rating">
    
      <div className="stars">{renderStars()}</div>
    </div>
  );
};

export default StarRating;


export function SvgMenu ({className, toggle}) {
    return (
        <svg onClick={toggle} className={className} width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}

export const StarIcon = ({fill}) => {
    return (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
          stroke="#000000"
          fill={fill ? "#000000" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  

export function InputPlus ({count, IncressCount, DisgressCount}) {
   
    return (
        <div className='input-plus'>
            <button onClick={IncressCount}>+</button>
            <input type="number" value={count}/>
            <button onClick={DisgressCount}>-</button>
        </div>
    )
}


export function HomeIcon ({size, opation, color, move}) {
    return(
    opation == 1 ? 
    
       (
        <svg style={{marginRight: '.3rem', transform: 'translateY(-5px)'}} width={size || "24px"} height={size || "24px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5 3H16C15.7239 3 15.5 3.22386 15.5 3.5V3.55891L19 6.35891V3.5C19 3.22386 18.7762 3 18.5 3Z" fill="#5c5c5c"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z" fill="#5c5c5c"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5ZM12.0494 13.25C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827C15.75 16.8679 15.75 16.9091 15.75 16.9506L15.75 21.25H14.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494Z" fill="#5c5c5c"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z" fill="#5c5c5c"></path> </g></svg>
        )
       :
       (
        <svg fill={color ||"#000000"}  style={{marginRight: '-.3rem', transform: `translateY(${move}px)`}} width={size ||"24px"} height={size ||"24px"} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"></path></g></svg>
       )
    )
}

export function LoginIcon () {
    return(
        <svg style={{cursor: 'pointer'}} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M11 16L15 12M15 12L11 8M15 12H3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}


export function Langs () {
    const setAppLang = useContext(LangContext).setLang;
    const [ active, setActive ] = useState(false);
    const [lang, setLang ] = useState('English');
    const [flag, setFlag ] = useState(eng);


    return (
        <div className={`lang-settings ${active ? 'active' : ''}`}>
           <ul>
            <li>
                <div onClick={() => {setLang('Arabic'); setFlag(ar); setActive(false)}}> 
                <img src={ar} /> 
                <p>Arabic</p>
                </div>
            </li>
            <li>
                <div onClick={() => {setLang('french'); setFlag(fr); setActive(false); setAppLang('fr')}}>
                <img src={fr} /> 
                <p>french</p>
                </div>
            </li>
            <li>
                <div onClick={() => {setLang('Russian'); setFlag(ru); setActive(false)}}>
                <img src={ru} />
                <p>Russian</p> 
                </div>
            </li>
            <li>
                <div onClick={() => {setLang('Espain'); setFlag(es); setActive(false)}}>
                <img src={es} />
                <p>Espain</p> 
                </div>
            </li>
            <li>
                <div onClick={() => {setLang('English'); setFlag(eng); setActive(false); setAppLang('eng')}}>
                <img src={eng} />
                <p>Espain</p> 
                </div>
            </li>
           </ul>
            <div onClick={() => setActive(!active)}> 
                <p>{lang}</p>
                <img src={flag} />
            </div>
            
            
        </div>
    )
}


export function EditIcon ({color, size}) {
    return (
        <svg  width={size || "64px"} height={size || "64px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke={color || "#9e9e9e"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke={color || "#9e9e9e"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
       
    )
}

export function AddIcon () {
    return (
        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8c8c8c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
    )
}



export function PenIcon ({size, onPress}) {
    return (
        <svg onClick={onPress} width={size ||"64px"} height={size ||"64px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 21H12" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    )
}


export function DeleteIcon () {
    return (
        <svg fill="#878787" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#878787"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20,7H12.309a.5.5,0,0,1-.447-.276L10.276,3.553A1,1,0,0,0,9.382,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V8A1,1,0,0,0,20,7Zm-4.793,8.793a1,1,0,1,1-1.414,1.414L12,15.414l-1.793,1.793a1,1,0,0,1-1.414-1.414L10.586,14,8.793,12.207a1,1,0,0,1,1.414-1.414L12,12.586l1.793-1.793a1,1,0,0,1,1.414,1.414L13.414,14Z"></path></g></svg>
    )
}