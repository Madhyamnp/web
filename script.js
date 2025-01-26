// Select all the question boxes
  const questionBoxes = document.querySelectorAll(".question__box");

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
      const hamburger = document.querySelector(".hamburger-menu");
      const navLinks = document.querySelector(".nav__links");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
      });
      
