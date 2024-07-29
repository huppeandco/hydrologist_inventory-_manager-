import React, { createContext, useContext, useEffect, useState } from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import {getAuth } from "firebase/auth";
import * as Firebase from 'firebase/app';

import Image9 from './assets/shelf/youngster/wildnap-baby.png'
import Image10 from './assets/shelf/youngster/zevia-kidz.png'
import Image101 from './assets/shelf/wellbeing/Franklin-_-Sons-Ginger-Ale.png'
import Image11 from './assets/shelf/wellbeing/Soylent-Meal-Replacement.png'
import Image12 from './assets/shelf/wellbeing/oxygizer.png';
import Image13 from './assets/shelf/wellbeing/pocari-sweat.png';
import Image14 from './assets/shelf/wellbeing/vitamin-well.png';
import Image15 from './assets/shelf/gensiswell/90h20-1.png';
import Image16 from './assets/shelf/gensiswell/addwater.png';
import Image17 from './assets/shelf/gensiswell/alitasa.png';
import Image18 from './assets/shelf/gensiswell/antipodes.png';
import Image19 from './assets/shelf/gensiswell/aqua-premium.png';
import Image20 from './assets/shelf/gensiswell/aquafina.png';
import Image21 from './assets/shelf/gensiswell/artic-silent.png';
import Image22 from './assets/shelf/gensiswell/fiji.png';
import Image23 from './assets/shelf/gensiswell/fiuggi.png';
import Image24 from './assets/shelf/gensiswell/haage.png';
import Image25 from './assets/shelf/gensiswell/lamate.png';


// Create the context


export const DataContext = createContext();

export const SotreProducts2 = 
[
    {priece: 'AED 204.51', name: 'Nooma (Copy)', image: Image9, rating: 5, quantity: 1},
    {priece: 'AED 40.00 – AED 123.00', name: 'Al Ain Bambini', image: Image10, rating: 5, quantity: 1},
    {priece: 'AED 123.00', name: 'Smart Water', image: Image101, rating: 3, quantity: 1},
    {priece: 'AED 77.13', name: 'Zevia Kids', image: Image11, rating: 2.5, quantity: 1},
    {priece: 'AED 204.51', name: 'Zevia', image: Image12, rating: 1, quantity: 1},
    {priece: 'AED 11.00', name: 'Wildalp Baby', image: Image13, rating: 5, quantity: 1},
    {priece: 'AED 88.92', name: 'Volvic', image: Image14, rating: 4, quantity: 1},
    {priece: 'AED 80.00', name: 'Spring Aqua', image: Image15, rating: 4.5, quantity: 1},

];
export  const SotreProducts3 = 
[
    {priece: 'AED 204.51', name: 'Nooma (Copy)', image: Image16, rating: 5, quantity: 1},
    {priece: 'AED 40.00 – AED 123.00', name: 'Al Ain Bambini', image: Image17, rating: 5, quantity: 1},
    {priece: 'AED 123.00', name: 'Smart Water', image: Image18, rating: 3, quantity: 1},
    {priece: 'AED 77.13', name: 'Zevia Kids', image: Image19, rating: 2.5, quantity: 1},
    {priece: 'AED 204.51', name: 'Zevia', image: Image20, rating: 1, quantity: 1},
    {priece: 'AED 11.00', name: 'Wildalp Baby', image: Image21, rating: 5, quantity: 1},
    {priece: 'AED 88.92', name: 'Volvic', image: Image22, rating: 4, quantity: 1},
    {priece: 'AED 80.00', name: 'Spring Aqua', image: Image24, rating: 4.5, quantity: 1},

];
const password = '414km3mJNR2343MMAF000035124';


const firebaseConfig = {
  apiKey: "AIzaSyCNsRzq9TtbeZh7JbKhegAK-SiMcUAidvk",
  authDomain: "the-hydrologist.firebaseapp.com",
  databaseURL: "https://the-hydrologist-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-hydrologist",
  storageBucket: "the-hydrologist.appspot.com",
  messagingSenderId: "328001240346",
  appId: "1:328001240346:web:7c6215b8788f123f1240a3",
  measurementId: "G-HYLZVMN0ZB"
};

const app = Firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

const getOrders = async (status) => {
  return new Promise((resolve, reject) => {
    const starCountRef = ref(db, `orders/${status}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
};

const DataProvider = ({ children }) => {
    const [data, setData] = useState('');
    const [nav, setNav] = useState('home');
    const [passCode, setPassCode ] = useState(false);
    const [login, setLogin ] = useState(false)
    const [usrID, setUsrID ] = useState(null);
    const [AlertMsg, setAlertMsg ] = useState({visible: false,title: '', content: ''});
    const [name, setName ] = useState('');
    
      
    const [cart, setCart ] = useState([
    ]);
    const [insights, setInsights ] = useState([
      {id: 1, url: '/insight/1', header: 'The hydrologisSt unique Products', ftxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.', quote: 'I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.', stxt: 'If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.', stitle: 'Your imagination, our creation', ttxt: 'Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…', ltxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.', aurther: 'Jeff', date: '2-2-223', img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-4.webp'},
      {id: 2,  url: '/insight/2', header: 'CANADA WATER BRAND LAUNCHING IN UAE',  ftxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.',quote: 'I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.', stxt: 'If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.',  stitle: 'Your imagination, our creation', ttxt: 'Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…      ',   ltxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.', aurther: 'Jeff',date: '2-2-223', img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-3.webp' },
      {id: 3,url: '/insight/3', header: 'SALACIOUS DRINKS – ONLINE BOTTLED WATER BOUTIQUE ',  ftxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.',quote: 'I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.', stxt: 'If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.',  stitle: 'Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…', ttxt: 'Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…',   ltxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.', aurther: 'Jeff', date: '2-2-223', img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-2.webp'  },
      {id: 4, url: '/insight/4', header: 'BEGINNING OF THE LUXURY WATER WAVE',  ftxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.',quote: 'I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.', stxt: 'If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny.',  stitle: 'Your imagination, our creation', ttxt: 'Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…',   ltxt: 'Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement. I like the body. I like to design everything to do with the body.', aurther: 'Jeff', date: '2-2-223', img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog1.webp',  },
      
    ]);
    const [ pageLoader, setPageLoader] = useState(false);
    const [NavIndicatorState,  setNavIndictorState ] = useState('');

    const handleCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        
    }

    const updateCart = (cart) => {
      setCart(cart)
    }

    const handleDeleteFromCart = (itemName) => {
      console.log('request for delete item: ', itemName)
      const updatedCart = cart.filter((item) => item.productName !== itemName);
      setCart(updatedCart);
    };
    

    const handleNavigatio = (page) => {
        setNav(page);
        console.log(nav);
    }
    
    return (
      <DataContext.Provider value={{...data, handleNavigatio, nav,
        cart, 
        handleCart,
        handleDeleteFromCart, 
        updateCart,
        insights,
        NavIndicatorState,
        setNavIndictorState,
        passCode,
        password,
        setPassCode,
        setUsrID,
        login,
        setLogin,
        pageLoader,
        setPageLoader,
        AlertMsg,
        setAlertMsg,
        name,
        setName,
        getOrders
      
      }}>
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataProvider;