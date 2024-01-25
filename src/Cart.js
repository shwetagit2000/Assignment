import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => { 
    const cartData = useSelector((state) => state.AddTo);
    //let amount=cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev+next)
    let amount = cartData.length && cartData.map(item => parseFloat(item.price)).reduce((prev, next) => prev + next, 0);

    console.warn(amount);
  
    return (
        <>
            <div>
                <Link to="/">Product List</Link>
                <h1>SHOPPING BAG</h1>
                <div className="cart-page-container">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Brand</td>
                                <td>Category</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

<div className="price-details">
<div className="adjust-price"><h6>Amount</h6><h6>{amount}</h6></div>
<div  className="adjust-price"><h6>Discount</h6><h6>{amount/10}</h6></div>
<div  className="adjust-price"><h6>Tax</h6><h6>00</h6></div>
<div className="adjust-price total-row"><h6 style={{ textDecoration: 'underline' }}>Total</h6><h6>{amount-(amount/10)}</h6></div>

</div>




                </div>
            </div>
        </>
    );
}

export default Cart;
