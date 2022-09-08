import { Answer } from "../repositories/answerRepository";
import * as answerRepository from "../repositories/answerRepository";


export async function createAnswer(answer: Answer) {
  await answerRepository.createAnswer(answer);
}
