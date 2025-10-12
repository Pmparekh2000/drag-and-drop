import logo from './logo.svg';
import './App.css';
import DragAndDrop from './components/DragAndDrop';
import { CONTAINERS_DATA } from './utils/containers';

function App() {
  return (
    <div className="App">
      <DragAndDrop containersData={CONTAINERS_DATA} />
    </div>
  );
}

export default App;
