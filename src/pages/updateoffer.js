import { useEffect } from "react";
import { InlineHeader } from "../components/widgets";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateOffer() {
    const [job, setJob] = useState({});
    const [loader, setLoader ] =useState(false);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        window.scroll(0, 0);
        const urlParams = new URLSearchParams(window.location.search);

        setJob({
            title: urlParams.get('title'),
            description: urlParams.get('desc'),
            type: urlParams.get('type'),
            footer: urlParams.get('footer'),
            priece: urlParams.get('priece'),
            image: urlParams.get('image'),
            limited: urlParams.get('limited'),
            dark: urlParams.get('dark'),
            id: urlParams?.get('id')

        });



    }, []);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setJob((prevState) =>({
                ...prevState,
                image: reader.result,
            }));
            console.log(reader.result)
        };
    };
    const handleUploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
         formData.append('image', file);
        try {
            
            const response = await axios.post('https://thehydrologist.com/api/post-img.php', formData);
            
            console.log(response.data)
            return response.data;
          } catch (error) {
            console.error(error);
        
          
        }
        
    };
   
    const handleUpdateOffer = async(e) => {
        setLoader(true);
        const uploadedImageUrl = await handleUploadImage(e);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        formData.append("image", uploadedImageUrl);
        formData.append("id", parseInt(job.id, 10));
        axios
            .post('https://thehydrologist.com/api/update-one-offer.php', formData)
            .then((response) => {
                // Handle the response if needed
                console.log('Response:', response.data);
                setLoader(false);
                navigate('/offers')
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJob((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    
    
    
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
             {loader && <div className='upload-page-loader' > 
            <div class="spinner-loader"></div>
            </div>}
            <InlineHeader title={`Update offer 👉  ${job?.title}`} showTitle />
            <form onSubmit={handleUpdateOffer} style={{ width: '80%', display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="text" name="title" onChange={handleInputChange} value={job?.title} />
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="text" name="description" onChange={handleInputChange} value={job?.description} />
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="text" name="type" onChange={handleInputChange} value={job?.type} />
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="text" name="footer" onChange={handleInputChange} value={job?.footer} />
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="text" name="priece" onChange={handleInputChange} value={job?.priece} />
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="text" name="limited" onChange={handleInputChange} value={job?.limited} />
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="file" name="view" onChange={handleFileChange}  />
                <img src={job?.image} style={{width: 300, height: 'auto'}}/>
                <label class="switch">
                    <input type="checkbox" checked={job?.dark} />
                    <span class="slider round"></span>
                </label>
                <input style={{ marginBlock: 10, padding: 10, width: 300 }} type="submit" value="OK FAM" />
            </form>
        </div>
    )
}

export default UpdateOffer