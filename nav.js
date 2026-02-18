(function () {

  function getCurrentFile() {
    const path = window.location.pathname;
    const parts = path.split("/");
    let file = parts.pop();

    if (file === "") {
      return "index.html";
    }

    return file.toLowerCase();
  }

  function buildNav() {
    const file = getCurrentFile();
    const isIndex = (file === "index.html");

    const bar = document.createElement("div");
    bar.className = "appbar";

    let rightSide = "";

    // Nur auf Nicht-Index-Seiten Zurück anzeigen
    if (!isIndex) {
      rightSide = `
        <a class="navbtn" href="#" id="nav_back">↩︎ Zurück</a>
      `;
    }

    bar.innerHTML = `
      <div class="appbar-inner">
        <a class="brand" href="index.html">Medical Scores</a>
        <span class="spacer"></span>
        ${rightSide}
      </div>
    `;

    document.body.prepend(bar);

    const back = document.getElementById("nav_back");
    if (back) {
      back.addEventListener("click", function (e) {
        e.preventDefault();
        history.back();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", buildNav);

})();
