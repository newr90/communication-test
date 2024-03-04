<script>
    import { onMount, onDestroy } from "svelte";

    let timeout;

    onMount(() => {
        // Relocate to /test/1 after 2 seconds
        timeout = setTimeout(() => {
            window.location.href = "/test/1";
        }, 2000);

        return () => {
            // Cleanup the timeout when the component is destroyed
            clearTimeout(timeout);
        };
    });

    onDestroy(() => {
        // Clear the timeout if the component is unmounted before it triggers
        clearTimeout(timeout);
    });
</script>

<main>
    <h1>Los gehts mit Situation 1</h1>
</main>
