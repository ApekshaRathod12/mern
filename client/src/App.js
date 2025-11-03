import './App.css';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import NavComp from './components/NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <NavComp />
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
