import Database from 'better-sqlite3';
const db = new Database('commtest.db');

class Question {
    static createTable() {
        db.exec(`
      CREATE TABLE IF NOT EXISTS questions (
        question_id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_text TEXT
      );
    `);
    }

    static createQuestion(questionText) {
        const insertQuestion = db.prepare('INSERT INTO questions (question_text) VALUES (?)');
        return insertQuestion.run(questionText);
    }

    static readAllQuestions() {
        return db.prepare('SELECT * FROM questions').all();
    }

    static readQuestionById(questionId) {
        const query = db.prepare('SELECT * FROM questions WHERE question_id = ?');
        return query.get(questionId);
    }

    static updateQuestion(questionId, newQuestionText) {
        const updateQuestion = db.prepare('UPDATE questions SET question_text = ? WHERE question_id = ?');
        return updateQuestion.run(newQuestionText, questionId);
    }

    static deleteQuestion(questionId) {
        const deleteQuestion = db.prepare('DELETE FROM questions WHERE question_id = ?');
        return deleteQuestion.run(questionId);
    }
}

class Answer {
    static createTable() {
        db.exec(`
      CREATE TABLE IF NOT EXISTS answers (
        answer_id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_id INTEGER,
        answer_text TEXT,
        FOREIGN KEY(question_id) REFERENCES questions(question_id)
      );
    `);
    }

    static createAnswer(questionId, answerText) {
        const insertAnswer = db.prepare('INSERT INTO answers (question_id, answer_text) VALUES (?, ?)');
        return insertAnswer.run(questionId, answerText);
    }

    static readAllAnswers() {
        return db.prepare('SELECT * FROM answers').all();
    }

    static readAnswerById(answerId) {
        const query = db.prepare('SELECT * FROM answers WHERE answer_id = ?');
        return query.get(answerId);
    }

    static updateAnswer(answerId, newAnswerText) {
        const updateAnswer = db.prepare('UPDATE answers SET answer_text = ? WHERE answer_id = ?');
        return updateAnswer.run(newAnswerText, answerId);
    }

    static deleteAnswer(answerId) {
        const deleteAnswer = db.prepare('DELETE FROM answers WHERE answer_id = ?');
        return deleteAnswer.run(answerId);
    }
}

class Property {
    static createTable() {
        db.exec(`
      CREATE TABLE IF NOT EXISTS properties (
        answer_id INTEGER,
        property_name TEXT,
        property_value INTEGER,
        FOREIGN KEY(answer_id) REFERENCES answers(answer_id)
      );
    `);
    }

    static createProperty(answerId, propertyName, propertyValue) {
        const insertProperty = db.prepare('INSERT INTO properties (answer_id, property_name, property_value) VALUES (?, ?, ?)');
        return insertProperty.run(answerId, propertyName, propertyValue);
    }

    static readAllProperties() {
        return db.prepare('SELECT * FROM properties').all();
    }

    static readPropertiesByAnswerId(answerId) {
        const query = db.prepare('SELECT * FROM properties WHERE answer_id = ?');
        return query.all(answerId);
    }

    static updateProperty(answerId, propertyName, newPropertyValue) {
        const updateProperty = db.prepare('UPDATE properties SET property_value = ? WHERE answer_id = ? AND property_name = ?');
        return updateProperty.run(newPropertyValue, answerId, propertyName);
    }

    static deleteProperty(answerId, propertyName) {
        const deleteProperty = db.prepare('DELETE FROM properties WHERE answer_id = ? AND property_name = ?');
        return deleteProperty.run(answerId, propertyName);
    }
}

// Beispiel, wie du das DAO verwenden könntest:
Question.createTable();
Answer.createTable();
Property.createTable();

const questionResult = Question.createQuestion('Gehen sie auf andere Leute zu?');
const questionId = questionResult.lastInsertRowid;

const answerResult = Answer.createAnswer(questionId, 'Ja, eigentlich immer');
const answerId = answerResult.lastInsertRowid;

Property.createProperty(answerId, 'Offenheit', 5);

const allQuestions = Question.readAllQuestions();
const allAnswers = Answer.readAllAnswers();
const allProperties = Property.readAllProperties();

export { Question };
export { Answer };
export { Property };

console.log('Alle Fragen:', allQuestions);
console.log('Alle Antworten:', allAnswers);
console.log('Alle Eigenschaften:', allProperties);

// Schließe die Datenbankverbindung
db.close();
