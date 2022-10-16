import { createContext, useEffect, useState } from "react";



export const CartContext = createContext();




const CartContextProvider = ( {children} )=>{
    const carturl = `http://localhost:4000/products`
    
    const [cartData, SetCartData] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const [globalAddress, setGlobalAddress] = useState({})
    function getData() {
        setLoading(true);
        fetch(carturl)
          .then((res) => res.json())
          .then((res) => {
            console.log(res, " res ddd cart ");
            SetCartData(res)
          })
          .catch((err) => console.log(err))
          .finally(()=>setLoading(false))
      }
      useEffect(()=>{
        getData();
      },[])

return <CartContext.Provider value={{ 
        cartData, SetCartData,loading,
        setLoading,getData, globalAddress, setGlobalAddress, carturl
    }} >
    {children}
</CartContext.Provider>

}


export default CartContextProvider;