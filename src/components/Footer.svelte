<script>
  let currentDate = new Date();

  let month = currentDate.getMonth() + 1;
  let formattedMonth = (month < 10 ? "0" : "") + month;

  let year = currentDate.getFullYear();
  let formattedYear = year.toString(); // Ensure the year is represented in four digits

  let formattedDate = `${formattedMonth}.${formattedYear}`;
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
