import Link from "next/link"
import Photo from "@/public/images/Creator.jpg"
import Image from "next/image";

export default function Creator()
{
    return(
        <div className="hero min-h-screen bg-base-500 text-center">
            <div className="hero-content flex-col">
                <div className="h-80 w-80 rounded-full my-10">
                <Image src={Photo} className="" />
                </div>
                <div>
                <h1 className="text-5xl font-bold">Ayush Kumar</h1>
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