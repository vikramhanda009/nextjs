import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";

type AcademyGrade = RowDataPacket & {
  gradeId: number;
  gradeName: string;
};

export const dynamic = "force-dynamic";

const Static = async () => {
  let academy_grades: AcademyGrade[] = [];
  try {
    [academy_grades] = await db.execute<AcademyGrade[]>(
      "SELECT gradeId, gradeName FROM academy_grades"
    );
  } catch (error) {
    console.error("DB query failed:", error);
  }

  console.log("Static:", academy_grades);

  return (
    <ul>
      {academy_grades.map((grades) => (
        <li key={grades.gradeId}>{grades.gradeName}</li>
      ))}
    </ul>
  );
};

export default Static;
