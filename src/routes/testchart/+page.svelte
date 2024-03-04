<script>
    import Chart from "../../components/Chart.svelte";
    import PieChart from "../../components/PieChart.svelte";
    import RadarChart from "../../components/RadarChart.svelte";

    let chartData = {
        Sachohr: 6,
        Beziehungsohr: 2,
        Appellohr: 3,
        Selbstaussageohr: 1,
    };
</script>

<Chart data={chartData} />
<PieChart data={chartData} />
<RadarChart data={chartData} />
