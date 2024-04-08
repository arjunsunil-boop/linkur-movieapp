import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Viewmovies from './components/Viewmovies';
import Home from './components/Home';
import Searchmovies from './components/Searchmovies';
import Bookmovie from './components/Bookmovie';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home  />} />
          <Route path='/search' element={<Searchmovies/>} />
          <Route path='/view' element={<Viewmovies/>} />
          <Route path='/Book' element={<Bookmovie/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
