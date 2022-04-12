import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import { Divider } from 'primereact/divider';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categorySlug" element={<ItemListContainer />} />
        <Route exact path="/item/:articleId" element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
