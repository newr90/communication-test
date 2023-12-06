<script>
    let currentDate = new Date();
    let formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
  </script>
  
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
  
  <footer>
    <div class="container">
      <p>&copy; Robert Neumann {formattedDate} </p>
    </div>
  </footer>