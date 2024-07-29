import { Store } from "../components/store";
import { FilterBy, InlineHeader, Paginations } from "../components/widgets";
import {  useState } from "react";
import '../css/pages/shope.css'
import { useEffect } from "react";
import {sotreProducts } from '../components/store';
import axios from 'axios';
import SkeletonLoader from "../components/skeleton-loader";
const apiUrl = 'https://api.thehydrologist.com/get-all-products.php'

function Shope () {
    const [currentPage, setCurrentPage] = useState(1);
    const [ prodcuts, setProducts ] = useState([])
    
 
    useEffect(() => {
      window.scrollTo(0,0);
  },[]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(apiUrl);
        const allProducts = response.data;
        return allProducts;
      } catch (error) {
        throw error;
      }
    }
  
    fetchProducts()
      .then((products) => {
        console.log('Fetched products:', products); // Log the JavaScript object
        setProducts(products);
         // Update state with the fetched products
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

    return (
        <div className="shope">
            <InlineHeader title='Shop' />
            <FilterBy />
            <div className="shope_store">
            {prodcuts.length > 0 ? (<Store productsData={prodcuts}/>) : (<SkeletonLoader />) }
         
            
            <Paginations totalPages={100} currentPage={currentPage} onPageChange={handlePageChange}  />
            </div>
        </div>
    )
}


export default Shope;