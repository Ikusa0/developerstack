import { Questions } from "@prisma/client";
import { Request, Response } from 'express';
import { Question, FullQuestion } from "../repositories/questionRepository";
import { Answer } from "../repositories/answerRepository"
import * as answerService from "../services/answerService";
import * as questionService from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const question: Question = req.body;

  await questionService.createQuestion(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);
  const answer: Answer = req.body;

  await answerService.createAnswer({...answer, questionId});
  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const questions: Questions[] = await questionService.getQuestions();

  res.send({ questions });
}

export async function getById(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);

  const question = await questionService.getQuestionById(questionId)
  res.send(question)
}
