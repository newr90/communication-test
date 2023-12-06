<script>
  let currentDate = new Date();
  let formattedDate = `${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;
</script>

<footer>
  <div class="container">
    <p>&copy; Robert Neumann {formattedDate}</p>
  </div>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #343a40; /* Hintergrundfarbe anpassen */
    color: white; /* Textfarbe anpassen */
    padding: 1rem;
    text-align: center;
  }
</style>
