import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Navbar} from './components/layout/Navbar';


function App() {
  return (
    <>
      <Navbar />
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App
