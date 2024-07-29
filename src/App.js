import './App.css';
import Header from './Header';
import FloatSocial from './components/floatSocial';
import './animations.css'

import Footer from './components/footer';
import { useLocation } from 'react-router-dom';

import SearchModal from './components/searchModal';
import { useEffect, useState } from 'react';

import Reactbanner from './components/reactbanner';
import MobileNav from './components/mobilenav';

import NavIndicator from './components/navindicator';

import Router from './Router';
import { useContext } from 'react';
import { DataContext } from './data';
import { Langs } from './components/widgets';
import DashBoardRouter from './dashbordRouter';
import DashboardLogin from './dashboardLogin';

function containsPages(string) {
  return string.includes("/pages");
}

function App() {
  const [searchVisible, setSearchVisible] = useState(false);

  const [mbNavVisible, setMbNavVisible] = useState(false);
  const [secret, setSecete] = useState('');
  const [uiVisible, setUiVisible] = useState(false);


  const pageContext = useContext(DataContext);
  let password = pageContext.password;
  let passcode = pageContext.passCode;
  let setPassCode = pageContext.setPassCode;
  let pageLoader = pageContext.pageLoader;
  let AlertMsgVisible = pageContext.AlertMsg.visible;
  let alertMsgContent = pageContext.AlertMsg.content;
  let alertMsgtitle = pageContext.AlertMsg.title;


  const data = [
    { img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-4.webp', date: 'August 16, 2022', title: 'THE HYDROLOGIST UNIQUE PRODUCTS', url: '/insight/1' },
    { img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-3.webp', date: 'August 16, 2022', title: 'CANADA WATER BRAND LAUNCHING IN UAE', url: '/insight/2' },
    { img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog-2.webp', date: 'August 16, 2022', title: 'SALACIOUS DRINKS – ONLINE BOTTLED WATER BOUTIQUE', url: '/insight/3' },
    { img: 'https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2021/10/blog1.webp', date: 'Octobar 1, 2021', title: 'BEGINNING OF THE LUXURY WATER WAVE', url: '/insight/4' },

  ]
  const location = useLocation();
  const handleSearchVisible = () => {
    setSearchVisible(!searchVisible);
  }

  const toggleMbNav = () => {
    setMbNavVisible(!mbNavVisible);
  }

  const handleScerte = (e) => {
    setSecete(e.target.value)
  }
  const handlelclick = () => {
    
    setPassCode(secret);
  }
  useEffect(() => {

    const listner = window.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && location.pathname == '/') {
        handlelclick();
      }
    });
    if(location.pathname.includes('/pages')) {
      setUiVisible(true)
    }
    else {
      setUiVisible(false)
    }
    return window.removeEventListener('keypress', listner);
  }, [secret, uiVisible])
  return (
    <div className="App" >
     
      {AlertMsgVisible && <div className='alert-message'>
        <h4>action:  {alertMsgtitle} </h4>
        <p>{alertMsgContent}</p>
      </div>}
      {pageLoader &&
        <div className='upload-page-loader' >
          <div className="spinner-loader"></div>
        </div>
      }


      {searchVisible && uiVisible && <SearchModal toggleSearch={handleSearchVisible} />}
      {passcode  && uiVisible &&
        <>
         <Reactbanner />
          <Header toggleSearch={handleSearchVisible} toggleMbNav={toggleMbNav} />
          <NavIndicator />
        </>
      }
      {mbNavVisible && uiVisible && <MobileNav toggleMbNav={toggleMbNav} />}
      {passcode  ?

        <Router data={data} location={location} />
        :
        <>
        
        <DashboardLogin handleScerte={handleScerte} secret={secret}  handlelclick={handlelclick}  />
        </>
      
      }
      {
        passcode && uiVisible &&
        <>
          <FloatSocial />


          <Langs />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
