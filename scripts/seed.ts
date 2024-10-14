import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = () => {
  try {
    console.log("Seeding database");
    db.delete(schema.courses);
    db.delete(schema.userProgress);
    console.log("Seeding finished");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed database");
  }
};

main();
