import { useContext, useEffect } from 'react';
import '../css/pages/prodcut.css';
import { CurrencySelector, DefaulBtn, StarRating, InputPlus, SkeletonTxtLoader, EditIcon, PenIcon } from '../components/widgets';
import { Facebook, Linkedin, Twitter } from '../components/floatSocial';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { ProductItem, sotreProducts } from '../components/store';
import { DataContext } from '../data';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { cats } from './uploadproduct';
import { useNavigate } from 'react-router-dom';

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/'
function randomSlice(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Input must be a non-empty array.");
    }

    const startIndex = Math.floor(Math.random() * array.length);
    const endIndex = Math.floor(Math.random() * array.length);

    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);

    return array.slice(start, end + 1);
}
function Product() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const img = urlParams.get('img');
    const priece = urlParams.get('priece');
    const quantity = urlParams.get('quantity');
    const id = urlParams?.get('id');




    const [activeTap, setActiveTap] = useState(1);
    const [productData, setProductData] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [DeleteRequest, setDeleteRequest] = useState(false);
    const [updatedData, setUpdatedData] = useState({

    })
    const [cats, setCats] = useState([]);
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    let data = useContext(DataContext);
    let cart = data.cart;
    let setPageLoader = data.setPageLoader;
    let setAlertMsg = data.setAlertMsg;
    let updateCart = data.updateCart;
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back one page
    };


    const deleteOldImage = async (identifier) => {
        const formData = new FormData();
        formData.append('identifier', identifier);
        try {

            const response = await axios.post('https://api.thehydrologist.com/api/delete-img.php', formData);
            console.log(response.data)
            return response.data;

        } catch (error) {
            console.error(error);


        }

    };
    useEffect(() => {
        setItems(cart);

    }, [cart]);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        setRelatedProducts(randomSlice(sotreProducts));


    }, []);

    useEffect(() => {
        async function fetchProducts() {

            try {
                const response = await axios.get(`https://api.thehydrologist.com/get-one-product.php?id=${id}`);
                const allProducts = response.data;
                setUpdatedData(response.data);

                return allProducts;
            } catch (error) {
                throw error;
            }
        }
        async function fetchCategories() {

            try {
                const response = await axios.get(`https://api.thehydrologist.com/fetch-cats.php`);
                const allProducts = response.data;
                setCats(response.data);

                return allProducts;
            } catch (error) {
                throw error;
            }
        }

        fetchCategories();
        fetchProducts()
            .then((products) => {
                // Log the JavaScript object

                setProductData(products);

            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });

    }, []);
    function extractImageIdentifier(url) {
        const parts = url.split('/');
        const index = parts.findIndex(part => part === 'public') - 1;
        return parts[index];
    }
    const handleDelete = async (productId) => {
        deleteOldImage(extractImageIdentifier(updatedData?.image));
        setPageLoader(true)
        try {
            const response = await axios.delete(`https://thehydrologist.com/api/delete-product.php?product-id=${productId}`);
            console.log('Product deleted successfully:', response.data);
            setPageLoader(false);
            handleGoBack();
            // You can add additional logic here, such as updating the component state
        } catch (error) {
            console.error('Error deleting product:', error);
            setPageLoader(false)
        }
    };

    const handleUploadImage = async () => {
        const formData = new FormData();
        formData.append('image', file);
        try {

            const response = await axios.post('https://api.thehydrologist.com/post-img.php', formData);

            return response.data;
        } catch (error) {
            console.error(error);

        }

    };


    const handleUpdateProduct = async () => {
        const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

        setPageLoader(true);
        let uploadedImageUrl = ''
        let newData = { ...updatedData }
        if (file) {
            const uploadedImageUrl = await handleUploadImage();
            newData.image = uploadedImageUrl;
        }
        if(category != '') {
            newData.category = category;

        }


        const jsonData = JSON.stringify(newData);
        try {
            const response = await axios.put(
                `https://thehydrologist.com/api/update-product.php`,
                jsonData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log('Product updated successfully:', response.data);
            setPageLoader(false);
            setAlertMsg({ visible: true, title: 'PRODUCT UPDATE', content: 'SUCESS' });
            setTimeout(() => {

                setAlertMsg({ visible: false, title: '', content: '' });

                handleGoBack();
            }, 2000)

        } catch (error) {
            console.error('Error updating product:', error);
            setPageLoader(false);
        }
    };

    useEffect(() => {
        setCategory(updatedData.category);
    }, [updatedData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    return (
        <div className='product'>
            <div className='product-item' style={{ alignItems: 'flex-start', marginTop: '4vw' }}>
                <div className="prodcut-img-view">
                    <Fade right duration={1500}>
                        <img src={updatedData?.image} />
                    </Fade>
                    <div style={{ alignSelf: 'flex-start', position: 'absolute', top: '50%', left: '0%', transform: 'translate(0%, -50%)', width: '100%', backgroundColor: '#00000052' }}>

                        <input type='file' id='fileInput' style={{ display: 'none' }} onChange={handleFileChange} />
                        <label htmlFor='fileInput' style={{ cursor: 'pointer' }}>
                            <EditIcon color="white" />
                        </label>

                    </div>

                </div>
                <div className='product-txt-view'>
                    {productData ? (<>
                        {!DeleteRequest && <button onClick={() => setDeleteRequest(true)} className='delete-btn'> X Delete Product</button>}
                        {DeleteRequest && <div >
                            <p>are you sure you want to delete <bold> <span style={{ textDecoration: 'underline' }}>{productData?.name}</span></bold> from stock</p>
                            <button onClick={() => { handleDelete(productData?.id) }} className='delete-btn'>Delete X</button>
                        </div>}
                        <h4>Change Name: <PenIcon size="12px" /></h4>
                        <input type='text' value={updatedData?.name} name='name' onChange={handleInputChange} /> <br />
                        <h4>description: <PenIcon size="12px" /></h4>
                        <textarea name='description' placeholder={updatedData?.description} rows={10} onChange={handleInputChange} contentEditable={true} />   </>) : (
                        <SkeletonTxtLoader />
                    )}

                    <h4>Change Price: <PenIcon size="12px" /></h4>
                    <input type='text' name='price' value={updatedData?.price} onChange={handleInputChange} />
                    <h4>Change instock: <PenIcon size="12px" /></h4>
                    <input type='number' name='quantity' value={updatedData?.quantity} onChange={handleInputChange} />
                    <h4>Change Categorey: <PenIcon size="12px" /></h4>
                    <div className='upload-product-cats' style={{ display: 'flex', flexWrap: 'wrap', width: '80%', marginBottom: '2rem' }}>
                        {
                            cats.length > 0 ?
                                <>
                                    {
                                        cats.map((cat, idx) => {
                                            return (
                                                <button key={idx} onClick={() => setCategory(cat.cat_id)} className={`${category == `${cat.cat_id}` ? 'active' : ''}`} style={{ border: `1px solid ${cat.cat_color}` }}>{cat.cat_name}</button>

                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                <h1> no kit cats sorry</h1>
                                </>

                        }

                    </div>
                    <DefaulBtn title="Submit Update" onpress={() => handleUpdateProduct()} />

                    <div className='product-footer'>
                        <div>
                            <p>SKU</p>
                            <p>Categorey</p>
                            <p>Share</p>
                        </div>
                        <div>
                            <p>N/A</p>
                            <p>{productData?.sub_cat}</p>
                            <div>
                                <Facebook />
                                <Twitter />
                                <Linkedin />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='product-additional'>
                <div className='additinal-taps p-bg-sc'>
                    <h2 className={`${activeTap == 1 ? 'active' : ''}`} onClick={() => { setActiveTap(1) }}>ADDITIONAL INFORMATION</h2>
                    <h2 className={`${activeTap == 2 ? 'active' : ''}`} onClick={() => { setActiveTap(2) }}> Review (0)</h2>
                </div>
                {
                    activeTap == 1 ? (
                        <>
                            <div className='addtional-info'>
                                <h2 className='p-sm-sc'>Additional Information </h2>
                                <div>
                                    <h4>Volume</h4>
                                    <h4>1L, 300ml, 500ml</h4>
                                </div>
                                <div>
                                    <h4> brand name</h4>
                                    <h4>{name}</h4>
                                </div>
                                <div>
                                    <h4>Packaging</h4>
                                    <h4>Glass, Pet, Can, Box</h4>

                                </div>
                            </div>
                            <div className='product-review p-sm-sc'>
                                <h2 className='p-sm-sc'> Reviews </h2>
                                <h4>Reviews</h4>
                                <p>There are no reviews yet.</p>
                                <h4>Be the first to review “Nooma (Copy)”</h4>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <h4>Your rating *</h4>
                                <StarRating />
                                <h4>Your review *</h4>

                                <div>
                                    <div>
                                        <label>Name *</label>
                                        <input type='text' />
                                    </div>
                                    <div>
                                        <label>Email *</label>
                                        <input type='text' />

                                    </div>
                                </div>
                                <textarea cols='30' rows="10">
                                </textarea>
                                <label style={{ marginTop: '1rem' }}>
                                    <input type='checkbox' />
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                                <DefaulBtn title="Submit" secondary styles={{ marginBlock: '1.5rem' }} />
                            </div>
                        </>

                    ) : (
                        <div className='product-review'>
                            <h2 className='p-sm-sc'> Reviews </h2>
                            <h4>Reviews</h4>
                            <p>There are no reviews yet.</p>
                            <h4>Be the first to review “Nooma (Copy)”</h4>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <h4>Your rating *</h4>
                            <StarRating />
                            <h4>Your review *</h4>

                            <div>
                                <div>
                                    <label>Name *</label>
                                    <input type='text' />
                                </div>
                                <div>
                                    <label>Email *</label>
                                    <input type='text' />

                                </div>
                            </div>
                            <textarea cols='30' rows="10">
                            </textarea>
                            <label style={{ marginTop: '1rem' }}>
                                <input type='checkbox' />
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                            <DefaulBtn title="Submit" secondary styles={{ marginBlock: '1.5rem' }} />
                        </div>
                    )
                }
            </div>
            <div className='related-products'>
                <h2>Related products</h2>
                <div className='related-products-container'>
                    <Swiper spaceBetween={0}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{ delay: 1500 }}
                        style={{ marginTop: 50 }}
                        pagination>
                        {relatedProducts.map((product) => {
                            return (
                                <SwiperSlide>
                                    <ProductItem name={product.name} image={product.image} rating={product.rating} priece={product.priece} />
                                </SwiperSlide>
                            )

                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Product;