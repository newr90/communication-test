<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.questions);

    import { onMount } from "svelte";

    onMount(() => {
        // Relocate to /test/1 after 2 seconds
        setTimeout(() => {
            window.location.href = "/test/1";
        }, 2000);
    });
</script>

<main>
    <h1>Los gehts mit Situation 1</h1>
</main>
