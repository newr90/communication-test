<script>
    import { onMount, onDestroy } from "svelte";
    import { goto } from "$app/navigation";

    let timeout;

    onMount(() => {
        // Relocate to /test/1 after 2 seconds
        timeout = setTimeout(() => {
            goto("/test/1");
        }, 2000);
    });

    onDestroy(() => {
        // Clear the timeout if the component is unmounted before it triggers
        clearTimeout(timeout);
    });
</script>

<svelte:head>
    <title>Der Test startet</title>
</svelte:head>
<main>
    <h1>Es geht los mit Situation 1.</h1>
</main>
