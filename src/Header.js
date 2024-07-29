import Image from './assets/hydrologist-logo.svg'
import ICON1 from './assets/bottle-icon.png'
import ICON2 from './assets/profile-icon.png'
import ICON3 from './assets/search-icon.png'
import './css/header.css'
import { useRef, useEffect, useState } from 'react'
import { LoginIcon, SvgMenu, WaterBottle } from './components/widgets'
import { Link, useNavigate } from 'react-router-dom';
import { DownArrow, RightArrow } from './components/widgets'
import { useContext } from 'react'
import { DataContext } from './data'
import { LangContext } from './data/lang'

export default function ({toggleSearch, toggleMbNav }) {
    
    let cart = useContext(DataContext).cart;
    let handleDeleteFromCart = useContext(DataContext).handleDeleteFromCart
    const [cartItemNum, setCartItemNumb ] = useState(0);
    const [cartItems, setCartItems ] = useState([]);
    const login = useContext(DataContext).login;
    const setLogin = useContext(DataContext).setLogin;
    /* console.log("login is : " + login) */
    const navigator = useNavigate();
    useEffect( () => {
        
        setCartItemNumb(cart.length);
        setCartItems(cart);
    }, [cart, cartItems])
    const bannerRef = useRef(null);
    const headerRef = useRef(null);
    const headertxt = useContext(LangContext).header;
    useEffect(() => {
      /*   console.log(headertxt) */
    }, [headertxt])
    /* useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const header = headerRef.current;
          const banner = bannerRef.current;
    
          if (scrollY > 90) {
            banner.classList.add('sticky-header');
          } else {
            banner.classList.remove('sticky-header');
          }
        };
    
        
        window.addEventListener('scroll', handleScroll);
    
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); */


      // handle header retraction ===================================================
      const [prevScrollPos, setPrevScrollPos] = useState(0);
      const [visible, setVisible] = useState(true);
      const [fixedBanner, setFixedBanner ] = useState(false)

      useEffect(() => {
        const header = headerRef.current;
        
        const handleScroll = () => {
            
          const currentScrollPos = window.pageYOffset;
          const visible = prevScrollPos > currentScrollPos;
    
          setPrevScrollPos(currentScrollPos);
          if (window.pageYOffset < 200 ){
            setVisible(true);
           /*  console.log('SCROLL < 200 !!HEADER VISIBLE') */
            header.classList.remove('to-up');
            
        }
        else {
            setVisible(visible);
            if(visible) {
                /* console.log('SCROLL >>>> 200 AND SCROLLING TO TOP'); */
                header.classList.remove('to-up');
            }
            else{
                 /* console.log('SCROLL >>>> 200 AND BOTTTOM SCROLLING') */
                 header.classList.add('to-up');
                }
          
            
          } // Add this condition
          /* else setVisible(currentScrollPos > 200 || visible); // Add this condition */
        

          visible ? setFixedBanner(false) : setFixedBanner(true)
          
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);


      const handleRemoveItem = (item) => {
        
        handleDeleteFromCart(item.productName)
      }
    return (
        <header ref={headerRef}  className={`header`}>
           <div className='header-container '>
           <SvgMenu toggle={toggleMbNav}  className="header-sm-sc"/>
                <ul className="header-content header-bg-sc">
                      
                        <li> <Link to='/uploadProduct'>{headertxt?.header?.home}</Link> </li>
                        <li>
                            <a>{headertxt?.header?.categories.title}&nbsp;&nbsp;</a> <DownArrow />
                            <ul>
                                <li>
                                    <a>BEYOUTY</a> <RightArrow />
                                    <ul>
                                        <li>
                                            <a> TEAS</a> <RightArrow />
                                            <ul>
                                                <li><a>green tea</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>INFUSED WATER</a> <RightArrow />
                                            <ul>
                                                <li><a>colleagen-water</a></li>
                                                <li><a>coconut-water</a></li>
                                                <li><a>lemon-water</a></li>
                                                <li><a>cucumber-infused-water</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>NATURAL JUICES</a> <RightArrow />
                                            <ul>
                                                <li><a>pomegranate juice</a></li>
                                            </ul>
                                        </li>    
                                    </ul>
                                    
                                </li>
                                <li>
                                    <a>WELL BEING</a> <RightArrow />
                                    <ul>
                                        <li><a>OXYGENATED WATER</a></li>
                                        <li><a>sparkling-water</a></li>
                                        <li><a>immunity boost drinks</a></li>    
                                        <li><a>electrolyte drink</a></li>    
                                        <li><a>vitamin-water</a></li>    
                                        <li><a>herbal & infused drinks</a></li>    
                                        <li><a>tea</a></li>    
                                        <li><a>mood-boost-water</a></li>    
                                        <li><a>alkaline water</a></li>    
                                        <li><a>antioxydant drinks</a></li>    
                                        <li><a>antioxydant drinks</a></li>    
                                        <li><a>hydrogen rich water</a></li>    
                                        <li><a>kombucha</a></li>    
                                        <li><a>kefir</a></li>    
                                        <li><a>adds on dietary supplements</a></li>    
                                        <li><a></a></li>    
                                    </ul>
                                </li>
                                <li>
                                   <a> GENESIS WILL </a> <RightArrow />
                                   <ul>
                                        <li><a>spring water</a></li>
                                        <li><a>mineral water</a></li>
                                        <li><a>alkaline water genesis-will</a></li>    
                                        <li><a>sparkling water genesis will</a></li>    
                                    </ul>
                                </li>
                                <li>
                                    <a>YOUNGSTER</a> <RightArrow />
                                    <ul>
                                        <li><a>0 TO 3 YEARS</a></li>
                                        <li><a>3 TO 18 YEARS</a></li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <a>FUNCTIONAL DRINKS</a> <RightArrow />
                                    <ul>
                                        <li><a>becool drinks</a></li>
                                        <li><a>DE-STRESS DRINKS</a></li>
                                        <li><a>WORKOUT DRINKS</a></li>    
                                        <li><a>ALTERNATIVE DRINKS TO SODAS</a></li>    
                                        <li><a>HEALTHY ENERGY DRINKS</a></li>    
                                        <li><a>isotonic-drinks</a></li>    
                                        <li><a>sodium rich drinks</a></li>    
                                        <li><a>HEALTHY MILK</a></li>    
                                        <li><a>ADDS-ON</a></li>    
                                    </ul>
                                </li>
                                <li>
                                    <a>MOMS-CLUB</a> <RightArrow />
                                    <ul>
                                        <li><a>vitamindrink</a></li>
                                        <li><a>infused-water</a></li>
                                        <li><a>organic juices</a></li>
                                        <li><a>electrolytes water</a></li>
                                        <li><a>Tea</a></li>
                                        <li><a>kombucha </a></li>    
                                        <li><a>organic milk </a></li>    
                                    </ul>
                                </li>
                                <li>
                                    <a>MIXOLOGIST</a> <RightArrow />
                                    <ul>
                                        <li><a>non alcoholic beers</a></li>
                                        <li><a>non alcoholic champagne</a></li>
                                        <li><a>non alcoholic spirits /liquors</a></li>    
                                        <li><a>non alcoholic cocktails / mocktails</a></li>    
                                      
                                    </ul>
                                </li>
                                <li>
                                    <a>B-HEALTHY</a> <RightArrow />
                                    <ul>
                                        <li><a>ORGANIC BEVERAGES</a></li>
                                        <li><a>antioxydant beverages</a></li>
                                        <li><a>natural-sirops</a></li>    
                                        <li><a>probiotic beverages</a></li>    
                                        <li><a></a></li>    
                                    </ul>
                                </li>
                                <li>
                                    <a>LEAVES-BEANS</a> <RightArrow />
                                    <ul>
                                        <li><a>TEARAPY</a></li>
                                        <li><a>BARISTA</a></li>
                                        <li><a></a></li>    
                                    </ul>
                                </li>
                                <li>
                                    <a>ACCESSORIES</a> <RightArrow />
                                    <ul>
                                        <li><a>water bottle holders</a></li>
                                        <li><a>WATER BOTTLES</a></li>
                                        <li><a>shakers</a></li>    
                                        <li><a>straws reusable straws</a></li>    
                                        <li><a>water filter</a></li>    
                                        <li><a>caps</a></li>    
                                        <li><a>ice cubes</a></li>    
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to='/shope'>{headertxt?.header?.shop}</Link></li>
                        <li><Link to='/insights'>{headertxt?.header?.insights}</Link></li>
                        <li><Link to="/offers">{headertxt?.header?.offers}</Link></li>
                </ul>
                <img style={{alignSelf: 'center', maxHeight: '40px'}} src={Image} />
                <ul className='header-content header-bg-sc'>
                <li> <Link to='about'>{headertxt?.header?.who_we_are}</Link>  </li>
                <li><Link to='/water'>{headertxt?.header?.water_sommelier}</Link>   </li>
                <li>   <Link  to='/lounge'>{headertxt?.header?.executive_lounge}</Link>   </li>
                </ul>
                <div className='header-icons'>
                    <img src={ICON3} onClick={toggleSearch} className='header-bg-sc' />
                    {login ? <img onClick={() => setLogin(false) } src={ICON2} className='header-bg-sc' />   :  <Link to='/login'> <LoginIcon /> </Link> }
                    <div className='cart-view-icon' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Link to='/cart'>
                    <img src={ICON1} style={{marginRight: '0'}} /> 
                    </Link>
                    <p style={{marginRight: '1rem', textDecoration: 'none', color: 'white', backgroundColor: '#0daafb', borderRadius: '50%', width: '20px', height: '20px', transform: 'translate(-5px, -5px)'}}>{cartItemNum}</p>
                    <ul>
                        { cartItems.length == 0 ? (
                        <li>
                            <div>Nothin in the cart yet</div>
                        </li>) : 
                        cartItems.map((item) => {
                            return (
                                <li>
                                    <div>
                                        <img src={item.productImage} />
                                        <div>
                                            <h4>{item.productName}</h4>
                                            <p>{item.productPrice}</p>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item)}>x</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                    
                </div>
                
                </div>

           <div className='header-banner'onClick={() =>navigator('/fmy')} style={{cursor: 'pointer'}} ref={bannerRef}>
            <WaterBottle />
            <h4>Find your water</h4>
           </div>
        </header>
    )
}