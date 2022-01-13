import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ContactNav from './components/Header/Contact-nav/ContactNav';
import HomepageShop from './components/Hompage-shop/HomepageShop';
import LinkNav from './components/Header/Link-nav/LinkNav';
import useCart from './hooks/useCart'
import {useState} from 'react';
import { useEffect } from 'react';
import { addToDb } from './utilities/fakedb';
import Footer from './components/Footer/Footer';

function App() {

  const [products,setProducts] = useState([]);
    const [cart,setCart] = useCart(products);
    useEffect(()=>{
        fetch('./sellerProduct.json')
        .then(res => res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.id === product.id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);

        // save to local storage 
        addToDb(product.id);
        
        
    }

  return (
    <div className="">
     <BrowserRouter>
     <ContactNav></ContactNav>
     <LinkNav
      cart= {cart}
      ></LinkNav>
     <Switch>
      <Route exact path="/">
      <HomepageShop
      products={products}
      handleAddToCart={handleAddToCart}
      ></HomepageShop>
      </Route>
      <Route path="/home">
      <HomepageShop
      products={products}
      handleAddToCart={handleAddToCart}
      ></HomepageShop>
      </Route>
      <Route path="/cart">
        <Cart
        cart={cart}
        ></Cart>
      </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
