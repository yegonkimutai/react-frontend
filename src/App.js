import Greeting from './components/Greeting';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
