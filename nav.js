(function () {
  function isIndexPage() {
    const path = (window.location.pathname || "").toLowerCase();
    // funktioniert für .../ , .../index.html, .../index.htm
    return (
      path.endsWith("/") ||
      path.endsWith("/index.html") ||
      path.endsWith("/index.htm")
    );
  }

  function buildNav() {
    const onIndex = isIndexPage();

    const bar = document.createElement("div");
    bar.className = "appbar";

    // Nur auf Nicht-Index-Seiten den Zurück-Button anzeigen
    const backBtn = onIndex
      ? ""
      : `<a class="navbtn" href="#" id="nav_back">↩︎ Zurück</a>`;

    bar.innerHTML = `
      <div class="appbar-inner">
        <a class="brand" href="index.html">Medical Scores</a>
        <span class="spacer"></span>
        <a class="navbtn" href="index.html">🏠 Startseite</a>
        ${backBtn}
      </div>
    `;

    document.body.prepend(bar);

    // Click-Handler nur, wenn Button existiert
    const back = document.getElementById("nav_back");
    if (back) {
      back.addEventListener("click", (e) => {
        e.preventDefault();
        history.back();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", buildNav);
})();
