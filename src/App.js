import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from './components/Cart/CartContainer.jsx';
import CartContextProvider from './context/CartContext.jsx';
import ToastMessageContextProvider from './context/ToastMessageContext.jsx';
import initializeFirebase from './utils/firebaseConfig.js';
import CheckoutContainer from './components/Checkout/CheckoutContainer.jsx';
import Home from './pages/Home.jsx';
import Articles from './pages/Articles.jsx'
import Contact from './pages/Contact.jsx';
import ShipmentTracking from './pages/ShipmentTracking.jsx';
import PageNotFound from './components/PageNotFound.jsx';

initializeFirebase();

function App() {

  return (
    <BrowserRouter>
      <ToastMessageContextProvider>
        <CartContextProvider>

          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/articles/category/:categorySlug" element={<Articles />} />
            <Route exact path="/item/:articleId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<CartContainer />} />
            <Route exact path="/checkout" element={<CheckoutContainer />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/shipment-tracking" element={<ShipmentTracking />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <Footer />

        </CartContextProvider>
      </ToastMessageContextProvider>
    </BrowserRouter>
  );
}

export default App;
