import NavBar from './components/NavBar.jsx';
import { Card } from 'primereact/card';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.jsx';
import { Divider } from 'primereact/divider';
import ItemCount from './components/Item/ItemCount.jsx';

function App() {

  return (
    <>
      <NavBar />
      <div className="container-md">
        <ItemDetailContainer />
        <Divider />
        {/* <ItemListContainer /> */}


      </div>
    </>
  );
}

export default App;
