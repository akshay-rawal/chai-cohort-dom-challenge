document.addEventListener("DOMContentLoaded", () => {
  const accordionBtn = document.querySelectorAll(".accordion-button");

  accordionBtn.forEach((section) => {
    section.addEventListener("click", () => {
      const accordionItem = section.parentElement;
      const isActive = accordionItem.classList.contains("active");

      document
        .querySelectorAll(".accordion-item")
        .forEach((otherContent) => {
            otherContent.classList.remove("active");
            otherContent.querySelector(".accordion-content").style.display = "none";
            otherContent.querySelector(".arrow").style.transform = "rotate(0deg)";
          })

          if (!isActive) {
            accordionItem.classList.add("active");
            accordionItem.querySelector(".accordion-content").style.display = "block";
            section.querySelector(".arrow").style.transform = "rotate(180deg)";
          }
        });
      });
    });