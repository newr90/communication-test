<script>
    import { onMount } from "svelte";

    let navItems = [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
    ];

    onMount(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {});
    });
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand text-white" href="/">CSS-Codegenerator Neumann</a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {#each navItems as { text, href }}
                    <li class="nav-item">
                        <a class="nav-link text-white" {href}>{text}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>