import { useState } from 'react';
import '../css/store.css';
import { Slide } from 'react-reveal';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../data';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { DownArrow } from './widgets';
import { SotreProducts2, SotreProducts3} from '../data';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import SkeletonLoader from './skeleton-loader';
import { LoaderTemplate } from './skeleton-loader';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://thehydrologist.com/get-products.php'

export const sotreProducts = 
[
    {priece: 'AED 204.51', name: 'Nooma (Copy)', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/ede84e25-b281-47ea-e73d-a29bb8468d00/public', rating: 5, quantity: 1, desc: 'loream', },
    {priece: 'AED 40.00 – AED 123.00', name: 'Al Ain Bambini', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/549f0927-ecf8-4c63-3f45-8ead81ef7200/public', rating: 5, quantity: 1,desc: 'loream',},
    {priece: 'AED 123.00', name: 'Smart Water', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/4b43a0ae-cebb-47c8-3a43-1472a9ff4400/public', rating: 3, quantity: 1, desc: 'loream',},
    {priece: 'AED 77.13', name: 'Zevia Kids', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/061e14cd-5989-4c45-1286-32fa6efd4c00/public', rating: 2.5, quantity: 1, desc: 'loream',},
    {priece: 'AED 204.51', name: 'Zevia', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/d1b61fdc-f50f-4d1e-b72c-2e6d5dcf4800/public', rating: 1, quantity: 1, desc: 'loream',},
    {priece: 'AED 11.00', name: 'Wildalp Baby', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/1ed343c7-7b58-4b35-ad02-4b1c4b6d4900/public', rating: 5, quantity: 1, desc: 'loream',},
    {priece: 'AED 88.92', name: 'Volvic', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/f69b9427-584b-439d-0551-42f76835cf00/public', rating: 4, quantity: 1, desc: 'loream',},
    {priece: 'AED 80.00', name: 'Spring Aqua', image: 'https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/6c3f87d4-6a1f-49cd-8802-a32bb2221b00/public', rating: 4.5, quantity: 1, desc: 'loream',},

];
 
function Eye () {
    return (
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>eye</title> <path d="M0 16q0.064 0.128 0.16 0.352t0.48 0.928 0.832 1.344 1.248 1.536 1.664 1.696 2.144 1.568 2.624 1.344 3.136 0.896 3.712 0.352 3.712-0.352 3.168-0.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6 0.832-1.312 0.48-0.928l0.16-0.352q-0.032-0.128-0.16-0.352t-0.48-0.896-0.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-0.896-3.712-0.352-3.712 0.352-3.168 0.896-2.592 1.344-2.144 1.568-1.664 1.664-1.248 1.568-0.832 1.344-0.48 0.928zM10.016 16q0-2.464 1.728-4.224t4.256-1.76 4.256 1.76 1.76 4.224-1.76 4.256-4.256 1.76-4.256-1.76-1.728-4.256zM12 16q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184l2.816 2.816h-4z"></path> </g></svg>
    )
}

function ShoppingCart ({onClick, size}) {
    return (
        <svg onClick={onClick} fill="#000000" width={size || "20px"} height={size || "20px"}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.35 10.48H4.5l-.24-1.25h9.13a1.24 1.24 0 0 0 1.22-1l.84-4a1.25 1.25 0 0 0-1.22-1.51H3l-.22-1.24H.5v1.25h1.25l1.5 7.84a2 2 0 0 0-1.54 1.93 2.09 2.09 0 0 0 2.16 2 2.08 2.08 0 0 0 2.13-2 2 2 0 0 0-.16-.77h5.49a2 2 0 0 0-.16.77 2.09 2.09 0 0 0 2.16 2 2 2 0 1 0 0-4zM14.23 4l-.84 4H4l-.74-4zM3.87 13.27A.85.85 0 0 1 3 12.5a.85.85 0 0 1 .91-.77.84.84 0 0 1 .9.77.84.84 0 0 1-.94.77zm9.48 0a.85.85 0 0 1-.91-.77.92.92 0 0 1 1.81 0 .85.85 0 0 1-.9.77z"></path></g></svg>
    )
}

const StarRating = ({ number }) => {
    const maxStars = 5; // You can adjust this value to change the maximum number of stars
    const filledStars = Math.round(number * maxStars) / maxStars;
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        const starType = i <= filledStars ? 'filled' : 'empty';
        stars.push(<Star key={i} type={starType} />);
      }
      return stars;
    };
  
    const Star = ({ type }) => {
      const filledColor = 'aquamarine'; // You can customize the color of the filled stars
      const emptyColor = 'rgb(209, 209, 209)'; // You can customize the color of the empty stars
  
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={type === 'filled' ? filledColor : emptyColor}
        >
         
          {type === 'filled' ? (
            <path d="M12 2l2.352 7.187h7.516l-6.09 4.438 2.353 7.187L12 16.594l-6.131 4.219 2.353-7.187-6.09-4.438h7.516z" />
          ) : (
            <path d="M0 0h24v24H0z" fill="none" />
          )}
        </svg>
      );
    };
  
    return <div>{renderStars()}</div>;
  };
export function ProductItem ({name, image, rating, priece, quantity, price, id}) {
  let context =  useContext(DataContext);
  const cart =  context.cart;
  const updateCart = context.handleCart;

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleUpdateCart = () => {
   
    updateCart(
      {productName: name, productPrice: priece, rating: rating, productImage: image, quantity: 1}
    )
  }
  const handleImgLoad = () => {
    setImageLoaded(true);
    
  }

  
  return (
    <div key={name} className='product-wrapper'>
                            <div className='image-wrapper'>
                       
                                <div className='actions-wrapper'> 
                                    <div>
                                        <Eye />
                                    </div>
                                    <div style={{transitionDelay: '100ms'}} onClick={handleUpdateCart}>
                                        <ShoppingCart  />
                                    </div>
                                 </div>
                                 <Slide bottom>
                                  <div  className={`product_img-container ${imageLoaded ? 'loaded' : ''}`}>
                                    <Link to={`/product?name=${name}&&img=${image}&&priece=${priece || price}&&quantity=${quantity}&&id=${id}`}>
                                      <img src={image} onLoad={handleImgLoad} />
                                      <div className='img-skeleton' /> 
                                      
                                    </Link>
                                  </div>
                                </Slide>
                            </div>
                            <div className='product-info'>
                            <p>{priece || price}</p>
                            <p>{name}</p>
                            <StarRating number={rating}/> 
                             </div>
                  </div>
  )
}
/*  <div className='product-cart'>
    <ShoppingCart size={35}  />
    </div> */
export function Store ({productsData}) {
 
  return (
    <div className='products-container'>
                {productsData?.map((product) => {
                  console.log("this is the prduct", product)
                    return (
                        <ProductItem name={product.name} image={product.image} rating={product.rating} priece={product?.priece} price={product?.price}  quantity={product.quantity} id={product?.id}/>
                    )
                })}

            </div>
  )
}
function HomeStore () {
    const [activeTap, setActiveTap ] = useState('best_seller');
    const [activeMenu, setActiveMenu ] = useState(false);
    const [ data, setData ] = useState(sotreProducts);
    const [ref, inView ] = useInView();


    const [products, setProducts] = useState([]);
   

    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await axios.get('https://thehydrologist.com/api/get-products.php');
          const allProducts = response?.data || []; 
          return allProducts;
        } catch (error) {
          throw error;
        }
      }
    
     if(inView) {
        fetchProducts()
        .then((products) => {
           // Log the JavaScript object
          setProducts(products);
          setData(products); // Update state with the fetched products
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
     }
    }, [inView]);
    
    



    return (
        <div className='hydro-store'>
            <div className='store-taps '>
                <button className={`${activeTap == 'best_seller' ? 'active store_min_sc' : 'store_min_sc'}`} onClick={() => { setActiveTap('best_seller'); setData(sotreProducts)}}>BEST SELLERS </button>
                <button className={`${activeTap == 'new_arrivals' ? 'active store_bg-sc' : 'store_bg-sc'}`} onClick={() => {setActiveTap('new_arrivals'); setData(SotreProducts2)}}>NEW ARRIVALS</button>
                <button className={`${activeTap == 'exective_lounge' ? 'active store_bg-sc' : 'store_bg-sc'}`} onClick={() => {setActiveTap('exective_lounge'); setData(SotreProducts3)}}>EXECUTIVE LOUNGE</button>
            <div className={`store_sm-sc ${activeMenu ? 'active' : ''}`} >
              <button onClick={() => {setActiveMenu(!activeMenu)}}>
                more <DownArrow size={30} color={"#b4b4b4"} transform='translateY(6px)'/>
              </button>
              <ul>
                <li onClick={() => { setActiveTap('best_seller'); setData(sotreProducts)}}>
                  <button >BEST SELLERS</button>
                </li>
                <li>
                  <button onClick={() => {setActiveTap('new_arrivals'); setData(SotreProducts2)}}>NEW ARRIVALS</button>
                </li>
                <li>
                  <button onClick={() => {setActiveTap('exective_lounge'); setData(SotreProducts3)}}>EXECUTIVE LOUNGE</button>
                </li>
              </ul>
            </div>
            </div>
            
            { products?.length > 0 ? <Store productsData={data} />: 
            <div ref={ref} style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
              {Array.from({ length: 10 }, (_, index) => (
                  <LoaderTemplate key={index} />
              ))}
        </div>
        }
            
                <a>Shope all products</a>
        </div>
    )
}

export default HomeStore;