import NavBar from './components/NavBar.jsx';
import { Card } from 'primereact/card';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Listado de articulos"} />
    </>
  );
}

export default App;
