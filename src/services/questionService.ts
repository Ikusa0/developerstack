import { Questions } from "@prisma/client";
import { Question, FullQuestion } from "../repositories/questionRepository";
import * as questionRepository from "../repositories/questionRepository";


export async function createQuestion(question: Question) {
  await questionRepository.createQuestion(question)
}

export async function getQuestions(): Promise<Questions[]> {
  const questions: Questions[] = await questionRepository.getQuestions();

  return questions;
}

export async function getQuestionById(questionId: number) {
  const question = await questionRepository.getQuestionById(questionId);

  return question;
}