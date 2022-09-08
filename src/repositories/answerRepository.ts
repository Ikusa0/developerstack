import { Answers } from "@prisma/client";

import db from "../databases/prisma";

export type Answer = Omit<Answers, "id">;

export async function createAnswer(answer: Answer) {
  await db.answers.create({ data: answer });
}
