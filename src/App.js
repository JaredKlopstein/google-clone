import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import About from './pages/About'
import Store from './pages/Store'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'; 

function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/' element={<Home/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
