import { Questions } from "@prisma/client";
import { Answer } from "./answerRepository";

import db from "../databases/prisma";

export type Question = Omit<Questions, "id">;

export type FullQuestion = Questions & { answers: Answer[] };

export async function createQuestion(question: Question) {
  await db.questions.create({ data: question })
}

export function getQuestions(): Promise<Questions[]> {
  return db.questions.findMany();
}

export function getQuestionById(id: number) {
  return db.questions.findUnique({
    where: { id },
    include: {
      answers: {
        select: {
          answeredBy: true,
          answer: true
        }
      }
    }
  });
}