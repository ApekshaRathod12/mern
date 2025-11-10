import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavComp from './components/NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import City from './pages/City';

function App() {
  return (
    <>
    <NavComp />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/city' element={<City/>} />
      </Routes>
    </>
  );
}

export default App;
