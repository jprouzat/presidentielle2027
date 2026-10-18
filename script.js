/* ==========================================================================
   LE POUVOIR DE VIVRE ENSEMBLE — comportements de la page
   --------------------------------------------------------------------------
   Quatre choses ici, dans l'ordre :
     1. la barre de progression de lecture en haut de l'écran
     2. l'apparition en fondu des sections quand on les atteint
     3. les montants qui défilent jusqu'à leur valeur
     4. le TEST des quatre piliers (le coeur de la page)

   Tu n'as normalement jamais besoin de toucher ce fichier, sauf pour
   changer les phrases du verdict du test (repère « VERDICT » plus bas).
   ========================================================================== */

(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- 1. barre de progression --- */
  var bar = document.getElementById("progress");
  var ticking = false;
  function updateBar() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? Math.min(1, h.scrollTop / max) : 0;
    bar.style.transform = "scaleX(" + p + ")";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateBar); }
  }, { passive: true });
  updateBar();

  /* --- 2. apparition des sections --- */
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* --- 3. montants qui défilent ---
     Les valeurs viennent des attributs data-count et data-dec dans index.html.
     Pour changer un montant, modifie-le DANS index.html, pas ici. */
  function fmt(n, dec) {
    return n.toLocaleString("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + " €";
  }
  var nums = document.querySelectorAll("[data-count]");
  if (!reduce && "IntersectionObserver" in window) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        nio.unobserve(el);
        var target = parseFloat(el.getAttribute("data-count"));
        var dec = parseInt(el.getAttribute("data-dec"), 10) || 0;
        var start = null, dur = 1100;
        function step(ts) {
          if (start === null) start = ts;
          var t = Math.min(1, (ts - start) / dur);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = fmt(target * eased, dec);
          if (t < 1) window.requestAnimationFrame(step);
          else el.textContent = fmt(target, dec);
        }
        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { nio.observe(el); });
  }

  /* --- 4. le test des quatre piliers --- */
  var tester = document.getElementById("tester");
  var buttons = Array.prototype.slice.call(document.querySelectorAll("#toggles button"));
  var verdict = document.getElementById("verdict");
  var why = document.getElementById("why");

  function labelFor(btn, pressed) {
    var fem = btn.getAttribute("data-name") !== "le développement durable";
    return pressed ? (fem ? "dégradée" : "dégradé") : (fem ? "préservée" : "préservé");
  }

  function render() {
    var broken = buttons.filter(function (b) { return b.getAttribute("aria-pressed") === "true"; });
    buttons.forEach(function (b) {
      var pressed = b.getAttribute("aria-pressed") === "true";
      b.querySelector(".state").textContent = pressed ? "✕" : "✓";
      b.querySelector(".verdict-word").textContent = labelFor(b, pressed);
    });

    /* ===== VERDICT — les phrases affichées sous le test ===== */
    if (broken.length === 0) {
      tester.classList.add("is-ok"); tester.classList.remove("is-ko");
      verdict.textContent = "Décision recevable.";
      why.textContent = "Les quatre piliers sont préservés. La décision passe le test du contrat.";
    } else {
      tester.classList.add("is-ko"); tester.classList.remove("is-ok");
      verdict.textContent = "Ce n'est pas la bonne décision.";
      var names = broken.map(function (b) { return b.getAttribute("data-name"); });
      var list = names.length === 1 ? names[0]
        : names.slice(0, -1).join(", ") + " et " + names[names.length - 1];
      why.textContent = "Cette décision dégrade " + list + ". Il faut en trouver une autre.";
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
      render();
    });
  });
  render();
})();
