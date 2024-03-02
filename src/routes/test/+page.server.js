import { Question, Answer } from '$lib/server/db.js';

export async function load({ params }) {
    return {
        questions: await Question.readAllQuestions(),
    };
}