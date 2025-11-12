import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavComp from './components/NavComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import City from './pages/City';
import Login from './pages/Login';
import ProtectedRoute from './config/ProtectedRoute';
import Company from './pages/Company';

function App() {
  return (
    <>
    <NavComp />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<ProtectedRoute allowedRoles={['admin','staff']}><Home/></ProtectedRoute>} />
        <Route path='/city' element={<ProtectedRoute allowedRoles={['admin']}><City/></ProtectedRoute>} />
        <Route path='/company' element={<ProtectedRoute allowedRoles={['admin']}><Company /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
