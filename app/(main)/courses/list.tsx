"use client";

import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Courses = {
  courses: (typeof courses.$inferSelect)[];
  activeCoursedId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCoursedId }: Courses) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const onClick = (id: number) => {
    if (pending) return;
    if (id === activeCoursedId) {
      return router.push("/learn");
    }
    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Algo deu errado!"));
    });
  };
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCoursedId}
        />
      ))}
    </div>
  );
};
