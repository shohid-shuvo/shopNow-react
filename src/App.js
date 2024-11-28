import logo from './logo.svg';
import './App.css';
import './App.scss';
// react router version v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
