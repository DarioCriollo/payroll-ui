import logo from './logo.svg';
import './App.css';
import Navbar from './commons/Navbar';
import { Route, Routes } from 'react-router-dom';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Employee></Employee>
    </div>
  );
}

export default App;
