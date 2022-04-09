import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import { Divider } from 'primereact/divider';

function App() {

  return (
    <>
      <NavBar />
      <div className="container-md">
        <ItemDetailContainer />
        <Divider />
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
