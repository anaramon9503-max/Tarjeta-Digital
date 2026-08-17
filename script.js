const triggers = document.querySelectorAll(".accordion-trigger");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion-item");
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      otherItem.classList.remove("open");
      otherItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});
