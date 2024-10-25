import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Homescreen from './screen/Homescreen';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
