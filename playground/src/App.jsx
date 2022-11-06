import "./App.css";
import { toAny } from "file-to-any";

function App() {
  const onInputHandle = async (e) => {
    const file = e.target.files[0];
    const arrayBuffer = await toAny(file, "arrayBuffer");
    console.log(arrayBuffer);
  };
  return (
    <div className="App">
      <input onChange={onInputHandle} type="file" />
    </div>
  );
}

export default App;
