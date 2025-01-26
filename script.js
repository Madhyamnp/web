document.addEventListener("DOMContentLoaded", () => {
  // Question boxes functionality
  const questionBoxes = document.querySelectorAll(".question__box");
  console.log("Question boxes:", questionBoxes); 

  questionBoxes.forEach((box) => {
    const title = box.querySelector(".title");

    // Add a click event listener to the title
    title.addEventListener("click", () => {
      // Toggle the "active" class for the clicked box
      box.classList.toggle("active");

      // Close other boxes if one is opened (optional)
      questionBoxes.forEach((otherBox) => {
        if (otherBox !== box) {
          otherBox.classList.remove("active");
        }
      });
    });
  });

  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav__links");

  if (hamburger && navLinks) {
    console.log("Hamburger and nav links found."); 
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });
  }

  // Read more button functionality
  const readMoreButtons = document.querySelectorAll(".read-more");
  console.log("Read more buttons:", readMoreButtons); 

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const card = button.closest(".service__card");
      const description = card.querySelector(".service__description");

      if (description.classList.contains("expanded")) {
        description.classList.remove("expanded");
        button.innerHTML = `Read more <span><i class="ri-arrow-right-line"></i></span>`;
      } else {
        description.classList.add("expanded");
        button.innerHTML = `Read less <span><i class="ri-arrow-left-line"></i></span>`;
      }
    });
  });
});

