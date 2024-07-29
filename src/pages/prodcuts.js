import { useState } from 'react';
import { InlineHeader } from '../components/widgets';
import '../css/pages/products.css';
import { useEffect } from 'react';


function Products () {
    const [title, setTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0,0);
        setTitle('Products');
    }, [])
    return (
        <div className='products'>
            <InlineHeader title={title} />
        </div>
    )
}

export default Products;