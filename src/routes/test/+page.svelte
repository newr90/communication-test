<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.questions);

    // Relocate to /test/1 after 2 seconds
    setTimeout(function () {
        window.location.href = "/test/1";
    }, 2000);
</script>

<main>
    <h1>Los gehts mit Situation 1</h1>
</main>
