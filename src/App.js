import logo from "./logo.svg";
import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import { initialData } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <DragAndDrop initialData={initialData} />
    </div>
  );
}

export default App;
