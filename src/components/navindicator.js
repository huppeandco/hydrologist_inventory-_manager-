import { useLocation } from "react-router-dom";
import { HomeIcon } from "./widgets";
import { useContext } from "react";
import { DataContext } from "../data";
import { useEffect } from "react";





function NavIndicator () {
    let location = useLocation();
    let title = useContext(DataContext).NavIndicatorState;
    title = title || location.pathname.substring(1);

    
    return(
        location.pathname != '/' ? (
        <div className="nav-indicator" style={{width: '100%', color: '#7E7E7E', backgroundColor: '#f5f5f5',
        display: 'flex', alignContent: 'center', justifyContent: 'center', paddingBlock: '.5rem', marginTop: '80px'}}>
                <HomeIcon size={25} opation={2} color={'#575757'} move={-5.5}/>
                <h2 style={{fontSize: '14px', marginBlock: 0, fontWeight: 'lighter'}}><span>&nbsp;&nbsp; Home&nbsp;&nbsp; </span>  &nbsp;{`${title}`}</h2>
        </div>

        ) : <></>
    )
}

export default NavIndicator;