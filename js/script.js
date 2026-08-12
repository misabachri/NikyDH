(function () {
  "use strict";

  document.getElementById("rok").textContent = new Date().getFullYear();

  /* Přesná výška hlavičky a info lišty pro layout hero sekce na 100 % výšky okna */
  var siteHeader = document.querySelector(".site-header");
  var infobar = document.querySelector(".infobar");
  function setHeaderHeightVar() {
    if (siteHeader) {
      document.documentElement.style.setProperty("--header-h", siteHeader.offsetHeight + "px");
    }
  }
  function setInfobarHeightVar() {
    if (infobar) {
      document.documentElement.style.setProperty("--infobar-h", infobar.offsetHeight + "px");
    }
  }
  setHeaderHeightVar();
  setInfobarHeightVar();
  window.addEventListener("resize", setHeaderHeightVar);
  window.addEventListener("resize", setInfobarHeightVar);

  /* Zmenšení info lišty poté, co se při scrollu přilepí pod menu */
  var infobarSentinel = document.querySelector(".infobar-sentinel");
  if (infobar && infobarSentinel && "IntersectionObserver" in window) {
    var infobarObserver;
    function setupInfobarObserver() {
      if (infobarObserver) infobarObserver.disconnect();
      infobarObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            infobar.classList.toggle("is-pinned", !entry.isIntersecting);
          });
        },
        { rootMargin: "-" + (siteHeader ? siteHeader.offsetHeight : 76) + "px 0px 0px 0px" }
      );
      infobarObserver.observe(infobarSentinel);
    }
    setupInfobarObserver();
    window.addEventListener("resize", setupInfobarObserver);
  }

  /* Mobilní menu */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Zavřít menu" : "Otevřít menu");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Otevřít menu");
      });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".accordion__item").forEach(function (item) {
    var trigger = item.querySelector(".accordion__trigger");
    trigger.addEventListener("click", function () {
      var isOpen = item.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  });

  /* Jemné scroll animace */
  var revealEls = document.querySelectorAll(
    ".benefit, .about__media, .about__content, .services__intro, .services__list li, .contact__col"
  );
  revealEls.forEach(function (el) { el.setAttribute("data-reveal", ""); });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
