
import { Login } from '@layout/Login';
import { Homepage } from '@components/Homepage'
import { SignedOut, SignedIn } from '@clerk/clerk-react'

function App() {
  return (
    <>
      <SignedOut>
        <Login />
      </SignedOut>

      <SignedIn>
        <Homepage />
      </SignedIn>
    </>
  )
}

export default App;
