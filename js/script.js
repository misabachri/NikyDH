(function () {
  "use strict";

  document.getElementById("rok").textContent = new Date().getFullYear();

  /* Přesná výška hlavičky pro layout hero sekce na 100 % výšky okna */
  var siteHeader = document.querySelector(".site-header");
  function setHeaderHeightVar() {
    if (siteHeader) {
      document.documentElement.style.setProperty("--header-h", siteHeader.offsetHeight + "px");
    }
  }
  setHeaderHeightVar();
  window.addEventListener("resize", setHeaderHeightVar);

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

  /* Cookie lišta */
  var cookieBar = document.getElementById("cookieBar");
  var cookieAccept = document.getElementById("cookieAccept");
  var cookieReject = document.getElementById("cookieReject");
  var cookieManage = document.getElementById("cookieManage");
  var cookieModal = document.getElementById("cookieModal");
  var cookieModalClose = document.getElementById("cookieModalClose");
  var cookieModalSave = document.getElementById("cookieModalSave");
  var cookiePrefMaps = document.getElementById("cookiePrefMaps");
  var mapWrap = document.getElementById("mapWrap");
  var mapAllowBtn = document.getElementById("mapAllowBtn");

  function loadMap() {
    if (!mapWrap || mapWrap.querySelector("iframe")) return;
    var iframe = document.createElement("iframe");
    iframe.title = "Mapa – Krymská 37, Karlovy Vary";
    iframe.src = mapWrap.getAttribute("data-map-src");
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.allowFullscreen = true;
    mapWrap.innerHTML = "";
    mapWrap.appendChild(iframe);
  }

  function applyConsent(consent) {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    if (consent.maps) {
      loadMap();
    }
    if (cookieBar) cookieBar.hidden = true;
    if (cookieModal) cookieModal.hidden = true;
  }

  if (cookieBar) {
    var savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      cookieBar.hidden = false;
    } else {
      var consent = JSON.parse(savedConsent);
      if (consent.maps) loadMap();
    }

    if (cookieAccept) {
      cookieAccept.addEventListener("click", function () {
        applyConsent({ necessary: true, maps: true });
      });
    }
    if (cookieReject) {
      cookieReject.addEventListener("click", function () {
        applyConsent({ necessary: true, maps: false });
      });
    }
    if (cookieManage && cookieModal) {
      cookieManage.addEventListener("click", function () {
        if (cookiePrefMaps) {
          var existing = localStorage.getItem("cookieConsent");
          cookiePrefMaps.checked = existing ? JSON.parse(existing).maps : false;
        }
        cookieModal.hidden = false;
      });
    }
    if (cookieModalClose && cookieModal) {
      cookieModalClose.addEventListener("click", function () {
        cookieModal.hidden = true;
      });
    }
    if (cookieModalSave && cookieModal) {
      cookieModalSave.addEventListener("click", function () {
        applyConsent({ necessary: true, maps: !!(cookiePrefMaps && cookiePrefMaps.checked) });
      });
    }
    if (mapAllowBtn) {
      mapAllowBtn.addEventListener("click", function () {
        applyConsent({ necessary: true, maps: true });
      });
    }
  }

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
