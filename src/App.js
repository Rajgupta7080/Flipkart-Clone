import { Box, useMediaQuery } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import CartPage from './Components/Cart/CartPage';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/navbar';
import Products from './Components/Products.jsx/Products';
import Viewpage from './Components/ProductsView.jsx/Viewpage';

function App() {

  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
  return (
    <Box>
      <Navbar/>
      <AllRoutes/>
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <Viewpage/> */}
      {/* <CartPage/> */}
      {/* {
        isLargerThan720? <Footer/> : ""
      } */}
      {/* <Footer/> */}

    </Box>
  );
}

export default App;
