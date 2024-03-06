<script>
    import { onMount, afterUpdate } from "svelte";
    import Chart from "chart.js/auto";

    export let data;
    export let type = "pie"; // Default to pie chart

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
            type: type,
            data: {
                labels: Object.keys(data),
                datasets: [
                    {
                        label: "Antworten",
                        data: Object.values(data),
                        backgroundColor: [
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(255, 205, 86, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                            "rgba(75, 192, 192, 1)",
                            "rgba(255, 99, 132, 1)",
                            "rgba(255, 205, 86, 1)",
                            "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
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
