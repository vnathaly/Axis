
import { Homepage } from '@components/Homepage'
import { SignedOut, SignedIn, SignInButton, Protect, useUser, useAuth } from '@clerk/clerk-react'


enum Role {
  admin = 'admin',
  user = 'user',
  test = 'test'
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
//---------------------------------------------------- Firt Test ----------------------------------------------------//

  /*
  - Si se envía un Role que está dentro de Role y el path está en routes pero no dentro de ese role, expected *FALSE*
  - Si se envía un Role que está dentro de Role y el path está en routes dentro de ese role, expected *TRUE*

  Datos: {
  - roles = []
  - routes = {
      roles...
    }
  - path = /n
  }

  Step 1.
    Know the role.
    Identify if role exists.
  Step 2. 
    Know the path.
    Identify if path is on routes.role exists
  Step 3.
    Compare them [Role and Role] then [Role and Path].
  */
  

    

//---------------------------------------------------- Second Test ----------------------------------------------------//
  /*
  - Si se ingresa un Role inexistente, expected *FALSE*
  - Si se ingresa un Role existente y ningún path, expected *FALSE*

  Step 1.
    Verify if Role and Path exists.
  */

  


//---------------------------------------------------- Thrith Test ----------------------------------------------------//

  /*
  - Si se ingresa el rol de admin y un path que está habilitado para user, expected *TRUE*
  */
 
  /*
  - Si se envía un path que no pertenece a ningun rol, [no importará el rol ingresado], expected *TRUE*
  */

  /*
  - Si se ingresa un path protegido y ningun user, expected *FALSE*
  - [Un usuario no debería poder estar logeado con dos roles a la vez, cuando uno está en uso es true y el otro false
    hacer el cambio, sucede lo mismo en caso contrario. Tomando en cuenta eso se estima que por cuenta pueden ser 
    varios roles pero nunca al mismo tiempo.].
  */


  // for (const key in roles) {

  //     if (routes[Role.admin].includes(path) 
  //       || routes[Role.user].includes(path))
  //      {
  //        return true;
  //     }
  // }
 
  // if (routes[Role.admin].includes(path) || routes[Role.user].includes(path)) {
  //   return false;
  // } else {
  //   return true;
  // }
  return true;
}

console.table([
  {
  function: `hasAccess([], '/test')`,
  expected: true,
  currentResult: hasAccess([], '/test')
}, {
  function: `hasAccess([], '/supersecret')`,
  expected: false,
  currentResult: hasAccess([], '/supersecret')
},
{
  function: `hasAccess([], '/not-that-protected')`,
  expected: false,
  currentResult: hasAccess([], '/not-that-protected')
},
{
  function: `hasAccess([Role.admin], '/supersecret')`,
  expected: true,
  currentResult: hasAccess([Role.admin], '/supersecret'),
},
{
  function: `hasAccess([Role.test], '/supersecret')`,
  expected: false,
  currentResult: hasAccess([Role.test], '/supersecret'),
}
])


function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) return null;

  const roles: Array<Role> = user?.publicMetadata?.role as Array<Role> || []

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
