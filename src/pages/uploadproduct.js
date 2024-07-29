import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/pages/uploadpage.css'
import Rating from 'react-rating';
import { StarIcon } from '../components/widgets';
import DragAndDrop from '../components/DragAndDrop';
/* const account_identifier = '7df61279e54b624e190dda435068ac92';
const url = `https://api.cloudflare.com/client/v4/accounts/${account_identifier}/images/v1`;
const apiKey = 'GKJpaiEgp-3cqNN0W4TR58rTW7XxsKCeGCUms_Ds';
const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'multipart/form-data'
  }; */
export const cats = ['YOUNGSTER', 'well-being', 'mixologist', 'gensis-well', 'mom-club', 'leaves-beans', 'functional-drinks', 'essentials', 'be-youty', 'b-helthy'];

const Filled = () => (
    <svg width="20" height="20" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="#6EEFEE" stroke-width="10" fill="none" />

        <circle cx="100" cy="100" r="70" fill="#6EEFEE" stroke="none" />
    </svg>
);
const Empty = () => (
    <svg width="20" height="20" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="#6EEFEE" stroke-width="10" fill="none" />

        <circle cx="100" cy="100" r="70" fill="none" stroke="none" />
    </svg>
);



const Select = ({ options, value, color, setActiveSelect, index, active, setCategory, setSubCat, name }) => {
    const onSelectChage = (e) => {
        setActiveSelect(index);
        setCategory();
        setSubCat(e.target.value)
    }
    return (
        <select className={`cat-selector ${active ? 'active' : ''}`} style={{ width: '200px', border: `1px solid ${color}` }} onSelect={(options.length) > 0 ? () => {} :() => { setActiveSelect(index); setSubCat('')} } onChange={onSelectChage} >
            {options.length > 0 ?
                <>

                    <option value={name}>{name}</option>
                    {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </>
                : 
                <>
                <option value={name}>{name} </option>
                <option value={name}>{name} </option>
                
                </>
            }
        </select>
    );
};




async function fetchCats() {
    try {
        const response = await axios.get('https://api.thehydrologist.com/fetch-cats.php');
        const allProducts = response.data;
        return allProducts;
    } catch (error) {
        throw error;
    }
}
function wordToArray(str) {
    // Split the string using comma as the separator
    const wordsArray = str.split(',');

    // Trim whitespace from each word
    const trimmedArray = wordsArray.map(word => word.trim());

    return trimmedArray;
}

function extractPropertyFromArray(arrayOfObjects, property) {
    return arrayOfObjects.map(obj => obj[property]);
}



function removeDuplicateObjectsAndSort(arr) {
    // Create an empty object to store unique objects based on the cat_name key
    const uniqueMap = {};

    // Iterate through the array
    for (const obj of arr) {
        // Use the cat_name value as the key in the uniqueMap
        const catName = obj.cat_name;

        // Check if the cat_name value already exists in the uniqueMap
        if (!uniqueMap[catName]) {
            // If it doesn't exist, add the object to the uniqueMap
            uniqueMap[catName] = obj;
        }
    }

    // Extract the values from the uniqueMap to get the unique objects
    const uniqueArray = Object.values(uniqueMap);

    // Sort the uniqueArray based on the cat_order key
    uniqueArray.sort((a, b) => a.cat_order - b.cat_order);

    return uniqueArray;
}

function ProductUpload({ row, zIndex }) {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [categires, setCategories] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [errorMsg, setErrMsg] = useState('');
    const [txt, setTxt] = useState('');
    const [loader, setLoader] = useState(false);
    const [category, setCategory] = useState('');
    const [contentArray, setContentArray] = useState([]);
    const [subCat, setSubCat] = useState();

    const [values, setValues] = useState({
        price: parseFloat(row[4]),
        name: row[0] || "",
        rating: parseFloat(row[11]) || "",
        quantity: row[5] || "",
        description: row[2] || "",
        category: row[1] || "",
        brand: row[7] || "",
        volum: row[6] || "",
        package: row[8] || "",


    });
    const [newArrival, setNewArrival] = useState(row[10] || "");
    const [exectiveLounge, setExective] = useState(row[9] || "");
    const [content, setContent] = useState(row[3] || "");
    const [acitve, setActive] = useState(false);
    const [step, setStep] = useState(1);
    const [contentObjects, setContentObjects] = useState([]);
    const [activeSelect, setActiveSelect] = useState([]);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
    };

    /*   useEffect(() => {
          setImageUrl(file);
          console.log(file)
      }, [file]) */

    useEffect(() => {
        fetchCats()
            .then((cats) => {
                // Log the JavaScript object

                cats.forEach(function (category, i) {

                    setCategories((prevCats) => [...prevCats, category]);


                });
                /*   Promise.all(cats.map(async (cat) => {
                      const subcats = JSON.parse(cat?.cat_subs || '[]');
                      const onSub = subcats.map(subcat => subcat?.cat_name);
                      await setCatSubs(prev => [...prev, ...onSub]);
                  }));
  
   */

                // console.log   (extractPropertyFromArray(JSON.parse(cats[0].cat_subs), 'cat_name' ))
                //console.log(cats[0].cat_subs)
                // Update state with the fetched products
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [])



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };


    const handleUploadImage = async () => {
        setTxt('Uploading image...');
        const formData = new FormData();
        formData.append('image', file);
        if (file == null) {
            console.log(file)
            return;
        }
        try {

            const response = await axios.post('https://api.thehydrologist.com/post-img.php', formData);
            setTxt('→ image upload success');
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(error);

            setTxt('failed to upload image')
        }

    };


    const handleUploadData = async (uploadedImageUrl) => {
        setTxt('uploading product data ...');
        let price = values.price
        const formData = new FormData();
        formData.append('price', price);
        formData.append('name', values.name);
        formData.append('imageurl', uploadedImageUrl);
        formData.append('rating', values.rating);
        formData.append('quantity', values.quantity);
        formData.append('description', values.description);
        formData.append('category', category);
        formData.append('newArrival', newArrival);
        formData.append('exctLoung', exectiveLounge);
        formData.append('content', JSON.stringify(contentObjects));
        formData.append('brand', values.brand);
        formData.append('volum', values.volum);
        formData.append('package', values.package);
        formData.append('subCat', subCat);



        try {
            const response = await axios.post('https://thehydrologist.com/post-product.php', formData);
            setTxt('product data uploaded succesfully ...');

        } catch (error) {
            console.error(error);
            setTxt('something went wrong data did not upload');
        }
    }

    const handleUploadAll = async () => {
        setLoader(true);
        if (file == '' || values.name == '' || values.price == '' || category == '') {
            setErrMsg('please fill the neccerry fields before');
            setLoader(false);
            return;
        }

        try {
            const uploadedImageUrl = await handleUploadImage(); // Wait for image upload
            if (uploadedImageUrl) {
                await handleUploadData(uploadedImageUrl); // Wait for data upload

                setLoader(false);
                setValues({
                    price: '',
                    name: '',
                    rating: '',
                    quantity: '',
                    description: '',
                    category: ''
                });
                setCategory('')
                setFile('')
                setStep(3)

                // Both image and data have been uploaded successfully
            } else {
                console.error('Image upload failed');

                setLoader(false);
                setStep(4)
            }
        } catch (error) {
            console.error(error);
            setStep(4)

            setLoader(false);

        }
    }
    useEffect(() => {
        setContentArray(wordToArray(content))
    }, [content])
    const handleSettingContent = () => {
        setActive(false);
    }

    const handleModContent = (val, i) => {
        if (val != '') {
            let k = {
                ingredient: contentArray[i],
                value: val,
                change: false
            }
            setContentObjects(prevItems => {
                const itemIndex = prevItems.findIndex(item => item.ingredient === k.ingredient);
                if (itemIndex !== -1) {
                    // If item exists, update it
                    const updatedItems = [...prevItems];
                    updatedItems[itemIndex] = k;
                    return updatedItems;
                } else {
                    // If item doesn't exist, add it
                    return [...prevItems, k];
                }
            });

        }
    }
    const handleChangeRating = (i) => {
        if (contentObjects[i]?.ingredient) {
            setContentObjects(prevItems => {
                let updatedItem = [...prevItems];
                updatedItem[i].change = true;
                return updatedItem;

            });

        }



    }



    /*  useEffect(() => {
         console.log(values)
     }, [values]);
  */
    const handleRatingChange = (e, i) => {

        if (contentObjects[i]?.value) {
            let k = {
                ingredient: contentArray[i],
                value: e.target.value,
                change: false
            }
            setContentObjects(prevItems => {
                const itemIndex = prevItems.findIndex(item => item.ingredient === k.ingredient);
                if (itemIndex !== -1) {
                    // If item exists, update it
                    const updatedItems = [...prevItems];
                    updatedItems[itemIndex] = k;
                    return updatedItems;
                } else {
                    // If item doesn't exist, add it
                    return [...prevItems, k];
                }
            });
        }

    }

    const SmallInput = ({ handleRatingChange, i }) => {
        const [ratigValue, setratigValue] = useState('');
        return <input type='number' style={{ width: 40, border: '1px solid black' }} onChange={(e) => { setratigValue(e.target.value); handleRatingChange(e, i) }} value={ratigValue} />
    }
    return (
        <div className='upload-page' style={{ width: '100%', zIndex, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
            {loader && <div className='upload-page-loader' >
                <div class="spinner-loader"></div>
                <p style={{ fontSize: 18 }}>{txt}</p>
            </div>}

            <p style={{ color: 'red', textTransform: 'capitalize', width: '78%', textAlign: 'left' }}>{errorMsg}</p>
            <div style={{ height: 450, position: 'relative', overflow: 'visible', width: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBlock: 20, borderRadius: 12, margin: '10px', border: errorMsg ? '2px solid red' : '1px solid grey', padding: 20, }}>
                <div style={{ display: 'flex', position: 'absolute', top: 10, left: 20 }}>
                    <div className={`dot-style ${step == 1 ? 'fill' : ''}`}></div>
                    <div className={`dot-style ${step == 2 ? 'fill' : ''}`}></div>
                </div>

                {step == 1 ?
                    <>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse', transform: step == 1 ? 'translateX(0)' : 'translateX(-100%)', transition: 'all .5s linear' }}>


                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 2, textAlign: 'left', position: 'relative' }}>

                                <div style={{ display: 'flex' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', width: '90%', }}>
                                            <div style={{ flex: 3 }}>
                                                <label style={{ width: '90%', textAlign: 'left', marginBottom: -20 }}>Product name</label>
                                                <input style={{ width: '90%', borderRadius: 0 }} type='text' name='name' onChange={handleInputChange} value={values.name} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ width: '90%', textAlign: 'left', marginBottom: -20 }}>brand</label>
                                                <input style={{ width: '90%', borderRadius: 0 }} type='text' name='brand' onChange={handleInputChange} value={values.brand} />
                                            </div>

                                        </div>
                                        <div style={{ display: 'flex', width: '90%', }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <label style={{ marginTop: 5 }}>Initial priece:</label>
                                                <input type='number' name='price' style={{ borderRadius: 0, border: 0, borderBottom: '1px solid rgba(0, 0, 0, 0.3)', width: 100 }} value={values.price} />
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <label style={{ marginTop: 5 }}>Amount in Stock:</label>
                                                <input type='number' name='quantity' style={{ borderRadius: 0, border: 0, borderBottom: '1px solid rgba(0, 0, 0, 0.3)', width: 100 }} value={values.quantity} />
                                            </div>
                                        </div>

                                        <DragAndDrop selectedImage={selectedImage} setSelectedImage={setSelectedImage} file={file} setFile={setFile} />


                                        <p>{txt}</p>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ marginBottom: 10 }}>choose category for product: </h4>
                                        {/*  <div className='upload-product-cats' style={{ display: 'flex', flexWrap: 'wrap', width: '80%', marginBottom: '.7rem' }}>
                                            {
                                                categires.length > 0 &&
                                                <div>
                                                    {
                                                        removeDuplicateObjectsAndSort(categires)?.map((cat) => {
                                                            return (
                                                                <button onClick={() => setCategory(cat?.cat_id)} className={`${category == `${cat?.cat_id}` ? 'active' : ''}`} style={{ border: `1px solid ${cat?.cat_color}`, borderRadius: 12 }}>{cat?.cat_name}</button>

                                                            )
                                                        })
                                                    }
                                                </div>
                                            }

                                        </div> */}
                                        <div>
                                            {categires.length > 0 ?
                                                <>
                                                    {removeDuplicateObjectsAndSort(categires)?.map((cat, i) => {
                                                        return (
                                                            <Select setActiveSelect={setActiveSelect} active={activeSelect == i ? true : false} key={i} options={extractPropertyFromArray(JSON.parse(cat.cat_subs), 'cat_name')} color={cat.cat_color} index={i} setCategory={() => setCategory(cat?.cat_id)} setSubCat={setSubCat} name={cat?.cat_name} />
                                                        )
                                                    })}
                                                </>
                                                :
                                                <>
                                                </>
                                            }
                                        </div>
                                        <div>


                                            <label style={{ width: '82%', textAlign: 'left' }}>Main Contents:(write values seprated by comma)</label>
                                            {contentObjects.length != contentArray.length && <span style={{ color: 'orange', fontSize: 14, width: '90%', textAlign: 'left', background: "white", display: 'block', marginTop: 15, marginBottom: -19, marginRight: 15, transform: 'translateY(-5px)' }}>please set the quantities for all the content  click on the input field</span>}
                                            <input style={{ width: '81%', marginBlock: 20, border: contentObjects.length != contentArray.length ? '1px solid orange' : '1px solid black' }} type='text' name='content' onFocus={() => setActive(true)} onChange={(e) => setContent(e.target.value)} value={content} />
                                            <div className={`content-list ${acitve ? 'active' : ''}`} style={{ width: '88%', textAlign: 'left', position: 'relative', zIndex: 10 }}>
                                                <div>
                                                    {
                                                        contentArray.length > 0 &&
                                                        <>
                                                            {
                                                                contentArray.map((c, i) => {
                                                                    return (
                                                                        <div className='content-tag' style={{ display: 'flex', alignItems: 'center' }}>
                                                                            <p key={i}>{i + 1} &nbsp; - {c}</p>
                                                                            <div style={{ marginLeft: 'auto' }}></div>
                                                                            {
                                                                                (contentObjects[i]?.value && !contentObjects[i]?.change) ?
                                                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                                        <p style={{ margin: 4 }}>{contentObjects[i]?.value}</p>
                                                                                        <button style={{ border: 'none', background: 'transparent', textDecoration: 'underline' }} onClick={() => handleChangeRating(i)}>change</button>
                                                                                    </div> :
                                                                                    <>
                                                                                        <Rating
                                                                                            onClick={(val) => handleModContent(val, i)}
                                                                                            emptySymbol={<Empty className="icon" />}
                                                                                            fullSymbol={<Filled className="icon" />}
                                                                                        />
                                                                                        <SmallInput i={i} handleRatingChange={handleRatingChange} />
                                                                                    </>
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </>
                                                    }
                                                    {content && <button onClick={handleSettingContent} className='ok-btn'>ok</button>}
                                                </div>

                                            </div>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </>
                    : step == 2 ?
                        <>
                            <div style={{ width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 2 }}>
                                <div style={{ display: 'flex', width: '550px', marginRight: 'auto', alignItems: 'center' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ textAlign: 'left', }}>Price:</label>
                                        <input style={{ borderRadius: 0 }} type='number' name='price' onChange={handleInputChange} value={values.price} />

                                    </div>
                                    <div style={{ flex: 1, }}>
                                        <label style={{ width: '90%', textAlign: 'left', marginBottom: -20 }}>Initial Rating:</label>
                                        <span style={{ marginLeft: 45 }}>
                                            <Rating
                                                onChange={(v) => setValues((prev) => { let vals = { ...prev }; vals.rating = v; return vals })}
                                                emptySymbol={<StarIcon className="icon" />}
                                                fullSymbol={<StarIcon className="icon" fill />}
                                            />
                                            <span style={{ marginLeft: 5, color: 'green' }}>{values.rating}</span>

                                        </span>

                                    </div>

                                </div>


                                <div style={{ display: 'flex', width: '100%' }}>

                                    <label style={{ display: 'flex', alignItems: 'center', width: '90%', justifyContent: 'flex-start' }}>
                                        <input style={{ width: 'unset' }} type='checkbox' value={newArrival} onChange={() => { setNewArrival(!newArrival); console.log(newArrival) }} />
                                        <h4 style={{ width: '100%', textAlign: 'left', marginTop: 0 }}> New Arriaval</h4>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', width: '90%', justifyContent: 'flex-start' }}>
                                        <input style={{ width: 'unset' }} type='checkbox' value={exectiveLounge} onChange={() => setExective(!exectiveLounge)} />
                                        <h4 style={{ width: '100%', textAlign: 'left', marginTop: 0 }}>Exective lounge product</h4>
                                    </label>
                                </div>

                                <textarea style={{ width: '80%', height: 100, margin: 10, border: '1px solid black', marginRight: 'auto' }} placeholder='enter a description ....' type='text' name='description' onChange={handleInputChange} value={values.description} />

                                <h4 style={{ marginTop: 0, width: '90%', textAlign: 'left', marginRight: 'auto' }}> Additional Information</h4>
                                <div style={{ display: 'flex', width: '90%', marginRight: 'auto' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                        <label style={{ flex: 1, textAlign: 'left', display: 'block', }}>Volume:</label>
                                        <input style={{ flex: 6, borderRadius: 0, marginLeft: -10 }} type='text' name='vloum' onChange={handleInputChange} value={values.volum} />
                                        {/*  <select style={{ flex: 3, padding: 8, border: 'none', borderBottom: '1px solid' }} >
                                            
                                                                <option value="300ml">300ml</option>
                                                                <option value="500ml">500ml</option>
                                                                <option value="1L">1L</option>
                                                            </select> */}

                                    </div>
                                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', }}>
                                        <label style={{ flex: 1, textAlign: 'left' }}>Package:</label>
                                        <input style={{ flex: 6, borderRadius: 0 }} type='text' name='package' onChange={handleInputChange} value={values.package} />


                                    </div>

                                </div>
                            </div>
                        </>
                        : step == 3 ?
                            <div>
                                product uploaded successfully
                            </div>
                            :
                            <div style={{ color: 'red' }}>

                                product failed to upload try again
                            </div>

                }
                {step != 3 &&
                    <div style={{ display: 'flex', marginLeft: 'auto', marginBottom: 20, marginRight: 50 }}>
                        {step == 2 && <button onClick={() => setStep(1)} style={{ background: '#0083ff', color: '#fff', padding: 12, fontSize: 21, borderRadius: 12, paddingInline: 16, cursor: 'pointer', border: 'none', marginRight: 10 }}> Go back</button>}
                        <button onClick={step == 1 ? () => setStep(2) : handleUploadAll} style={{ background: '#0083ff', color: '#fff', padding: 12, fontSize: 21, borderRadius: 12, paddingInline: 16, cursor: 'pointer', border: 'none' }}>{step == 1 ? 'Next' : 'Upload'}</button>

                    </div>

                }

            </div>

        </div>
    );
}

export default ProductUpload;


