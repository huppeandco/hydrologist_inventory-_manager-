import { useEffect,useState } from "react";
import { InlineBanner } from "./lounge";
import { DefaulBtn, PenIcon } from "../components/widgets";
import '../css/pages/affiliate.css';
import axios from "axios";



function Affiliate() {
    const [pageData, setPageData] = useState([]);
    const [loader, setLoader ] = useState(false);
    const [edits, setEdits] = useState({
        banner_img: false,
        banner_txt: false,
        banner_btn_txt: false,
        page_paragraph: false,
        page_list_title: false,
        page_list: [false, false, false],

    });

    const getAllData = async () => {
        try {
            const response = await axios.get('https://thehydrologist.com/api/get-page.php', {
                params: {
                    pageName: 'affiliate',
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

    const handleInputChange = (e,index) => {
        setPageData((prevValues) => {
            const updatedValues = { ...prevValues };
    
            if (index >= 0) {
                // Check if page_list is a valid key in the values object
                if ('page_list' in updatedValues) {
                    const list = [...updatedValues.page_list];
                    list[index] = e.target.value;
    
                    return {
                        ...prevValues,
                        page_list: list,
                    };
                }
            } else {
                const { name, value } = e.target;
                updatedValues[name] = value;
    
                return updatedValues;
            }
    
            return prevValues;
        });
    };


    const HandleEditToggler = (name) => {
        setEdits((prevState) => {
            if (name.startsWith('page_list[') && name.endsWith(']')) {
                // Extract the index from the name string
                const index = parseInt(name.match(/\[(\d+)\]/)[1]);
                
                if (!isNaN(index)) {
                    // If it's a valid index, toggle the specific item in the page_list array
                    const updatedList = [...prevState.page_list];
                    updatedList[index] = !prevState.page_list[index];
    
                    return {
                        ...prevState,
                        page_list: updatedList,
                    };
                }
            } else {
                // For other keys, toggle the boolean value directly
                return {
                    ...prevState,
                    [name]: !prevState[name],
                };
            }
        });
    }
    const handElementSubmit = (name, index) => {
        setLoader(true);
        console.log(name)
        HandleEditToggler(name);
        let jsonStringified = JSON.stringify(pageData);
        const formData = new FormData();
        formData.append('pageName', 'affiliate');
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

    return (
        <div className="affiliate_page">
            <InlineBanner img={pageData?.banner_img} text={edits.banner_txt ? "" :  pageData?.banner_txt} btnText={pageData?.banner_btn_txt}>
            {edits.banner_txt && <input type="text" value={pageData?.banner_txt} name="banner_txt"  onChange={handleInputChange}/> }
            {edits.banner_txt && <button onClick={ () => handElementSubmit('banner_txt')}> submit</button> }
             {!edits.banner_txt && <button onClick={ () => handElementSubmit('banner_txt')}>
                 <PenIcon size={20}  />
                </button> }
            </InlineBanner>
            <div className="affiliate_page-container" >
                <div>
                   
                    {edits.page_paragraph ? (
                        <div style={{ position: 'relative', zIndex: 100 }}>
                             <textarea name='page_paragraph' onChange={handleInputChange} value={pageData?.page_paragraph} style={{ width: '500px', height: 100, margin: 10 }} > </textarea>

                            <button onClick={() => handElementSubmit("page_paragraph")}>Submit</button>
                        </div>
                    ) : (
                        <p onClick={() => handElementSubmit("page_paragraph")}>
                        {pageData?.page_paragraph} <PenIcon size={20}/>
                        </p>
                    )}
                    <h5 style={{ textAlign: 'left', width: '80%', color: '#626262' }}>{pageData?.page_list_title}</h5>
                    <ul style={{ textAlign: 'left', width: '80%', color: '#626262', lineHeight: '2rem' }}>
                    {pageData?.page_list?.map((item, index) => {
                        return(
                            
                            <>
                            {edits.page_list[index] ? (
                                <div style={{ position: 'relative', zIndex: 100 }}>
                                     <input name='page_paragraph' onChange={(e)=> handleInputChange(e, index)} value={pageData?.page_list}  /> 
        
                                    <button onClick={() => handElementSubmit(`page_list[${index}]`, index)}>Submit</button>
                                </div>
                            ) : (
                                <li onClick={() =>  handElementSubmit(`page_list[${index}]`, index)}>
                                {pageData?.page_list} <PenIcon size={20} />
                                </li>
                            )}
                            </>
                        )
                    })}
                    </ul>
                    <DefaulBtn title="Apply Now" noCap styles={{ alignSelf: 'flex-start', marginLeft: '10%', marginTop: '10%' }} secondary />
                </div>
                <div style={{ flex: 1 }}>
                    <img style={{  width: 'auto' }} src="https://woocommerce-815504-2799229.cloudwaysapps.com/wp-content/uploads/2023/06/affiliate.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Affiliate;