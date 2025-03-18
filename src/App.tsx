import { Login } from '@layout/Login';
import { Homepage } from '@components/Homepage'
import { Routes, Route } from 'react-router'
import { SignedIn } from '@clerk/clerk-react'



function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path='Homepage' element={
          <SignedIn>
            <Homepage />
          </SignedIn>
        } />
      </Routes>
    </>

  )
}

export default App;
