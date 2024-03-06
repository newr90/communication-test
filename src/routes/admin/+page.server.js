import { Question, Answer } from "$lib/server/db.js";

export async function load({ }) {
    return {
        questions: await Question.readAllQuestions(),
        answers: await Answer.readAllAnswers(),
        code: "9bba5c53a0545e0c80184b946153c9f58387e3bd1d4ee35740f29ac2e718b019"
    };
}