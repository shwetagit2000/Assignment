
const AddTo = (data = [], action) => {
    switch (action.type) {
     
  
      case "ADDITION":
        return [action.data,...data];
  
case "REMOVE_FROM_CART":
  console.warn("remove cart action is called",action)
  //data.length=data.length? data.length-1:[];
  const remainingItem=data.filter((item)=>item.id!==action.data);
  console.warn("remainingItem",remainingItem)
  return[...remainingItem]
  
  case "EMPTY_CART":
    console.warn("empty cart action is called",action)
    data=[];
    return [...data];
  

      default:
        return data;
    }
  };
  
  export default AddTo;
  