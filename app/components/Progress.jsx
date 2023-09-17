export const ongoingCourses = [
    {
      imageSrc: "/images/ml.png",
      title: "Machine Learning",
      description: "Learning About Machine",
      LearningTime: 72, //In hours
      Completed: 40,
    },
    {
        imageSrc: "/images/ml.png",
        title: "Machine Learning",
        description: "Learning About Machine",
        LearningTime: 72, //In hours
        Completed: 4,
    },
    {
        imageSrc: "/images/ml.png",
        title: "Machine Learning",
        description: "Learning About Machine",
        LearningTime: 72, //In hours
        Completed: 69,
    },
    {
        imageSrc: "/images/ml.png",
        title: "Machine Learning",
        description: "Learning About Machine",
        LearningTime: 72, //In hours
        Completed:20,
        
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
                  <img src={items.imageSrc} alt="Courses" />
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