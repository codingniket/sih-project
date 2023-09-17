import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <>
    <UserButton afterSignOutUrl="/"/>
    <h1>Hello Guys!</h1>
    </>
  )
}
