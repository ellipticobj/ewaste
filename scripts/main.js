const currentPath = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

const sections = document.querySelectorAll("section[id]");
const dots = document.querySelectorAll(".section-dots .dot");

if (sections.length && dots.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dots.forEach((d) => d.classList.remove("active"));
          const active = document.querySelector(
            `.section-dots .dot[href="#${entry.target.id}"]`,
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
  );

  sections.forEach((s) => sectionObserver.observe(s));
}
