import { Route } from "react-router-dom";
import{ Routes } from 'react-router'
import  Navbar  from '@components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/products" element={<div>klk 2</div>} />
      </Routes>
    </>
  )
}

export default App;
