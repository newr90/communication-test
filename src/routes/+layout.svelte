<script>
    import Navbar from "$lib/comp/Navbar.svelte";
    import Footer from "$lib/comp/Footer.svelte";
</script>

<header>
    <Navbar />
</header>
<br />
<main class="container">
    <slot />
</main>
<br />
<Footer />
<br /><br /><br />

<style>
    @import "bootstrap/dist/css/bootstrap.min.css";
    @import "./globalStyles.css";
</style>
