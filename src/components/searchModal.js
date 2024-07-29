import { useEffect, useState } from 'react';
import '../css/searchmodal.css'
import { DownArrow, EyeOfTruth, Loader } from './widgets';

function SearchModal ({toggleSearch}) {
    const [idle, setIdle ] = useState('translateY(-200px)');
    const [searhing, setSearching ] = useState(false);
    const [category, setCategory] = useState('ALL CATEGORIES');

    useEffect(() => {
        setTimeout(() => {
            setIdle('translateY(0px)')
        }, 100);
    }, []);
    const handleSearch = () => {
        setSearching(true);
    }

    const closeModle = () => {
        setIdle('translateY(-200px)')
        setTimeout(() => {
            toggleSearch()
        }, 500);
    }
    return (
        <>
        <div className="modal-backdrop"> </div>
        <div className="search-modal">
            <div className='search-modal-wrapper' >
            <div className='search-close-btn' onClick={closeModle}>X</div>
            <div className='search-modal-input' style={{transform: idle}}>
                <div className='search-cats'>
                    <h4>{ category }</h4> <DownArrow />
                    <ul>
                        <li onClick={() => setCategory('uncategoriesed')}>uncategoriesed</li>
                        <li onClick={() => setCategory('genesis water')}>genesis water</li>
                        <li onClick={() => setCategory('MIXOLOGIST')}>MIXOLOGIST</li>
                        <li onClick={() => setCategory('will BEING')}>will BEING</li>
                        <li onClick={() => setCategory('YOUNGSTER')}>YOUNGSTER</li>
                    </ul>
                </div>
                <input type='text' onChange={handleSearch}/>
                

                {searhing ? <Loader style={{animation: 'loader-rotate 1s linear infinite'}} /> : <EyeOfTruth /> }

            </div>

            </div>
        </div>
        </>
    )
}

export default SearchModal;