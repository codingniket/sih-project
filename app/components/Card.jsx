export const popularCourses = [
  {
    imageSrc: "/course_images/12phy.jpg",
    title: "Class 12 Physics",
    badge: "New",
    description: "Learning Physics for class 12",
    courseType: "Learning",
  },
  {
    imageSrc: "/images/ml.png",
    title: "Machine Learning",
    badge: "InDemand",
    description: "Learning About Machine",
    courseType: "Learning",
  },
  {
    imageSrc: "/images/ml.png",
    title: "Machine Learning",
    badge: "InDemand",
    description: "Learning About Machine",
    courseType: "Learning",
  },
  {
    imageSrc: "/images/ml.png",
    title: "Machine Learning",
    badge: "InDemand",
    description: "Learning About Machine",
    courseType: "Learning",
  },
  {
    imageSrc: "/images/ml.png",
    title: "Machine Learning",
    badge: "InDemand",
    description: "Learning About Machine",
    courseType: "Learning",
  },
  {
    imageSrc: "/images/ml.png",
    title: "Machine Learning",
    badge: "InDemand",
    description: "Learning About Machine",
    courseType: "Learning",
  },
  {
    imageSrc: "/images/ml.png",
    title: "Machine Learning",
    badge: "InDemand",
    description: "Learning About Machine",
    courseType: "Learning",
  },
];

export default function Card() {
  return (
    <div className="py-4 px-2 md:px-20">
      <div className="carousel gap-4 w-full">
        {popularCourses.map((items, index) => (
          <div className="carousel-item py-4" key={index}>
            <div className="w-[300px] sm:max-w-sm card  bg-base-100 shadow ">
              <figure>
                <img src={items.imageSrc} alt="Courses" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {items.title}
                  <div className="badge badge-error">{items.badge}</div>
                </h2>
                <p>{items.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{items.courseType}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
