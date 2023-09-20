export default function VideoPlayer()
{
    return(
        <div className="hero p-20">
        
        <video class="w-full h-auto max-w-full" controls>
            <source src="/images/eduation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        </div>
    )
}