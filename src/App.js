import NavBar from './components/NavBar.jsx';
import { Card } from 'primereact/card';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';

function App() {

  return (
    <>
      <NavBar />
      <div className="container-md">
        <ItemDetailContainer />
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
