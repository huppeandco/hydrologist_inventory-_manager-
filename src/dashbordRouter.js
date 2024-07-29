import { Route, Routes } from 'react-router-dom';
import Inventory from './inventory';
import Categories from './categories';


function DashBoardRouter ({data, location}) {

    return (
        <>
     
      
        <Routes>
           
            <Route  path="/dashboard/inventory" element={<Inventory data={data}  />} />
            <Route  path="/dashboard/categories" element={<Categories data={data}  />} />
          
          
        </Routes>
  
      </>
    
    )
}


export default DashBoardRouter;