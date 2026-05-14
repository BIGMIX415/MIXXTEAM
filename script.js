const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-intake-form]");
const status = document.querySelector("[data-form-status]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const sport = String(data.get("sport") || "").trim();
    const gradYear = String(data.get("gradYear") || "").trim();

    if (!name || !sport || !gradYear) {
      status.textContent = "Please add the athlete name, sport, and graduation year.";
      return;
    }

    status.textContent = `Thanks. MIXTEAM SPORTS has the evaluation request for ${name}, ${sport}, class of ${gradYear}.`;
    form.reset();
  });
}
