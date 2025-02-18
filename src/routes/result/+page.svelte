<script>
    import { onMount } from "svelte";
    import Chart from "$lib/comp/Chart.svelte";
    import PieChart from "$lib/comp/PieChart.svelte";
    import RadarChart from "$lib/comp/RadarChart.svelte";

    let answerCookies = {};
    let result;
    let selectedChartType = "radar"; // Default chart type

    export let data;

    const getAllAnswerCookies = () => {
        const allCookies = document.cookie.split(";");
        const cookies = {};

        allCookies.forEach((cookie) => {
            const [name, value] = cookie.trim().split("=");

            // Check if the cookie is related to a question answer
            const match = name.match(/^question_(\d+)$/);
            if (match) {
                const questionId = match[1];
                cookies[questionId] = value;
            }
        });

        return cookies;
    };

    onMount(() => {
        answerCookies = getAllAnswerCookies();
        result = createPropertyObject(data.properties, answerCookies);
    });

    function createPropertyObject(properties, givenAnswers) {
        const result = {};

        // Initialize all properties to 0
        properties.forEach((obj) => {
            if (obj.property_name) {
                result[obj.property_name] = 0;
            }
        });

        for (const questionId in givenAnswers) {
            const answerId = parseInt(givenAnswers[questionId]);

            // Filter the properties array to find the matching object(s)
            const matchingObjects = properties.filter(
                (obj) => obj.answer_id === answerId,
            );

            // Create or update the property in the result object
            matchingObjects.forEach((matchingObject) => {
                if (matchingObject.property_name) {
                    const propertyName = matchingObject.property_name;

                    // Initialize the property in the result object if it doesn't exist
                    // Isn't needed (lines 40-44)
                    if (!result.hasOwnProperty(propertyName)) {
                        result[propertyName] = 0;
                    }

                    // Increase the value based on the property_value in matchingObject
                    result[propertyName] += matchingObject.property_value;
                }
            });
        }
        console.log(result);
        return result;
    }
</script>

<svelte:head>
    <title>Ergebnis</title>
</svelte:head>

{#if result}
    {#if result.Sachohr && result.Sachohr > 5}
        <p>
            Ihre Antworten deuten darauf hin, dass Sie besonders sensibel für
            sachliche Informationen sind und Wert auf Fakten legen. Sie haben
            größtenteils ein <strong>Sachohr</strong>.
        </p>
    {:else if result.Beziehungsohr && result.Beziehungsohr > 5}
        <p>
            Sie sind besonders auf zwischenmenschliche Beziehungen fokussiert.
            Sie haben größtenteils ein <strong>Beziehungsohr</strong>.
        </p>
    {:else if result.Appellohr && result.Appellohr > 5}
        <p>
            Es scheint, als ob Sie eine ausgeprägte Bereitschaft haben, sich
            aktiv für die Belange anderer einzusetzen und sich sozial zu
            engagieren. Sie haben größtenteils ein <strong>Appellohr</strong>.
        </p>
    {:else if result.Selbstaussageohr && result.Selbstaussageohr > 5}
        <p>
            Sie legen viel Wert auf Selbstreflexion und -ausdruck. Sie haben
            größtenteils ein <strong>Selbstaussageohr</strong>.
        </p>
    {:else}
        <p>
            Ihre Ergebnisse zeigen eine <strong>ausgewogene Verteilung.</strong>
        </p>
        {#if result.Sachohr && result.Sachohr > 3}
            <p>Sie neigen aber dazu, ein <strong>Sachohr</strong> zu haben.</p>
        {:else if result.Beziehungsohr && result.Beziehungsohr > 3}
            <p>
                Sie neigen aber dazu, ein <strong>Beziehungsohr</strong> zu haben.
            </p>
        {:else if result.Appellohr && result.Appellohr > 3}
            <p>
                Sie neigen aber dazu, ein <strong>Appellohr</strong> zu haben.
            </p>
        {:else if result.Selbstaussageohr && result.Selbstaussageohr > 3}
            <p>
                Sie neigen aber dazu, ein <strong>Selbstaussageohr</strong> zu haben.
            </p>
        {/if}
    {/if}
{/if}

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

{#if result}
    {#if selectedChartType === "bar"}
        <Chart data={result} />
    {:else if selectedChartType === "pie"}
        <PieChart data={result} />
    {:else if selectedChartType === "radar"}
        <RadarChart data={result} />
    {/if}
{/if}
<br /><br />
<p>
    <b>Was bedeuten die einzelnen „Ohren“?</b> Nach Schulz von Thun könnten Sie eine
    Botschaft auf „4 Ohren“ hören.
</p>
<p>
    <b>Sach-Ohr:</b> Das Sachohr hört auf der rein sachlichen Ebene die neutrale
    Botschaft. „Wie ist der Sachinhalt zu verstehen?“
</p>
<p>
    <b>Selbstaussage/-kundgabe/Selbstoffenbarungs-Ohr:</b>
    Mit diesem Ohr hören Sie, was der Sender der Botschaft über sich selbst aussagt,
    wie es ihm geht. „Was ist das für ein Mensch, was geht in ihm vor?“
</p>
<p>
    <b>Beziehungs-Ohr:</b>
    Mit diesem Ohr empfangen Sie Botschaften über die Beziehung zwischen Ihnen und
    dem Sender: „Was hält dieser Mensch von mir? Wie steht der zu mir?“
</p>
<p>
    <b>Appell-Ohr:</b> Dieses Ohr hört, welche Aufforderung in der Botschaft steckt:
    „Was soll ich tun/denken/fühlen aufgrund dieser Botschaft?“
</p>
<p>
    <center
        ><img
            src="/Ebenen.png"
            alt="Empfangsebenen"
            style="max-width:592px; width:100%"
        /></center
    >
</p>
<p>
    Der Empfänger „entscheidet selbst“ (nicht immer bewusst), auf welchem „Ohr“
    er/sie gerade hören will. <b>„Wahr“</b> (d.h. entscheidend für die weitere
    Kommunikation) <b>ist, was der Empfänger versteht,</b> nicht, was der Sender
    abgeschickt hat. Deshalb hilft dieses Modell, Missverständnisse aufzuklären bzw.
    mehr Klarheit in der eigenen Kommunikation zu gewinnen.
</p>
<p>
    <a href="/Kommunikationstest.pdf"
        >Hier finden Sie das PDF, welches Grundlage für diesen Test ist.</a
    >
</p>
