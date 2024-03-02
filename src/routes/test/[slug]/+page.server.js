import { Question, Answer } from '$lib/server/db.js';

export async function load({ params }) {
    return {
        question: await Question.readQuestionById(params.slug),
        answers: await Answer.readAnswerById(params.slug)
    };
}