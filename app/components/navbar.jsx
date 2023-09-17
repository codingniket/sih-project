import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
export default function navbar()
{
    return(
            <div className="navbar bg-base-100 px-5">
            <div className="flex-1">
                <Link href="/" className="text-white btn btn-ghost normal-case text-xl">Home</Link>
                <Link href="/about" className="text-white btn btn-ghost normal-case text-xl">About</Link>
                <Link href="/courses" className="text-white btn btn-ghost normal-case text-xl">Courses</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
            </div>
    )
}