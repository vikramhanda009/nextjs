import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";
import { cache } from "react";

type AcademyGrade = RowDataPacket & {
  gradeId: number;
  gradeName: string;
};

const getAlldata = cache(async () => {
  let academy_grades: AcademyGrade[] = [];
  try {
    [academy_grades] = await db.query<AcademyGrade[]>(
      "SELECT gradeId, gradeName FROM academy_grades"
    );
  } catch (error) {
    console.error("DB query failed:", error);
  }

  return academy_grades;
});

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const academy_grades = await getAlldata();

  return (
    <ul>
      {academy_grades.map((grade) => (
        <li key={grade.gradeId}>{grade.gradeName}</li>
      ))}
    </ul>
  );
};

export default DynamicPage;
