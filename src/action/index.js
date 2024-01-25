export const incNum=()=>{
    return {
        type:"INCREMENT"
    }
}
export const decNum=()=>{
    return {
        type:"DECREMENT"
    }
}
export const AddToCart=(data)=>{
    return{
        type:"ADDITION",
        data
        
    
    
    }
}

export const RemoveFromCart = (data) => {
    return {
      type: "REMOVE_FROM_CART",
      data
    };
  };


  export const EmptyCart = () => {
    return {
      type: "EMPTY_CART",
    };
  };
  


