<!-- Chart.svelte -->
<script>
    import { onMount, afterUpdate } from "svelte";
    import Chart from "chart.js/auto";

    export let data;

    let canvas;
    let chart;

    afterUpdate(() => {
        chart.data.datasets[0].data = Object.values(data);
        chart.update();
    });

    onMount(() => {
        const ctx = canvas.getContext("2d");

        // Create the chart
        chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: Object.keys(data),
                datasets: [
                    {
                        label: "Antworten",
                        data: Object.values(data),
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                responsive: true, // Enable automatic resizing
                maintainAspectRatio: false,
            },
        });
    });
</script>

<div>
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    div {
        flex: 1; /* Take up available space */
        max-height: 60vh;
    }

    canvas {
        width: 100%;
        height: 100%;
    }
</style>
