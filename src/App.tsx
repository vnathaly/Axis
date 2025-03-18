import { Login } from '@layout/Login';
import { Homepage } from '@components/Homepage'
import { Routes, Route } from 'react-router'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'



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
        <Route path='/Homepage' element={
          <SignedOut>
            <Login/>
          </SignedOut>
        } />
      </Routes>
    </>

  )
}

export default App;
