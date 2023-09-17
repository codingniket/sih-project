import Link from "next/link"

export default function ComingSoon()
{
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Coming Soon</h1>
            <p className="py-6">Feature Currently Under Development.</p>
            <Link href="/">
            <button className="btn btn-primary">Home</button>
            </Link>
            </div>
        </div>
        </div>
    )
}