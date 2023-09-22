const students = [
  { name: 'Ayush Kumar', points: 95, image: "/images/Creator.jpg" },
  { name: 'Shreya Paul', points: 88, image: 'jane.jpg' },
  { name: 'Amit Kumar', points: 75, image: 'doe.jpg' },
  { name: 'Pawan', points: 75, image: 'doe.jpg' },
  { name: 'Niket', points: 75, image: 'doe.jpg' },
  { name: 'Swattikee', points: 75, image: 'doe.jpg' },
  // Add more student data as needed
];

export default function StudentRanking () {
  // Sort students by points in descending order
  const sortedStudents = [...students].sort((a, b) => b.points - a.points);
  const altImageUrl = "https://t4.ftcdn.net/jpg/04/62/63/65/360_F_462636502_9cDAYuyVvBY4qYJlHjW7vqar5HYS8h8x.jpg"

  return (
    <div className="container mx-auto mt-10 w-1/2 text-center">
      <h1 className="text-3xl font-semibold text-center mb-5">Student Ranking</h1>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-success text-white">
            <th className="w-1/4 p-4">Rank</th>
            <th className="w-1/4 p-4">Image</th>
            <th className="w-1/4 p-4">Name</th>
            <th className="w-1/4 p-4">Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr
              key={student.name}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="p-4 text-center">{index + 1}</td>
              <td className="p-4 flex justify-center">
                <img
                  src={student.image ? student.image : altImageUrl} 
                  alt={student?.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </td>
              <td className="p-4">{student.name}</td>
              <td className="p-4 text-center">{student.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


