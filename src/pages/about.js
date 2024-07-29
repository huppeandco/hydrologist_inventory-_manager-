import { Parallax } from 'react-parallax';
import { InlineHeader } from '../components/widgets'
import { useEffect, useRef, useState } from 'react';
import '../css/pages/about.css'
import axios from 'axios';
import { PenIcon } from '../components/widgets';

function About() {
    const [pageData, setPageData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [edits, setEdits] = useState({
        page_title: false,
        About_us_title: false,
        About_us_body: false,
        our_story_title: false,
        our_story_body: false,
        our_team_title: false,

    });

    const getAllData = async () => {
        try {
            const response = await axios.get('https://thehydrologist.com/api/get-page.php', {
                params: {
                    pageName: 'about',
                    lang: 'eng'
                }
            });
            setPageData(response.data);
        } catch (error) {
            console.error('Error retrieving page data:', error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getAllData();
    }, []);
    const HandleEditToggler = (name) => {
        /*    let newToggler = edits;
   
           newToggler[`${name}`] = !edits[`${name}`];
           setEdits({ ...newToggler })
           console.log(edits[`${name}`]) */

        setEdits((prevState) => {
            const updatedState = { ...prevState, [name]: !prevState[name] };
            return updatedState;
        });

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPageData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };





    const handElementSubmit = (name) => {
        setLoader(true);
        HandleEditToggler(name);
        let jsonStringified = JSON.stringify(pageData);
        const formData = new FormData();
        formData.append('pageName', 'about');
        formData.append('lang', 'eng');       // Replace with the actual page name
        formData.append('pageContent', jsonStringified);


        axios.post('https://thehydrologist.com/api/update-pages.php', formData)
            .then(response => {
                console.log(response.data);
                setLoader(false);
                getAllData();
            })
            .catch(error => {

                console.error('Error:', error);

            });
    }

    useEffect(() => {
        console.log(pageData)
    }, [pageData])
    return (
        <div className='about' style={{ position: 'relative' }}>
            {loader && <div className='upload-page-loader' style={{ position: 'absolute' }}>
                <div class="spinner-loader"></div>
            </div>}
            <InlineHeader title={pageData?.page_title} DontshowTitle={edits.page_title} >
                {edits.page_title && <input value={pageData?.page_title}name='page_title' onChange={handleInputChange}/>}
                {edits.page_title &&<button  onClick={() => handElementSubmit("page_title")}>submit</button> }
                <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => handElementSubmit("page_title")}>
                    edit <PenIcon size={21} />
                </button>
            </InlineHeader>
            <Parallax
                bgImageSizes='cover'
                bgImage={require('../assets/backgrounds/1-about-us-.jpg')}
                bgImageAlt="the dog"
                strength={-200}


            >
                <div className='darken-bg'></div>
                <div style={{ height: '70vh', width: '100%' }} />


            </Parallax>
            <Parallax

                bgImage={require('../assets/backgrounds/2-about-us.jpg')}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='about-section' >
                    <div className='darken-bg'></div>
                    {edits.About_us_title ? (
                        <div style={{ position: 'relative', zIndex: 100 }}>
                            <input onChange={handleInputChange} name='About_us_title' value={pageData?.About_us_title} />

                            <button onClick={() => handElementSubmit("About_us_title")}>Submit</button>
                        </div>
                    ) : (
                        <h2 onClick={() => HandleEditToggler("About_us_title")} style={{ cursor: 'pointer' }}>
                            {pageData?.About_us_title} <PenIcon size={24} />
                        </h2>
                    )}
                    {edits.About_us_body ? (
                        <div style={{ position: 'relative', zIndex: 100 }}>
                            <textarea name='About_us_body' onChange={handleInputChange} value={pageData?.About_us_body} style={{ width: '500px', height: 100, margin: 10 }} > </textarea>
                            <button onClick={() => handElementSubmit("About_us_body")} style={{ width: '100%' }} >Submit</button>
                        </div>
                    ) : (
                        <p onClick={() => HandleEditToggler("About_us_body")} style={{ cursor: 'pointer' }}>
                            {pageData?.About_us_body} <PenIcon size={24} />
                        </p>
                    )}



                </div>
            </Parallax>
            <Parallax

                bgImage={require('../assets/backgrounds/3-about-us.jpg')}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='about-section'>
                    <div className='darken-bg'></div>

                    {edits.our_story_title ? (
                        <div style={{ position: 'relative', zIndex: 100 }}>
                            <input name='our_story_title' onChange={handleInputChange} value={pageData?.our_story_title} />
                            <button onClick={() => handElementSubmit("our_story_title")}>Submit</button>
                        </div>
                    ) : (
                        <h2 onClick={() => HandleEditToggler("our_story_title")} style={{ cursor: 'pointer' }}>
                            {pageData?.our_story_title} <PenIcon size={24} />
                        </h2>
                    )}



                    {edits.our_story_body ? (
                        <div style={{ position: 'relative', zIndex: 100 }}>
                            <textarea onChange={handleInputChange} name='our_story_body' value={pageData?.our_story_body} style={{ width: '500px', height: 100, margin: 10 }} > </textarea>
                            <button onClick={() => handElementSubmit("our_story_body")} style={{ width: '100%' }} >Submit</button>
                        </div>
                    ) : (
                        <p onClick={() => HandleEditToggler("our_story_body")} style={{ cursor: 'pointer' }}>
                            {pageData?.our_story_body} <PenIcon size={24} />
                        </p>
                    )}

                </div>
            </Parallax>
            <Parallax

                bgImage={require('../assets/backgrounds/4-about-us.jpg')}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='about-section'>
                    <div className='darken-bg'></div>
                   
                    {edits.our_team_title ? (
                        <div style={{ position: 'relative', zIndex: 100 }}>
                            <input onChange={handleInputChange} name='our_team_title' value={pageData?.our_team_title} />

                            <button onClick={() => handElementSubmit("our_team_title")}>Submit</button>
                        </div>
                    ) : (
                        <h2 onClick={() => HandleEditToggler("our_team_title")} style={{ cursor: 'pointer' }}>
                            {pageData?.our_team_title} <PenIcon size={24} />
                        </h2>
                    )}

                    <div className='about-team'>
                        {pageData?.our_team?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item.pic} />
                                    <h4>{item.name} </h4>
                                    <p>{item.position}</p>
                                </div>

                            )
                        })}


                    </div>

                </div>
            </Parallax>
        </div>
    )
}
export default About;