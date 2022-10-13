import { Box } from '@chakra-ui/react';
import './App.css';
import CartPage from './Components/Cart/CartPage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/navbar';
import Products from './Components/Products.jsx/Products';

function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Products/>
      {/* <CartPage/> */}
      <Footer/>
    </Box>
  );
}

export default App;
