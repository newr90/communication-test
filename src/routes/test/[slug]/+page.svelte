<script>
    import { onMount, afterUpdate } from "svelte";
    import { goto } from "$app/navigation";

    export let data;

    let selectedAnswer;

    const redirectToResult = () => {
        goto("/result");
    };

    const observeQuestion = () => {
        if (!data.question) {
            redirectToResult();
        }
    };

    // Call observeQuestion on mount
    onMount(observeQuestion);

    // Call observeQuestion after each update
    afterUpdate(observeQuestion);

    const loadNextQuestion = () => {
        const nextQuestionId = data.question.question_id + 1;
        //goto(`/test/${nextQuestionId}`);
        window.location.href = `/test/${nextQuestionId}`;
    };

    const handleAnswerSelection = () => {
        if (selectedAnswer !== undefined) {
            document.cookie = `question_${data.question.question_id}=${selectedAnswer}; path=/`;
            selectedAnswer = undefined;
            loadNextQuestion();
        } else {
            alert("Bitte wählen Sie eine Antwort aus.");
        }
    };

    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        return match ? match[2] : null;
    };
</script>

<main>
    {#if data.question}
        <h1>
            <p>{data.question.question_id}. {data.question.question_text}</p>
        </h1>
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
            <br /><button
                on:click={handleAnswerSelection}
                class="btn btn-primary">Weiter</button
            >
        {:else}
            <p>Error: no answer found.</p>
        {/if}
    {:else}
        <p>Das war die letzte Frage. Ab zur Auswertung.</p>
    {/if}
</main>
