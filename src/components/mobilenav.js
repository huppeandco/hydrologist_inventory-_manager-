import { useEffect } from 'react';
import '../css/mobilenav.css'
import { EyeOfTruth } from './widgets'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RightArrow } from './widgets';

export function removeWordFromString(mainString, searchWord) {
    if (mainString.includes(searchWord)) {
        return mainString.replace(searchWord, '').trim();
    } else {
        return mainString;
    }
}
export function extractLastWordAfterArrow(inputString) {
    const arrows = inputString.split("->");
    
    if (arrows.length > 1) {
        return arrows.pop();
    } else {
        return null; // Return null or handle the case where "->" is not found
    }
}
function MobileNav ({toggleMbNav}) {
    const [ active, setActive ] = useState('')
    const [ activebtn, setActivebtn ] = useState('');
    const [ open, setOpen ] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setActive('active-nav');
            setTimeout(() => {
                setActivebtn('active-close-btn');
            }, 100)
        }, 100);
    },  []) ;
    const handleClose = () => {
        setActive('');
        setActivebtn('');
        setTimeout(() => {
            toggleMbNav()
        }, 300)
    }
    
    const toggleMenus = (word) => {
        let newWord = extractLastWordAfterArrow(word);
        if(newWord ) {
            open.includes(word) ? setOpen(removeWordFromString(open, newWord)) : setOpen(word);
        } else {
            open.includes(word) ? setOpen('') : setOpen(word);
        }

        console.log('remove: ' + newWord);
        console.log('from string: ' + open)

    }
    return (
        <>
        <div className="modal-backdrop" onClick={handleClose} onTouchMove={handleClose} style={{    backgroundColor: 'rgba(0,0,0,.6)'}}> </div>
        <div className={`mobile-nav ${active}`} >
           <div className='mobile-nav-container'>
            <div className='mobile-nav-search'>
                    <input type='text' placeholder='Type to Search ...' />
                    <EyeOfTruth size={20}/>
                    
                </div>
                <ul>
                        <li onClick={handleClose}><Link to='/'>HOME</Link></li>
                        <li >
                            <button onClick={() => {toggleMenus('categories')}} >CATEGORIES  <RightArrow /></button>
                          
                            <ul className={`${open.includes('categories') ? 'wide-open' : '' }`}>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->beyouty')}}>BEYOUTY  <RightArrow /></button>
                                    <ul className={`${open.includes('beyouty') ? 'sub-open' : '' }`}>
                                        <li >
                                            <button onClick={() => {toggleMenus('categories->beyouty->teas')}}> TEAS  <RightArrow /></button>
                                            <ul className={`${open.includes('teas') ? 'sub-open' : '' }`}>
                                                <li onClick={handleClose}><Link to='/products'>green tea</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <button  onClick={() => {toggleMenus('categories->beyouty->infusedwater')}}>INFUSED WATER <RightArrow /></button> 
                                            <ul className={`${open.includes('infusedwater') ? 'sub-open' : '' }`}>
                                                <li onClick={handleClose}><Link to='/products'>colleagen-water</Link></li>
                                                <li onClick={handleClose}><Link to='/products'>coconut-water</Link></li>
                                                <li onClick={handleClose}><Link to='/products'>lemon-water</Link></li>
                                                <li onClick={handleClose}><Link to='/products'>cucumber-infused-water</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <button onClick={() => {toggleMenus('categories->beyouty->naturaljuice')}}>NATURAL JUICES <RightArrow /></button> 
                                            <ul className={`${open.includes('naturaljuice') ? 'sub-open' : '' }`}>
                                                <li onClick={handleClose}><Link to='/products'>pomegranate juice</Link></li>
                                            </ul>
                                        </li>    
                                    </ul>
                                    
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->wellbeing')}}>WELL BEING<RightArrow /></button> 
                                    <ul className={`${open.includes('wellbeing') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>OXYGENATED WATER</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>sparkling-water</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>immunity boost drinks</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>electrolyte drink</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>vitamin-water</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>herbal & infused drinks</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>tea</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>mood-boost-water</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>alkaline water</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>antioxydant drinks</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>antioxydant drinks</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>hydrogen rich water</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>kombucha</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>kefir</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>adds on dietary supplements</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'></Link></li>    
                                    </ul>
                                </li>
                                <li>
                                   <button onClick={() => {toggleMenus('categories->gensis')}}> GENESIS WILL <RightArrow /></button> 
                                   <ul className={`${open.includes('gensis') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>spring water</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>mineral water</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>alkaline water genesis-will</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>sparkling water genesis will</Link></li>    
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->youngster')}}>YOUNGSTER <RightArrow /></button> 
                                    <ul className={`${open.includes('youngster') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>0 TO 3 YEARS</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>3 TO 18 YEARS</Link></li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->functional')}}>FUNCTIONAL DRINKS <RightArrow /></button> 
                                    <ul className={`${open.includes('functional') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>becool drinks</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>DE-STRESS DRINKS</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>WORKOUT DRINKS</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>ALTERNATIVE DRINKS TO SODAS</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>HEALTHY ENERGY DRINKS</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>isotonic-drinks</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>sodium rich drinks</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>HEALTHY MILK</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>ADDS-ON</Link></li>    
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->moms')}}>MOMS-CLUB <RightArrow /></button> 
                                    <ul className={`${open.includes('moms') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>vitamindrink</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>infused-water</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>organic juices</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>electrolytes water</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>Tea</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>kombucha </Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>organic milk </Link></li>    
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->mixo')}}>MIXOLOGIST <RightArrow /></button> 
                                    <ul className={`${open.includes('mixo') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>non alcoholic beers</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>non alcoholic champagne</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>non alcoholic spirits /liquors</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>non alcoholic cocktails / mocktails</Link></li>    
                                      
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->behealth')}}>B-HEALTHY <RightArrow /></button> 
                                    <ul className={`${open.includes('behealth') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>ORGANIC BEVERAGES</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>antioxydant beverages</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>natural-sirops</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>probiotic beverages</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'></Link></li>    
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->leavebeans')}}>LEAVES-BEANS <RightArrow /></button> 
                                    <ul className={`${open.includes('leavebeans') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>TEARAPY</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>BARISTA</Link></li>
                                        <li onClick={handleClose}><a></a></li>    
                                    </ul>
                                </li>
                                <li>
                                    <button onClick={() => {toggleMenus('categories->accessories')}}>ACCESSORIES <RightArrow /></button> 
                                    <ul className={`${open.includes('accessories') ? 'sub-open' : '' }`}>
                                        <li onClick={handleClose}><Link to='/products'>water bottle holders</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>WATER BOTTLES</Link></li>
                                        <li onClick={handleClose}><Link to='/products'>shakers</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>straws reusable straws</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>water filter</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>caps</Link></li>    
                                        <li onClick={handleClose}><Link to='/products'>ice cubes</Link></li>    
                                    </ul>
                                </li>
                            </ul>
                         
                        </li>
                        <li onClick={handleClose}><Link to='/shope'>SHOP</Link></li>
                        <li onClick={handleClose}><Link to='/insights'>INSIGHTS</Link></li>
                        <li onClick={handleClose}><Link to='/offers'>OFFERS</Link></li>
                        
                </ul>
                <div className={`close-mb-nav ${activebtn}`} onClick={handleClose}>
                    x
                </div>
           </div>
        </div>
        </>
    )
}


export default MobileNav;