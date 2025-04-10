
import { Homepage } from '@components/Homepage'
import { SignedOut, SignedIn, SignInButton, Protect, useUser } from '@clerk/clerk-react'

enum Role {
  admin = 'admin',
  user = 'user'
}

function hasAccess(roles: Role[], path: string): boolean {
  const routes = {
    [Role.admin]: [
      '/protected',
      '/supersecret'
    ],
    [Role.user]: [
      '/supersecret',
      '/not-that-protected'
    ],
  }

  // if path is not present on any list, return true
  // if path is present on any list, check if the roles include the role where the path is being protected and return true if so
  // if none of the above happens, return false

return true

}


console.table([{
  function: `hasAccess([], '/test')`,
  expected: true,
  currentResult: hasAccess([], '/test')
},{
  function: `hasAccess([], '/supersecret')`,
  expected: false,
  currentResult: hasAccess([], '/supersecret')
},
{
  function: `hasAccess([], '/not-that-protexted'')`,
  expected: false,
  currentResult: hasAccess([], '/not-that-protexted')
},
{
  function: `hasAccess([Role.admin], '/supersecret')`,
  expected: true,
  currentResult: hasAccess([Role.admin], '/supersecret'),
}])


function App() {
  const {user, isLoaded, isSignedIn} = useUser();

  if (!isLoaded || !isSignedIn) return null;

  const roles: Array<Role> = user?.publicMetadata?.role as Array<Role> || []

  return (
    <>
      <Protect
        fallback={<p>You don&apos;t have access to this page</p>}
        condition={()=> hasAccess([], '/aksjas')}
      >
        you have access to this
      </Protect>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <Homepage />
      </SignedIn>
    </>
  )
}

export default App;
