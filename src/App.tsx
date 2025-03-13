import './App.css'
import { BrowserRouter as Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from './components/layout/Navbar';
import { Login } from './components/layout/login';



function App() {
  return (
    <>
    <Login />

    <BrowserRouter>
    <Routes>
        <Route path="/Navbar" element={< Navbar />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
