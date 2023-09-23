export default function VideoPlayer()
{
    return(
        <div className="min-h-screen p-20"> 
        <video class="w-full" controls>
            <source src="/images/eduation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="w-full py-5 flex justify-center">
        <button className="btn btn-warning">Notes </button>

        </div>
        </div>
    )
}