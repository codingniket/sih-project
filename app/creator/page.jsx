import Link from "next/link"

export default function Creator()
{
    return(
        <div className="hero min-h-screen bg-base-200 text-center">
            <div className="hero-content flex-col">
                <img src="/images/Creator.jpg" className="max-w-sm rounded-sm shadow-xl" />
                <div>
                <h1 className="text-5xl font-bold">Ladchat Kumar</h1>
                <p className="py-6">A Complete Playlist for Web Development</p>
                <div className="flex justify-center gap-5">
                <Link href="https://www.youtube.com/">
                <button className="btn btn-warning">Create Playlist</button>
                </Link>
                <Link href="/doubt">
                <button className="btn btn-error">Doubt Solver</button>
                </Link>
                </div>
                </div>
            </div>
            </div>
    )
}