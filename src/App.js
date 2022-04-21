import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from './components/Cart/CartContainer.jsx';
import CartContextProvider from './context/CartContext.jsx';
import ToastMessageContextProvider from './context/ToastMessageContext.jsx';

function App() {

  return (
    <BrowserRouter>
      <ToastMessageContextProvider>
        <CartContextProvider>

          <NavBar />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:categorySlug" element={<ItemListContainer />} />
            <Route exact path="/item/:articleId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<CartContainer />} />
          </Routes>

        </CartContextProvider>
      </ToastMessageContextProvider>
    </BrowserRouter>
  );
}

export default App;
