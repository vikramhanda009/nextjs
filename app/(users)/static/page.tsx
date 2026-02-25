import { db } from "@/config/db"
import { RowDataPacket } from "mysql2"

interface AcademyGrade extends RowDataPacket {
  gradeId: number
  gradeName: string
}

export const dynamic = "force-dynamic"

const SingleName = async () => {
  let academy_grades: AcademyGrade[] = [];
  try {
    [academy_grades] = await db.query<AcademyGrade[]>(
      "SELECT * FROM academy_grades"
    );
  } catch (error) {
    console.error("DB query failed:", error);
  }

  return (
    <ul>
      {academy_grades.map((grade) => (
        <li key={grade.gradeId}>{grade.gradeName}</li>
      ))}
    </ul>
  );
};

export default SingleName
