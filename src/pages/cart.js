import { useContext, useEffect, useState } from 'react';
import { InlineHeader, InputPlus } from '../components/widgets';
import '../css/pages/cart.css';
import { DataContext } from '../data';


/* <td><Counter
count={item.quantity} 
setCount={(newCount) => {
// Update the quantity of the specific item in the 'Items' array
const updatedItems = [...Items];
updatedItems[index].quantity = newCount;
setItems(updatedItems); // Assuming you have a state setter function like setItems to update the state
}} /></td> */

function Cart () {
   let data = useContext(DataContext);
   let cart = data.cart
   let handleDeleteFromCart = data.handleDeleteFromCart;
   const [items, setItems] = useState([]);
   useEffect(() => {
    setItems(cart);

   }, [cart]);
   let updateCart = data.updateCart;

    const IncressCount = (index) => {
       
            const updatedCart = [...items];
            updatedCart[index].quantity = updatedCart[index].quantity + 1;
            updateCart(updatedCart);
        
    }
    const DisgressCount = (index) => {
        const updatedCart = [...items];
        updatedCart[index].quantity = updatedCart[index].quantity - 1;
        updateCart(updatedCart);
    }
    
    const handleRemoveItem = (item) => {
        
        handleDeleteFromCart(item)
      }
    return (
        <div className='cart'>
            <InlineHeader title='Cart' />
            <form>
                <table>
                    <thead>
                        <tr>
                            <th className='product-remove'></th>
                            <th className='product-thumbnail'></th>
                            <th>
                                <h2>Product</h2>
                                </th>
                            <th>
                            <h2> Priece</h2>
                                </th>
                            <th>
                                <h2>quantity</h2>
                                </th>
                            <th>
                                <h2>  subtotal</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td><button onClick={(e) => { e.preventDefault();handleRemoveItem(item.productName); }}>X</button></td>
                                    <td>
                                        <img src={item.productImage} />
                                    </td>
                                    <td>
                                        <p>
                                        {item.productName}
                                        </p>
                                    </td>
                                    <td>
                                        <p>{item.productPrice}</p>
                                    </td>
                                    <td>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <InputPlus
                                            count={item.quantity}
                                            IncressCount={ (e) => {
                                                e.preventDefault();
                                                IncressCount(index);
                                            }}
                                            DisgressCount={(e) => {
                                                e.preventDefault();
                                                DisgressCount(index);
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td> {item.productPrice * item.productPrice} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Cart;