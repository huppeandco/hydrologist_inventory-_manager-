import { useEffect } from 'react';
import Swiper from './components/Swiper';
import Marquee from './components/marquee';
import OfferView from './components/offerview';
import Shelf from './components/shelf';
import HydroStore from './components/store';
import './css/pages/home.css'
import { FywWidget, InsightsComponent, NumberView, Testimonial } from './components/widgets';
import Scene from './components/bottlemode';
import axios from 'axios';
import { useState } from 'react';
import EditModal from './components/editmodal';
import { EditIcon } from './components/widgets';
import { useContext } from 'react';
import { LangContext } from './data/lang';

const apiUrl = 'https://thehydrologist.com/api/get-page.php';

export default function ({data}) {
    const [homeData, setHomeData ] = useState(null);
    const [editModalVisible, setEditModalVisible ] = useState(false);
    const [ EditContent, setEContent ] = useState({
      title: '',
      content: ''
    });
    const [componentName, setComponentName ] = useState('swiper')
    const lang = useContext(LangContext).lang;

    const handleEditModal = (content, name) => {
      setEditModalVisible(!editModalVisible);
      setEContent(content)
      setComponentName(name)
    }
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    useEffect(() => {
       
    
        axios.get(apiUrl, {
          params: {
            pageName: 'home',
            lang: lang
          }
        })
        .then(response => {
          
            setHomeData(response.data);
          
          
        })
        .catch(error => {
          console.error('Error retrieving page data:', error);
        });
      }, []);
      useEffect(() => {
        axios.get(apiUrl, {
          params: {
            pageName: 'home',
            lang: lang
          }
        })
        .then(response => {
          
            setHomeData(response.data);
          
          
        })
        .catch(error => {
          console.error('Error retrieving page data:', error);
        });
      }, [lang])
    return (
        <div className="home">
             {editModalVisible && <EditModal toggleEditModal={handleEditModal} componentName={componentName} > <h2 style={{width: '100%', textAlign: 'left', paddingLeft: 20}}>Edit <EditIcon size={24} /> → {componentName} </h2> </EditModal>}
            <Swiper swiperData={homeData?.swiper} toggleEditModal={handleEditModal} />
            <Marquee />
            <Shelf />
            {/* <Scene /> */}
            <HydroStore />
            <OfferView />
            <FywWidget toggleEditModal={handleEditModal} fywData={homeData?.fyw}/>
            <NumberView />
            <Testimonial  toggleEditModal={handleEditModal} txtData={homeData?.testimonials}/>
            <InsightsComponent data={homeData?.insights} title="Insights" toggleEditModal={handleEditModal}/>
        </div>
    )
}