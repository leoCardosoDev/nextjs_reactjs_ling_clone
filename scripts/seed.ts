import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Espanhol",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Italiano",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "Francês",
        imageSrc: "/fr.svg",
      },
      {
        id: 4,
        title: "Croata",
        imageSrc: "/hr.svg",
      },
      {
        id: 5,
        title: "Japonês",
        imageSrc: "/jp.svg",
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed database");
  }
};

main();
