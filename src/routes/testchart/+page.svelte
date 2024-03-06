<script>
    import Chart from "$lib/comp/Chart.svelte";
    import PieChart from "$lib/comp/PieChart.svelte";
    import RadarChart from "$lib/comp/RadarChart.svelte";

    let selectedChartType = "radar";

    let chartData = {
        Sachohr: 7,
        Beziehungsohr: 1,
        Appellohr: 3,
        Selbstaussageohr: 1,
    };
    let labels = Object.keys(chartData);
</script>

<svelte:head>
    <title>Chartbeispiele</title>
</svelte:head>
<main>
    {#each labels as label}
        <div>
            <label for="{label}Slider">{label}</label>
            <input
                type="range"
                bind:value={chartData[label]}
                id="{label}Slider"
                class="form-range"
                min="0"
                max="10"
            />
        </div>
    {/each}
</main>
<div>
    <label>
        <input
            type="radio"
            bind:group={selectedChartType}
            value="bar"
            class="form-check-input"
        />
        Balkendiagramm
    </label>
    <label>
        <input
            type="radio"
            bind:group={selectedChartType}
            value="pie"
            class="form-check-input"
        />
        Kreisdiagramm
    </label>
    <label>
        <input
            type="radio"
            bind:group={selectedChartType}
            value="radar"
            class="form-check-input"
        />
        Netzdiagramm
    </label>
</div>

{#if chartData}
    {#if selectedChartType === "bar"}
        <Chart bind:data={chartData} />
    {:else if selectedChartType === "pie"}
        <PieChart bind:data={chartData} />
    {:else if selectedChartType === "radar"}
        <RadarChart bind:data={chartData} />
    {/if}
{/if}
