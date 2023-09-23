import Link from "next/link"

export const ongoingCourses = [
    {
      imageSrc: "/images/cloud.png",
      title: "Google Cloud",
      description: "Google Cloud Platform, offered by Google, is a suite of cloud computing services",
      LearningTime: 100, //In hours
      Completed: 40,
    },
    {
        imageSrc: "/images/compiler.png",
        title: "Compiler Design",
        description: "Google Cloud Platform, offered by Google, is a suite of cloud computing services",
        LearningTime: 48, //In hours
        Completed: 20,
    },
    {
        imageSrc: "/images/machine.jpeg",
        title: "Machine Learning",
        description: "Machine learning is a branch of artificial intelligence (AI) and computer science",
        LearningTime: 72, //In hours
        Completed: 58,
    },
    {
        imageSrc: "/images/hindi.jpg",
        title: "गोदान",
        description: "प्रेमचंद हिंदी के सबसे प्रसिद्ध उपन्यासकार हैं और गोदान प्रेमचंद का सबसे प्रसिद्ध उपन्यास है। ",
        LearningTime: 200, //In hours
        Completed: 68,
    },
    {
        imageSrc: "/images/bengali.jpg",
        title: "সহজ পাঠ",
        description: "রবীন্দ্রনাথ ঠাকুরের লেখা একটি বাংলা ভাষা শেখার বই। এই বইটির দুটি সংস্করণে বাংলা ভাষা| ",
        LearningTime: 24, //In hours
        Completed: 14,
    },
]

export default function Progress()
{
    return(
        <div className="py-4 px-2 md:px-20">
        <div className="carousel gap-4 w-full">
          {ongoingCourses.map((items, index) => (
            <div className="carousel-item py-4" key={index}>
              <div className="w-[300px] sm:max-w-sm card  bg-base-100 shadow ">
              
                <figure>
                <Link href="/videoplayer">
                  <img src={items.imageSrc} alt="Courses" />
                  </Link>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {items.title}
                  </h2>
                  <p>{items.description}</p>
                  <div className="card-actions justify-start">
                  <progress className="progress progress-warning w-56" value={(items.Completed/items.LearningTime)*100} max="100"></progress>
                  </div>
                </div>
          
              </div>
            </div>
          ))}
        
        </div>
      </div>
    )
}