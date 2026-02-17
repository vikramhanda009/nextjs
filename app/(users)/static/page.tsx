import { db } from "@/config/db"
import { RowDataPacket } from "mysql2"

interface AcademyGrade extends RowDataPacket {
  gradeId: number
  gradeName: string
}

const SingleName = async () => {
  const [academy_grades] = await db.query<AcademyGrade[]>(
    "SELECT * FROM academy_grades"
  )

  return (
    <ul>
      {academy_grades.map((grade) => (
        <li key={grade.gradeId}>{grade.gradeName}</li>
      ))}
    </ul>
  )
}

export default SingleName
