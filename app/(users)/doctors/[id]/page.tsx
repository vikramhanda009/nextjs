import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";

// Type for row
type AcademyGrade = RowDataPacket & {
  gradeId: number;
  gradeName: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamic = "force-dynamic";

const DynamicPage = async ({ params }: PageProps) => {
  const { id } = await params; // ✅ IMPORTANT

  let academy_grades: AcademyGrade[] = [];
  try {
    [academy_grades] = await db.query<AcademyGrade[]>(
      "SELECT gradeId, gradeName FROM academy_grades WHERE gradeId = ?",
      [Number(id)] // ✅ safer for MySQL
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

export default DynamicPage;
