import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
// import { Menu } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/> } />
          <Route path="/about" element={<About/> } />
          <Route path="/menu" element={<Menu/> } />
          <Route path="/cart" element={<Cart/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
