
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Add from './components/add';
import Edit from './components/edit';




function App() {

  
  return (
    <div className = "App">
      <Router>
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path="/create" element={<Add/>} />
          <Route path="/edit" element={<Edit/>} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
