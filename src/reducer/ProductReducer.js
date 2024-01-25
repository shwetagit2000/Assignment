// ProductReducer.js

const productData = (data = [], action) => {
    switch (action.type) {
    
        case "SET_PRODUCT_LIST":
          console.warn("set productreducer is called", action);
          return [...action.data];
      default:
        return data;
    }
  };
  
  export default productData;
  