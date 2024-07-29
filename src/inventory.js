import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom/dist";



const apiUrl = 'https://api.thehydrologist.com/get-all-products.php'
const catsUrl = 'https://api.thehydrologist.com/fetch-cats.php'

function Card({ children }) {
    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px', width: '100%', display: 'flex', marginBottom: 5 }}>
            {children}
        </div>
    )
}
function removeDuplicateObjects(array, key) {
    // If no key is provided, stringify the objects for comparison
    const uniqueObjects = key ? Array.from(new Map(array.map(item => [item[key], item])).values()) : Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
    return uniqueObjects;
}


async function fetchCats() {
    try {
        const response = await axios.get(catsUrl);
        const allProducts = response.data;
        return allProducts;
    } catch (error) {
        throw error;
    }
}
async function fetchProducts(url) {
    try {
        const response = await axios.get(url);
        const allProducts = response.data;
        return allProducts;
    } catch (error) {
        throw error;
    }
}
export default function Inventory({ categoriezed, setContent, setModProductQueryString }) {
    const [cats, setCats] = useState([]);
    const [prodcuts, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [catName, setCatName] = useState('');
    const [catUrl, setCatUrl] = useState('https://api.thehydrologist.com/get-all-products.php')
    useEffect(() => {


        fetchProducts(catUrl)
            .then((products) => {
                
                setProducts(products);
                setLoading(false)
                // Update state with the fetched products
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });


        fetchCats()
            .then((cats) => {
                // Log the JavaScript object

                cats.forEach(function (category) {

                    setCats((prevCats) => [...prevCats, category]);

                });

                // Update state with the fetched products
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

   
    const handleGetCat = (cat) => {
        setCatName(cat);
        setLoading(true);
        setCatUrl(`https://api.thehydrologist.com/get-all-products.php?cat=${cat}`);

        fetchProducts(catUrl)
            .then((products) => {
                console.log('Fetched products:', products); // Log the JavaScript object
                setProducts(products);
                setLoading(false)
                // Update state with the fetched products
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });

    }
    return (
        <div style={{padding: 12}}>
            <div style={{ display: 'flex', marginTop: 10, marginBottom: -10 }}>
                {
                    categoriezed &&
                    <>
                        {cats.length > 0 && removeDuplicateObjects(cats).map((cat) => {
                            return (
                                <button onClick={() => handleGetCat(cat.cat_name)} style={{ border: 'none', cursor: 'pointer', margin: 5, background: cat.cat_color, borderRadius: 10, padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <p style={{ margin: 0 }}>
                                        {cat.cat_name}

                                    </p>
                                </button>
                            )
                        })}
                    </>
                }

            </div>
            <div>
                <h2>{catName ? <>{catName}</> : <></>}</h2>
            </div>
            {prodcuts.length > 0 ?
                <>


                    {prodcuts?.map((product) => {

                        return (
                            <>
                                {/* <Link to={`product?name=${product.name}&img=${product.image}&id=${product?.id}`} style={{ cursor: 'pointer' }}> */}
                                    <div  onClick={() => { setModProductQueryString(`/product?name=${product.name}&img=${product.image}&id=${product?.id}`); setContent('mod-product');} } style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 9px 1px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 15, paddingLeft: 35, padding: 10, borderRadius: 2, marginRight: 20, boxSizing: 'border-box', textAlign: 'left', cursor: 'pointer' }}>
                                        <p style={{ width: 180, marginLeft: 20 }}>{product.name}</p>
                                        <img style={{ height: 100, width: 'auto', marginLeft: 20 }} src={product.image} />
                                        <p style={{ marginRight: '20px', marginLeft: 'auto' }}>edit</p>
                                    </div>

                               {/*  </Link> */}

                            </>
                        )
                    })}




                </> :
                <>
                    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="rect-loader"></div>
                        ))}
                    </div>
                </>
            }

        </div>
    )
}