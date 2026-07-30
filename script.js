/* ==========================================================================
   Traoré Kader Ali — Portfolio professionnel
   Script principal (navigation, animations légères, formulaire de contact)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* -- 1. En-tête : ombre au défilement ---------------------------------- */
  var header = document.querySelector(".site-header");
  var backToTop = document.querySelector(".back-to-top");

  function onScroll() {
    var scrolled = window.scrollY > 12;
    if (header) header.classList.toggle("is-scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 500);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -- 2. Menu mobile ------------------------------------------------------ */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -- 3. Mise en surbrillance du lien de navigation actif ----------------- */
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navAnchors.forEach(function (a) {
              a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* -- 4. Animations légères au défilement --------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* -- 5. Année du pied de page --------------------------------------------- */
  var yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -- 5bis. Fenêtres modales (détail de projet) ----------------------------- */
  var openModalTriggers = document.querySelectorAll("[data-modal-open]");
  var lastFocusedEl = null;

  function openModal(modal, trigger) {
    if (!modal) return;
    lastFocusedEl = trigger || document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    var closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
    document.addEventListener("keydown", onModalKeydown);
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", onModalKeydown);
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function onModalKeydown(event) {
    if (event.key === "Escape") {
      var openModalEl = document.querySelector(".modal-overlay:not([hidden])");
      closeModal(openModalEl);
    }
  }

  openModalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var modal = document.getElementById(trigger.getAttribute("data-modal-open"));
      openModal(modal, trigger);
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      // Sur le fond (overlay), ne fermer que si le clic touche le fond lui-même, pas le panneau.
      // Sur le bouton de fermeture, toujours fermer (même en cliquant sur l'icône à l'intérieur).
      if (el.classList.contains("modal-overlay") && event.target !== el) return;
      closeModal(el.closest(".modal-overlay"));
    });
  });

  /* -- 6. Formulaire de contact ----------------------------------------------
     Envoi en arrière-plan (AJAX) vers Formspree, sans recharger la page.
     Le formulaire garde son attribut action/method (voir index.html) comme
     solution de secours si JavaScript est désactivé.
  ------------------------------------------------------------------------- */
  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");
  var submitBtn = contactForm ? contactForm.querySelector("button[type='submit']") : null;

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Envoi en cours…";
      }

      fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            showFormStatus("success", "Merci, votre message a bien été envoyé. Je vous répondrai rapidement par e-mail.");
            contactForm.reset();
          } else {
            return response.json().then(function (data) {
              var detail = data && data.errors && data.errors.length
                ? data.errors.map(function (e) { return e.message; }).join(" ")
                : "";
              showFormStatus("info", "Une erreur est survenue lors de l'envoi. " + detail + " Merci de réessayer ou de m'écrire directement par e-mail.");
            });
          }
        })
        .catch(function () {
          showFormStatus("info", "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de m'écrire directement par e-mail.");
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Envoyer le message";
          }
        });
    });
  }

  function showFormStatus(type, message) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = "form-status is-visible is-" + type;
    formStatus.setAttribute("role", "status");
  }
});
