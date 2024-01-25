import { useEffect } from 'react';
import './App.css';
import { AddToCart, RemoveFromCart,EmptyCart} from "./action";
import { ProductList } from './action/ProductAction';
import { useDispatch, useSelector } from 'react-redux';



const Content=()=>{
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.ProductData)
    console.warn('data in main component from saga',data);
    


      useEffect(()=>{
        dispatch(ProductList())
      },[])

    return(<>
    <div className="image">
<img src="https://i1.wp.com/speechisbeautiful.com/wp-content/uploads/2015/04/Open.png?fit=300%2C144&ssl=1"></img>

    </div>
    
    

   

    <button onClick={() => dispatch(EmptyCart())}>EMPTY CART</button>

    

  <div className='product-container'>
{
    data.map((item)=><div key={item.id} className='product-item'>
        <img src={item.photo} alt=''/>
        <div>Name:{item.name}</div>
       
        <div>Brand:{item.brand}</div>
        <div>Price:{item.price}</div>
        <div>Category:{item.category}</div>
    <div>
    <button onClick={() => dispatch(AddToCart(item))}>ADD TO CART</button>
    <button onClick={() => dispatch(RemoveFromCart(item.id))}>REMOVE FROM CART</button>
      </div>
        </div>
    )
}

  </div>




    </>

    )
}
export default Content;