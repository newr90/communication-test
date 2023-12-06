<!-- admin/+page.svelte -->

<script>
    import { sha256 } from "js-sha256";
    import { onMount } from "svelte";
    import EditQuestions from "../../components/EditQuestions.svelte";
    import ViewTests from "../../components/ViewTests.svelte";

    import { Question, Answer, Property } from "$lib/db.js";

    let section = "editQuestions";
    let password = "";
    let errorMessage = "";
    let isAuthenticated = false;

    function handleLogin() {
        const hardcodedPasswordHash =
            "9bba5c53a0545e0c80184b946153c9f58387e3bd1d4ee35740f29ac2e718b019"; // Hier sollte der vorher gehashte Wert gespeichert sein
        const hashedPassword = sha256(password);

        if (hashedPassword === hardcodedPasswordHash) {
            // Passwort ist korrekt
            document.cookie = `auth=${hashedPassword}; path=/`;
            isAuthenticated = true;
        } else {
            errorMessage = "Falsches Passwort";
        }
    }

    function handleLogout() {
        document.cookie =
            "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        isAuthenticated = false;
    }

    onMount(() => {
        const authCookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("auth="));

        if (authCookie) {
            const storedHash = authCookie.split("=")[1];
            const expectedHash =
                "9bba5c53a0545e0c80184b946153c9f58387e3bd1d4ee35740f29ac2e718b019"; // Hier sollte der vorher gehashte Wert gespeichert sein

            if (storedHash === expectedHash) {
                // Der Benutzer ist authentifiziert
                isAuthenticated = true;
            }
        }
    });

    function switchSection(newSection) {
        section = newSection;
    }
</script>

<h1>Administration</h1>
{#if isAuthenticated}
    <div>
        <button
            on:click={() => switchSection("editQuestions")}
            class="btn btn-primary"
        >
            Fragen bearbeiten
        </button>
        <button
            on:click={() => switchSection("viewTests")}
            class="btn btn-primary"
        >
            Tests ansehen
        </button>
        <button on:click={handleLogout} class="btn btn-danger"> Logout </button>
    </div>
    <br />
    {#if section === "editQuestions"}
        <EditQuestions />
    {:else if section === "viewTests"}
        <ViewTests />
    {/if}
{:else}
    <!-- Benutzer ist nicht authentifiziert, zeige das Login-Formular -->
    <h1>Login</h1>
    {#if errorMessage}
        <p>{errorMessage}</p>
    {/if}
    <form on:submit|preventDefault={handleLogin}>
        <label for="password">Passwort:</label>
        <input
            type="password"
            bind:value={password}
            id="password"
            required
        /><br />
        <button class="btn btn-primary" type="submit">Login</button>
    </form>
{/if}
