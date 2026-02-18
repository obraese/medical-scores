(function () {
  const bar = document.createElement("div");
  bar.className = "appbar";
  bar.innerHTML = `
    <div class="appbar-inner">
      <a class="brand" href="index.html">Medical Scores</a>
      <span class="spacer"></span>
      <a class="navbtn" href="index.html">🏠 Startseite</a>
      <a class="navbtn" href="#" onclick="history.back(); return false;">↩︎ Zurück</a>
    </div>
  `;

  // Navbar ganz oben in den Body
  document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(bar);

    // Optional: Inhalte etwas nach unten schieben, falls eine Seite am oberen Rand "klebt"
    // Viele deiner Rechner haben vermutlich schon eigene Layouts – das hier ist bewusst minimal.
  });
})();
