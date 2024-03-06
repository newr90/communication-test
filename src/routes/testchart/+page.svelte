<script>
    import Chart from "../../lib/comp/Chart.svelte";
    import PieChart from "$lib/comp/PieChart.svelte";
    import RadarChart from "$lib/comp/RadarChart.svelte";

    let chartData = {
        Sachohr: 7,
        Beziehungsohr: 1,
        Appellohr: 3,
        Selbstaussageohr: 1,
    };
</script>

<svelte:head>
    <title>Chartbeispiele</title>
</svelte:head>
<Chart data={chartData} />
<PieChart data={chartData} />
<RadarChart data={chartData} />
