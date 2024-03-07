import { Question } from "$lib/server/db.js"; // Importiert eine Art Data Access Object

export async function load({ }) {
    return {
        questions: await Question.readAllQuestions(), // Alle Fragen aus der Datenbank holen
    };
}