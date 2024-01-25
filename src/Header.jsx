import { UseSelector, useSelector } from 'react-redux';
import './App.css';
import { Link } from 'react-router-dom';
const Header = () => {
    const result=useSelector((state)=>state.AddTo)
    console.log("redux data in header!",result)
    return (
      <>
        <div className="header">
        <Link to="/">  <h1 className='logo'>my Store!</h1></Link>
       <Link to="/cart">
       <div className="cart-div">
            <span>{result.length}</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt=""
            />
          </div>
       </Link>
        </div>
      
      </>
    );
  };
export default Header;  