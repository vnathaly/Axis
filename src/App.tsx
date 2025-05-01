
import { Homepage } from '@components/Homepage'
import { SignedOut, SignedIn, SignInButton, Protect, useUser, useAuth } from '@clerk/clerk-react'


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

  for (const key in roles) {
      if (roles.hasOwnProperty(key) && (routes[Role.admin].includes(path) || routes[Role.user].includes(path))) {
        console.log("EUREka")
         return true;
      }
  }



//  let arr = .castArray(roles);
//   roles.hasOwnProperty("")
//   if (routes.hasOwnProperty("element")){

//   }

  // for (var key in roles) {
  //   if (routes.hasOwnProperty(key) && ((routes[Role.user].includes(path) || routes[Role.admin].includes(path)))) {
  //     return false;
  //   }
  // }

  // Object.keys(roles);
  // Object.keys(roles).map((key) => {return roles[key]})

 
  if (routes[Role.admin].includes(path) || routes[Role.user].includes(path)) {
    console.log("Non eureca")
    return false;
  }
  // else if (routes.hasOwnProperty(path) ) {
  //   console.log("EURECAA");
  //   return true;

  // }
  // if (!routes[Role.user].includes(path) || !routes[Role.admin].includes(path)) {
  //   console.log("No eureca")
  //   return true;
  // }
  

  if (!routes[Role.admin].includes(path) || !routes[Role.user].includes(path)) {
    console.log("EURECAA");
    return true;

  }
  // else if (routes[Role.admin].includes(path) && routes[Role.user].includes(path)) {
  //   console.log("No eureca")
  //   return false;
  // }

  // if path is not present on any list, return true
  // if path is present on any list, check if the roles include the role where the path is being protected and return true if so
  // if none of the above happens, return false

  // {}.hasOwnProperty("element")
  // ["jahsjhas", "element"].includes('element')
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
