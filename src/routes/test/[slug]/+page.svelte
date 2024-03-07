<script>
    import { onMount, afterUpdate } from "svelte";
    import { goto } from "$app/navigation";

    /** @type {import('./$types').PageServerLoad} */

    export let data;

    let selectedAnswer;

    onMount(() => {
        selectedAnswer = getSelectedValue(data.slug);
    });

    afterUpdate(() => {
        if (!data.question) {
            // If it's not a question goto result
            goto("/result");
        }
    });

    const loadNextQuestion = () => {
        const nextQuestionId = data.question.question_id + 1;
        goto(`/test/${nextQuestionId}`);
        //window.location.href = `/test/${nextQuestionId}`;
        selectedAnswer = getSelectedValue(nextQuestionId);
    };
    const handleAnswerSubmit = () => {
        console.log(typeof selectedAnswer, selectedAnswer);
        if (typeof selectedAnswer == "number" && !isNaN(selectedAnswer)) {
            document.cookie = `question_${data.question.question_id}=${selectedAnswer}; path=/; SameSite=Strict`;
            //selectedAnswer = 2;
            selectedAnswer = NaN;
            loadNextQuestion();
        } else {
            alert("Bitte wählen Sie eine Antwort aus.");
        }
    };
    function getSelectedValue(questionId) {
        let tempSelected = "";
        const cookieName = `question_${questionId}`;
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(cookieName + "=")) {
                // Cookie exists, set selectedAnswer to the cookie value
                tempSelected = cookie.substring(cookieName.length + 1);
                return parseInt(tempSelected, 10);
            }
        }
        return "";
    }
</script>

<svelte:head>
    {#if data.question}
        <title>{data.question.question_id} - Kommunikationstest</title>
    {:else}
        <title>Kommunikationstest</title>
    {/if}
</svelte:head>

<main>
    {#if data.question}
        <h2>
            <p>{data.question.question_id}. {data.question.question_text}</p>
        </h2>
        <br />
        {#if data.answers.length > 0}
            {#each data.answers as answer (answer.answer_id)}
                <p>
                    <label>
                        <input
                            type="radio"
                            name="answerSelection"
                            bind:group={selectedAnswer}
                            value={answer.answer_id}
                            class="form-check-input"
                        />
                        {answer.answer_text}
                    </label>
                </p>
            {/each}
            <br /><button on:click={handleAnswerSubmit} class="btn btn-primary"
                >Weiter</button
            >
        {:else}
            <p>Error: no answer found.</p>
        {/if}
    {:else}
        <p>Das war die letzte Frage. Ab zur Auswertung.</p>
    {/if}
</main>
