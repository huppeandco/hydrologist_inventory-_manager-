import { useContext, useEffect, useState } from 'react';
import '../css/editmodal.css'
import { DefaulBtn, EditIcon, PenIcon, SkeletonEditLoader } from './widgets';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { LangContext } from '../data/lang';

const apiUrl = 'https://thehydrologist.com/api/get-page.php'; // Replace with your actual API URL
const postUrl = 'https://thehydrologist.com/api/update-pages.php'; // Replace with your actual API URL

function EditModal({ toggleEditModal, children, componentName }) {
  const [idle, setIdle] = useState('translateY(-200%)');
  const [pageData, setPageData] = useState(null);
  const [componentData, setComponentData] = useState(null)
  const pageName = 'home';
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);

  const lang = useContext(LangContext).lang

  useEffect(() => {
    setTimeout(() => {
      setIdle('translateY(0px)')
    }, 0);
  }, []);

  useEffect(() => {


    axios.get(apiUrl, {
      params: {
        pageName: pageName,
        lang
      }
    })
      .then(response => {
        switch (componentName) {
          case 'swiper':
            setPageData(response.data);
            setComponentData(response.data[componentName])

            break;
          case 'testimonials':
            setPageData(response.data);
            setComponentData(response.data[componentName])
           
            break;
          case 'insights':
            setPageData(response.data);
            setComponentData(response.data[componentName]);
          
            break;
          case 'fyw':
            setPageData(response.data);
            setComponentData(response.data[componentName]);
            console.log(response.data)
         
            break;
          default:
            setPageData();
            setComponentData();
        }

      })
      .catch(error => {
        console.error('Error retrieving page data:', error);
      });
  }, [pageName]);

  const closeModle = () => {
    if ((componentName == 'swiper' || componentName == 'testimonials')  && file != null) return
    setIdle('translateY(-200%)')
    setTimeout(() => {
      toggleEditModal()
    }, 500);
  }
  const saveAndClose = () => {
    setIdle('translateY(-200%)')
    setTimeout(() => {
      toggleEditModal()
    }, 500);

  }











  const handleTitleChange = (index, newTitle) => {
    const updatedSlides = [...componentData.slides];
    updatedSlides[index].title = newTitle;
    setComponentData({ slides: updatedSlides });
  };

  const handleDescriptionChange = (index, newDescription) => {
    const updatedSlides = [...componentData.slides];
    updatedSlides[index].description = newDescription;
    setComponentData({ slides: updatedSlides });
  };
  const handleTitleChange2 = (index, newTitle) => {
    const updatedSlides = [...componentData]; // Create a new array
    updatedSlides[index] = { ...updatedSlides[index], title: newTitle }; // Update the title of the specified index

    setComponentData(updatedSlides); // Update the state with the new array
  };

  const handleDescriptionChange2 = (index, author) => {
    const updatedSlides = [...componentData]; // Create a new array
    updatedSlides[index] = { ...updatedSlides[index], author: author }; // Update the title of the specified index

    setComponentData(updatedSlides); // Update the state with the new array
  };



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
    };
  };


  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append('image', file);
    try {

      const response = await axios.post('https://thehydrologist.com/post-img.php', formData);

      return response.data;

    } catch (error) {
      console.error(error);


    }

  };
  const deleteOldImage = async (identifier) => {
    const formData = new FormData();
    formData.append('identifier', identifier);
    try {

      const response = await axios.post('https://thehydrologist.com/api/delete-img.php', formData);
      console.log(response.data)
      return response.data;

    } catch (error) {
      console.error(error);


    }

  };

  //custome function 
  //https://imagedelivery.net/pPmcWI57Uxy-_rb5sInlGg/c1491fe7-f1e1-4819-4592-c0a1906d2200/public
  function extractImageIdentifier(url) {
    const parts = url.split('/');
    const index = parts.findIndex(part => part === 'public') - 1;
    return parts[index];
  }

  const handleImageChange = async (index, bg) => {
    setLoader(true);
    if(bg) {
      const imageId = extractImageIdentifier(bg);
      const response = deleteOldImage(imageId);
      if (response.data) {
        const uploadedImageUrl = await handleUploadImage();
        const updatedSlides = [...componentData.slides];
        updatedSlides[index].bg = uploadedImageUrl;
        setComponentData({ slides: updatedSlides });
        setLoader(false);
      } else {
        const uploadedImageUrl = await handleUploadImage();
        const updatedSlides = [...componentData.slides];
        updatedSlides[index].bg = uploadedImageUrl;
        setComponentData({ slides: updatedSlides });
      
        setLoader(false);
      }
    } else {
      const uploadedImageUrl = await handleUploadImage();
        const updatedSlides = [...componentData.slides];
        updatedSlides[index].bg = uploadedImageUrl;
        setComponentData({ slides: updatedSlides });
        setLoader(false);
    }
  }

  const handleUpdateSwiperSubmit = async () => {
    setLoader(true)


    const newData = pageData;
    newData.slides = componentData;


    setPageData(newData);
    let objcalss = JSON.stringify(pageData);

    const formData = new FormData();
    formData.append('pageName', 'home');       // Replace with the actual page name
    formData.append('lang', lang);       // Replace with the actual page name
    formData.append('pageContent', objcalss);


    axios.post(postUrl, formData)
      .then(response => {
        console.log(response.data);
        setLoader(false);
        saveAndClose();
      })
      .catch(error => {
        console.error('Error:', error);
        setLoader(false);
        saveAndClose();
      });

  }


  const handleTestimnialSubmit = () => {
    const newData = pageData;
    newData.testimonials = componentData;
    setPageData(newData);
    let objcalss = JSON.stringify(pageData);

    const formData = new FormData();
    formData.append('pageName', 'home');  
    formData.append('lang', lang);       // Replace with the actual page name
    formData.append('pageContent', objcalss);


    axios.post(postUrl, formData)
      .then(response => {
        console.log(response.data);
        setLoader(false);
        saveAndClose();
      })
      .catch(error => {
        console.error('Error:', error);
        setLoader(false);
        saveAndClose();
      });
  }

  const [slider, setSlider]  = useState(1);


  const handleChageFyw = (e) => {
    const { name, value } = e.target;
        setComponentData((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));

      
     
  }


  const handleFywSubmit = async() => {
    setLoader(true)
    const newData = pageData;
    let imageUrl = await handleUploadImage();
    newData.fyw = componentData;
    if(imageUrl) newData.fyw.bg = imageUrl;
    setPageData(newData);
    let objcalss = JSON.stringify(pageData);

    const formData = new FormData();
    formData.append('pageName', 'home'); 
    formData.append('lang', lang);       // Replace with the actual page name
    formData.append('pageContent', objcalss);


    axios.post(postUrl, formData)
    .then(response => {
      console.log(response.data);
      setLoader(false);
      saveAndClose();
    })
    .catch(error => {
      console.error('Error:', error);
      setLoader(false);
      
    });
  }
  return (
    <>
      <div className="modal-backdrop dark-backdrop"> </div>
      <div className="search-modal">

        <div className='search-modal-wrapper' style={{flexDirection: 'column', alignItems: 'center'}} >
          <div className='modal-close-btn' onClick={closeModle}><button>✕</button></div>
          <div className='edit-modal-content' style={{ transform: idle }}>
            {children}
            {componentData ?
              <div style={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', position: 'relative',  }}>
                {loader && <div className='upload-page-loader' style={{ position: 'absolute' }}>
                  <div class="spinner-loader"></div>
                </div>}
                {componentName == 'swiper' ? 
                <div className="home-swiper" style={{flexDirection: 'column'}}>
                {componentData?.slides?.map((item, index) => {
                  return (
                    <>
                    
                    <div className={`slider ${slider === index + 1 ? 'active' : ''}`} style={{backgroundImage: `url(${item.bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}  >
                      <h5 style={{fontSize: '21px', fontWeight: 'lighter', margin: 0, textAlign: 'left', width: '90%' , color: item?.color}}>slider title <PenIcon size="15px" /> </h5>
                        <input type='text' style={{marginBlock: '1rem',width: '80%', border: `1px solid ${item?.color}`, backgroundColor: 'transparent', textAlign: 'left', padding: '1rem', display: 'inline',   outline: 'none', color: "#9b9b9b" }} value={item.title} onChange={(e) => handleTitleChange(index, e.target.value)} /> 

                      <h5 style={{fontSize: '21px', fontWeight: 'lighter', margin: '1rem', textAlign: 'left', width: '90%' , color: item?.color }}>slider subtitle  <PenIcon size="15px" /> </h5>
                         <input type='text' style={{marginBlock: '1rem', width: '80%', border: `1px solid ${item?.color}`,backgroundColor: 'transparent', textAlign: 'left', padding: '1rem', display: 'inline',   outline: 'none', color: "#9b9b9b" }} value={item.description} onChange={(e) => handleDescriptionChange(index, e.target.value)} />
                      <h5 style={{fontSize: '21px', fontWeight: 'lighter', margin: '1rem', textAlign: 'left', width: '90%' , color: item?.color }}>text color  <PenIcon size="15px" /> </h5>
                         <input type='text' style={{marginBlock: '1rem', width: '80%', border: `1px solid ${item?.color}`,backgroundColor: 'transparent', textAlign: 'left', padding: '1rem', display: 'inline',   outline: 'none', color: "#9b9b9b" }} value={item.description} placeholder='enter' onChange={(e) => handleDescriptionChange(index, e.target.value)} />
                      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
                        <h5 style={{fontSize: '21px', fontWeight: 'lighter', margin: '1rem', textAlign: 'left', color: item?.color }}>change image  <PenIcon size="15px" /> </h5>
                        <input style={{display: 'inline'}} type='file' onChange={(e) => { handleFileChange(e); }} />
                        {(file && slider == index + 1)  && <button onClick={() => handleImageChange(index, item.bg)}>upload image</button>}
                        
                      </div>

                    </div>
                    </>
                  )
                })}
                 <div className="indicator">
                  {componentData?.slides?.map((_, index) => (
                          <div
                              key={index}
                              className={`dot ${slider === index + 1 ? 'on' : ''}`}
                              onClick={() => setSlider(index + 1)}
                          ></div>
                      ))}
                  </div>
                {/* <div style={{display:'flex', flexDirection: 'column', width: '100%'}}>
                  <h2> Add a new slider </h2>
                  <input placeholder='title  ....' />
                  <input placeholder='subtitle .........'/>
                  <p>save to take effect</p>
                </div> */}
              </div> :
              <>
              </>
              }
                <>
                  {componentName === 'testimonials' ? (
                    <>
                   { componentData.map((item, index) => (
                      <div key={index} style={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginBottom: '2rem' }}>
                        <h5 style={{ margin: 0, textAlign: 'left' }}>qoute <PenIcon size="15px" /> </h5>
                        <input type='text' style={{ textAlign: 'left', padding: '1rem', display: 'inline', flex: 1 }} value={item.title} onChange={(e) => handleTitleChange2(index, e.target.value)} />
                        <h5 style={{ margin: 0, textAlign: 'left' }}>author <PenIcon size="15px" /> </h5>
                        <input type='text' style={{ textAlign: 'left', padding: '1rem', display: 'inline', flex: 1 }} value={item.author} onChange={(e) => handleDescriptionChange2(index, e.target.value)} />

                        
                      </div>

                    ))
                    }
                    <input type='text' style={{ textAlign: 'left', padding: '1rem', display: 'inline', flex: 1 }}  />
                    <input type='text' style={{ textAlign: 'left', padding: '1rem', display: 'inline', flex: 1 }}  />
                    <DefaulBtn secondary title="ADD NEW" styles={{margingBottom: '2rem', width: 200}}/>
                    </>
                  ) : (
                    <></>
                  )}
                  
                </>
                {componentName === 'insights' ? 
                <>
                  <div className='insights_wrapper'>
                        {componentData?.map((element, index) => {
                            return(
                                <div className='insight-element' key={index}> 
                                    
                                    <div className='flare'></div>
                                    
                                        <img src={element.img} />
                                    
                                    <input type='date' style={{border: 'none', padding: '.5rem', fontSize: 12, width: '100%', borderBottom: '1px solid black'}} placeholder={ element.date}/>
                                    
                                    <input style={{border: 'none', padding: '.5rem', fontSize: 24, width: '100%', borderBottom: '1px solid black'}} placeholder={element.title}/>
                                    
                                    
                                </div>
                            )
                        })}
                       
                  </div>
                </> : <></>}

                {componentName === 'fyw' ? <> 
                <h2>title</h2>
                <input style={{padding: '1rem'}} type='text' name='title' value={componentData?.title} onChange={handleChageFyw}/>
                <h2>text: </h2>
                <input style={{padding: '1rem'}} type='text' name='text' value={componentData?.text} onChange={handleChageFyw}/>
                <label htmlFor='choose-img'> choose Image</label>
                <input style={{padding: '1rem'}} type='file' id='choose-img' onChange={(e) => { handleFileChange(e); }}/>
                <DefaulBtn onpress={handleFywSubmit} secondary title="submit changes" />
                </> : <> </> }
              </div> : <div style={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                {Array.from({ length: 10 }, (_, index) => (
                  <SkeletonEditLoader key={index} />
                ))}
              </div>}
          </div>

          {!!componentData?.slides && <button  onClick={handleUpdateSwiperSubmit} style={{ padding: '.5rem', position: 'absolute', bottom: 10 }}> SUBMIT CHANGES</button>}
          
          {Array.isArray(componentData) && <DefaulBtn title="SUBMIT CHNAGES NOW !!!" onpress={handleTestimnialSubmit} />}

        </div>
      </div>
    </>
  )
}

export default EditModal;