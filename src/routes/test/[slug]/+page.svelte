<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
    let selectedAnswer;
</script>

<main>
    <h1>{data.question.question_id}. {data.question.question_text}</h1>
    <br />
    {#if data.answers.length > 0}
        {#each data.answers as answer (answer.answer_id)}
            <label>
                <input
                    type="radio"
                    name="answerSelection"
                    value={answer.answer_id}
                    class="fs-4"
                />
                {answer.answer_text}
            </label><br /><br />
        {/each}
    {:else}
        <p>No answers found for this question.</p>
    {/if}
</main>
