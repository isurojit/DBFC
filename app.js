let lastScrollTop = 0;
const sidebar = document.querySelector(".sticky-sidebar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down
    sidebar.classList.remove("show");
  } else {
    // Scroll Up
    sidebar.classList.add("show");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
});
