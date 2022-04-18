import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import { Divider } from 'primereact/divider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from './components/Cart/CartContainer.jsx';

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categorySlug" element={<ItemListContainer />} />
        <Route exact path="/item/:articleId" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<CartContainer />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
