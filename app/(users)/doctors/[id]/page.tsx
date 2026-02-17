import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";

// Type for row
type AcademyGrade = RowDataPacket & {
  gradeId: number;
  gradeName: string;
};

export async function generateStaticParams() {
  const [academy_grades] = await db.query<AcademyGrade[]>(
    "SELECT gradeId, gradeName FROM academy_grades"
  );

  return academy_grades.map((grade) => ({
    id: grade.gradeId.toString(),
  }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

const DynamicPage = async ({ params }: PageProps) => {
  const { id } = await params; // ✅ IMPORTANT

  const [academy_grades] = await db.query<AcademyGrade[]>(
    "SELECT gradeId, gradeName FROM academy_grades WHERE gradeId = ?",
    [Number(id)] // ✅ safer for MySQL
  );

  return (
    <ul>
      {academy_grades.map((grade) => (
        <li key={grade.gradeId}>{grade.gradeName}</li>
      ))}
    </ul>
  );
};

export default DynamicPage;
