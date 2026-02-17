import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";

type AcademyGrade = RowDataPacket & {
  gradeId: number;
  gradeName: string;
};

const Static = async () => {
  const [academy_grades] = await db.execute<AcademyGrade[]>(
    "SELECT gradeId, gradeName FROM academy_grades"
  );

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
