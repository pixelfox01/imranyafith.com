document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navItems = document.querySelector(".nav-items");

  navToggle?.addEventListener("click", () => {
    navToggle.classList.toggle("active");

    if (navItems?.classList.contains("hidden")) {
      navItems.classList.remove("hidden");
      navItems.classList.add("flex");

      const listItems = navItems.querySelectorAll("li");
      // Loop through each li and add fade-in animation class with delay
      listItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("opacity-0");
          item.classList.add("opacity-100");
        }, index * 50); // Adjust this value for desired delay between fade-ins
      });
    } else {
      navItems?.classList.add("hidden");
      navItems?.classList.remove("flex");

      navItems?.querySelectorAll("li").forEach((item) => {
        item.classList.remove("opacity-100");
        item.classList.add("opacity-0");
      });
    }
  });
});

// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");
// const overlay = document.querySelector(".nav-overlay");

// navToggle?.addEventListener("click", function() {
//   if (navMenu?.classList.contains("show")) {
//     navMenu?.classList.remove("show");
//     overlay?.classList.remove("show");
//   } else {
//     navMenu?.classList.add("show");
//     overlay?.classList.add("show");
//   }
// });

// overlay?.addEventListener("click", function() {
//   navMenu?.classList.remove("show");
//   overlay?.classList.remove("show");
// });
