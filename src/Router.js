import { Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home'
import Shope from './pages/shope';
import Insights from './pages/insights';
import Offers from './pages/offers';
import About from './pages/about';
import Water from './pages/water';
import Lounge from './pages/lounge';
import Brands from './pages/brands';
import Affiliate from './pages/affiliate';
import Contact from './pages/contact';
import Recycling from './pages/recycling';
import Program from './pages/program';
import SiteMap from './pages/siteMap';
import FAQS from './pages/faqs';
import Carear from './pages/carear';
import Login from './pages/login';
import Products from './pages/prodcuts';
import Product from './pages/product';
import Cart from './pages/cart';
import Insight from './pages/insight';
import FindMyWater from './pages/findmywater';
import Uploadproduct from './pages/uploadproduct';
import { useEffect, useState } from 'react';
import FlashScreen from './components/flashscreen';
import UpdateOffer from './pages/updateoffer';
import Dashboard from './dashboard';
import UploadAll from './pages/uploadAll';


function Router ({data, location}) {
    const [showFlashScreen, setShowFlashScreen] = useState(true);

    useEffect(() => {
        // Simulate the flash screen for a certain duration (e.g., 2 seconds)
       
        setShowFlashScreen(true);
        const timeout = setTimeout(() => {
          setShowFlashScreen(false);
        }, 1000);
    
        return () => clearTimeout(timeout);
      }, [location]);
    return (
        <>
         {showFlashScreen && <FlashScreen />}
        <TransitionGroup component={null}>
        <CSSTransition timeout={250} classNames="fade">
        <Routes>
           
            <Route  path="/" element={<Uploadproduct zIndex={1} row={[]} data={data}  />} />
            <Route  path="/home" element={<Home data={data}  />} />
            <Route path="/shope" element={<Shope  />} />
            <Route path="/insights" element={<Insights data={data} />} />
            <Route path="/offers" element={<Offers /> } />
            <Route path="/about" element={<About />} />
            <Route path="/water" element={<Water />} />
            <Route path="/lounge" element={<Lounge />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recycling" element={<Recycling />} />
            <Route path="/program" element={<Program />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="/carear" element={<Carear />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/add-products" element={<UploadAll />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/insight/:id' element={<Insight />} />
            <Route path='/fmy' element={<FindMyWater />} />
            <Route path='/upload-product' element={<Uploadproduct />} />
            <Route path='/pages/updateoffer' element={<UpdateOffer />} />
        </Routes>
        </CSSTransition>
      </TransitionGroup>
      </>
    
    )
}


export default Router;