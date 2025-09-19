import { useState } from "react";

type Props = {
  onAdd: (name: string, grade: string) => void;
};

const gradeOptions = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];

export default function CourseInput({ onAdd }: Props) {
  const [courseName, setCourseName] = useState("");
  const [grade, setGrade] = useState("A");

  const handleAdd = () => {
    if (!courseName) return;
    onAdd(courseName, grade);
    setCourseName("");
    setGrade("A");
  };

  return (
    <div className="flex gap-5 mb-5  w-full max-w-sm">
      <input
        type="text"
        placeholder="ชื่อวิชา"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        className="border p-1 flex-1 rounded"
      />
      <select
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="border p-1 rounded"
      >
        {gradeOptions.map(g => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-3 rounded"
      >
        เพิ่ม
      </button>
    </div>
  );
}
