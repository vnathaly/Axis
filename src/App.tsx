
import { Homepage } from '@components/Homepage'
import { useLocation } from 'react-router-dom'
import { SignedOut, SignedIn, SignInButton, Protect, useUser, useAuth } from '@clerk/clerk-react'


enum Role {
  admin = 'admin',
  user = 'user',
  test = 'test'
}


type Routes = {
  [key in Partial<Role>]?: string[]
}

function hasAccess(roles: Role[], path: string): boolean {
  const routes: Routes = {
    [Role.admin]: [
      '/protected',
      '/supersecret'
    ],
    [Role.user]: [
      '/supersecret',
      '/not-that-protected',
    ],
  }

  const routesKeys = Object.keys(routes) as Role[],
    newpath = path.replace(path.substring(path.lastIndexOf("/")),""),
    requiredRoles = routesKeys.filter(value => routes[value]?.includes(newpath));

  console.log({requiredRoles, newpath})

  if (requiredRoles.length < 1) return true;

  return roles.some(role => requiredRoles.includes(role))
}

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  const {pathname} = useLocation();

  if (!isLoaded || !isSignedIn) return null;

  const roles: Array<Role> = user?.publicMetadata?.role as Array<Role> || []


  const canAccess = hasAccess(roles, pathname);

  console.log({pathname, roles, canAccess})

  if (!canAccess) return (
    <div>You don't have access</div>
  )

  return (
    <>
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
