import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export function Login() {
    return (
        <>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    )
}