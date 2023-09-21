import Photo from "@/public/images/Creator.jpg"
import Image from "next/image";


export default function TopCreator() {
  return (
    <div className="my-5 w-full flex justify-center">
            <div className="stats shadow ">
        
        <div className="stat">
            <div className="stat-figure text-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-info">25.6K</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-error">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-error">2.6M</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary">
            <div className="avatar online">
                <div className="w-16 rounded-full">
                <Image src={Photo} className="" />
                </div>
            </div>
            </div>
            <div className="stat-value">8</div>
            <div className="stat-title">Playlist Created</div>
        </div>
        
        </div>
    </div>

  )
}