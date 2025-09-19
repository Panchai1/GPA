import { useState } from "react";
import CourseInput from "./components/CourseInput";
import CourseList from "./components/CourseList";
import GpaCalculator from "./components/GpaCalculator";

type Course = {
  id: number;
  name: string;
  grade: string;
};

export default function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [gpa, setGpa] = useState<number | null>(null);

  const addCourse = (name: string, grade: string) => {
    setCourses([...courses, { id: Date.now(), name, grade }]);
  };

  const removeCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="">
  <div className="">
        <h2 className="text-2xl font-bold mb-4 text-center">รายชื่อวิชา</h2>

        <CourseInput onAdd={addCourse} />
        <CourseList courses={courses} onRemove={removeCourse} />
        <GpaCalculator courses={courses} onGpaCalculated={setGpa} />

        {gpa !== null && (
          <p className="mt-4 text-lg font-semibold text-center">GPA: {gpa.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
}
