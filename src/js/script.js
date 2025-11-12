const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector("nav.menu");

toggle.addEventListener("click", () => {
  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

  if (isOpen) {
    // Fermer
    nav.ariaHidden = "true";
    toggle.ariaExpanded = "false";
    document.body.classList.remove("noscroll");
  } else {
    // Ouvrir
    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
    document.body.classList.add("noscroll");
  }
  toggle.addEventListener("click", () => {
  const isOpen = toggle.ariaExpanded === "true";
  const nextIsOpen = !isOpen;

  nav.ariaHidden = nextIsOpen ? "false" : "true";
  toggle.ariaExpanded = nextIsOpen ? "true" : "false";
  document.body.classList.toggle("noscroll", nextIsOpen);
});
});

