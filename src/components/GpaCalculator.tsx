
type Course = {
  id: number;
  name: string;
  grade: string;
};

type Props = {
  courses: Course[];
  onGpaCalculated: (gpa: number) => void;
};

const gradePointMap: Record<string, number> = {
  "A": 4.0,
  "B+": 3.5,
  "B": 3.0,
  "C+": 2.5,
  "C": 2.0,
  "D+": 1.5,
  "D": 1.0,
  "F": 0,
  "W": 0,
};

export default function GpaCalculator({ courses, onGpaCalculated }: Props) {
  const calculateGpa = () => {
    const gradedCourses = courses.filter(c => c.grade !== "W");
    if (gradedCourses.length === 0) {
      onGpaCalculated(0);
      return;
    }
    const totalPoints = gradedCourses.reduce((sum, c) => sum + gradePointMap[c.grade], 0);
    onGpaCalculated(totalPoints / gradedCourses.length);
  };

  return (
    <button
      onClick={calculateGpa}
      className="bg-green-500 text-white px-4 py-2 rounded mb-2"
    >
      คำนวณ GPA
    </button>
  );
}
