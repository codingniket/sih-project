export const popularCourses = [
  {
    imageSrc: "/images/Stats.jpg",
    title: "STATISTICS FOR DATA SCIENCE",
    badge: "New",
    description:"The New Age Oil",
    courseType:"College",
  },
  {
    imageSrc: "/images/history.jpeg",
    title: "THE INDIAN HISTORY",
    badge: "Popular",
    description:"The Hero of the time. Bharat ka Mahaverio ki khaani",
    courseType:"College",
  },
  {
    imageSrc: "/images/MCOV.jpg",
    title: "The Merchant of Venice",
    badge: "Trending",
    description:"Class X ICSC English Course",
    courseType:"School",
  },
  {
    imageSrc: "/images/Java.png",
    title: "CLASS X JAVA",
    badge: "Rated",
    description:"Class X ICSC Compelete Course",
    courseType:"School",
  },
  {
    imageSrc: "/images/python.png",
    title: "Python",
    badge: "High Rated",
    description:"Class X CBSC Compelete Course with projects",
    courseType:"School",
  },
  {
    imageSrc: "/images/Econo.jpg",
    title: "The Art Of Business",
    badge: "New",
    description:"The World Of Economics and Trade",
    courseType:"Any",
  },

];

export default function Card() {
  return (
    <div className="py-4 px-2 md:px-20">
      <div className="carousel gap-4 w-full">
        {popularCourses.map((items, index) => (
          <div className="carousel-item py-4" key={index}>
            <div className="w-[300px] sm:max-w-sm card  bg-base-100 shadow">
              <figure>
                <img src={items.imageSrc} alt="Courses"  />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {items.title}
                </h2>
                <p>{items.description}</p>
                <div className="card-actions justify-end">
                  <div className='badge badge-accent'>{items.badge}</div>
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
