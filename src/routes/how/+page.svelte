<svelte:head>
    <title>Wie und Warum?</title>
</svelte:head>
<h3>
    Dies ist ein Projekt für die Fächer Betriebspsychologie und Softwaretechnik
</h3>
<h4>Was ist die Aufgabe?</h4>
<p>Dies war die Vorgabe für das Projekt:</p>
<p class="card" style="padding: 10px;">
    <i>
        <b>User Story Kommunikationstest</b><br />
        "Ich möchte wissen auf welchem der 4-Ohren (nach Schulz von Thun) ich besonders
        häufig, -vielleicht zu häufig-, höre. Dazu möchte ich multiple-Choice Fragen
        online beantworten und sowohl eine inhaltliche, als auch grafische Auswertung
        erhalten."<br /><br />Mögliche Fragen und eine Auswertung finden Sie
        unter:<br /><br />
        <a
            href="http://www.seminare-training.com/files/Dateiordner/Seminare-Training/PDFs%20-%20AB/Kommunikationstest.pdf"
            >http://www.seminare-training.com/files/Dateiordner/Seminare-Training/PDFs-AB/Kommunikationstest.pdf</a
        >
    </i>
</p>
<h4>Wie wurde es umgesetzt?</h4>
<p>
    Das Projekt basiert auf <b>Sveltekit mit Modulen</b>. Zur Speicherung von
    Daten werden <b>Cookies</b> (für die gegebenen Antworten) und eine
    <b>SQLite-Datenbank</b> (für Fragen, Antworten und Eigenschaften) verwendet.<br
    /><br />
    <a href="/Handzettel.pdf"
        >Hier gibt's techniche Details im <b>Handzettel</b> für das Softwaretechnik-Referat
        (npm Befehle / Server-Client Kommunkation / Nginx-proxy)
    </a><br /><br />
    Die <b>Module</b> sind:<br />
    - better-sqlite3 (Datenbankanbindung)<br />
    - chart.js <a href="/testchart">Beispielcharts (Livefunktion)</a><br />
    - bootstrap (Design)<br />
    - <a href="https://svelte-put.vnphanquang.com/docs/qr">@svelte-put/qr</a><br
    /><br />
    Der Quelltext ist auf Github zu finden:
    <a href="https://github.com/newr90/communication-test"
        >Communication-test@github</a
    >
</p>
<h4>Programmablaufplan</h4>
<p>
    <img
        src="/Ablaufplan.drawio.png"
        alt="PAP"
        style="max-width:485px; width:100%"
    />
</p>
<h4>Die Datenbank (SQLite)</h4>
<p>
    <img
        src="/db.drawio.png"
        alt="Datebank"
        style="max-width:662px; width:100%"
    />
</p>
