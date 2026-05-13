const header = document.querySelector(".site-header");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    const headerOffset = header?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
