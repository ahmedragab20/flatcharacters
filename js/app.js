const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("go");
  } else {
    toTop.classList.remove("go");
  }
});
// the scroll effect
ScrollReveal().reveal("header");
ScrollReveal().reveal(".article-1");
ScrollReveal().reveal(".article-2");
ScrollReveal().reveal(".team");
ScrollReveal().reveal(".article-3");
ScrollReveal().reveal(".article-4");
ScrollReveal().reveal(".subscribe");
ScrollReveal().reveal("footer");
