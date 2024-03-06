<script>
    import { qr } from "@svelte-put/qr/img";
</script>

<center
    ><img
        use:qr={{
            data: "https://com.home.roneu.de",
            logo: "https://com.home.roneu.de/Logo RN.png",
            shape: "circle",
        }}
        alt="qr"
        style="max-height: 60vh;"
    />
</center>
