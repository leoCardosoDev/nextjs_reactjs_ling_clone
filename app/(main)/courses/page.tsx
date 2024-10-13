import { getCourses } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Cursos de idiomas</h1>
      <List courses={courses} activeCoursedId={4} />
    </div>
  );
};

export default CoursesPage;
