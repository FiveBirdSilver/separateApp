import { Suspense } from "react";
import "./App.css";
import Button from "../../micro_b/src/Button";

function App() {
  return (
    <div className="App">
      <p>micro_a TEST</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </div>
  );
}

export default App;
