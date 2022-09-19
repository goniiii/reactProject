import "./App.css";
import { Button } from "bootstrap";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>집갈래</p>
      <Button>버튼</Button>
      <Routes>
        <Route></Route>
      </Routes>
      <p>어려운 git</p>
    </div>
  );
}

export default App;
