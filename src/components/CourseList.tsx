
type Course = {
  id: number;
  name: string;
  grade: string;
};

type Props = {
  courses: Course[];
  onRemove: (id: number) => void;
};

export default function CourseList({ courses, onRemove }: Props) {
  return (
    <ul className="mb-4">
      {courses.map(course => (
        <li key={course.id} className="flex justify-between items-center mb-2">
          <span className={course.grade === "F" ? "text-red-600 font-bold" : ""}>
            {course.name} - {course.grade}
          </span>
          <button
            onClick={() => onRemove(course.id)}
            className="bg-red-500 text-white px-2 rounded"
          >
            ลบ
          </button>
        </li>
      ))}
    </ul>
  );
}
