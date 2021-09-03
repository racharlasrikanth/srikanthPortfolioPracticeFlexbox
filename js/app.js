// Elements
const aboutTarget = document.querySelector(".about-section");
const projectTarget = document.querySelectorAll(".card-container");
const certificateTarget = document.querySelectorAll(".certificate-container");
const navBarButton = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-links");

// Functions
const handleIntersectionAbout = function (entries) {
  entries.map((entry) => {
    entry.isIntersecting
      ? entry.target.classList.remove("animate-about")
      : entry.target.classList.add("animate-about");
  });
};

const handleIntersectionProject = function (entries) {
  entries.map((entry) => {
    entry.isIntersecting
      ? entry.target.classList.remove("animate-project")
      : entry.target.classList.add("animate-project");
  });
};

const handleIntersectionCertificate = function (entries) {
  entries.map((entry) => {
    entry.isIntersecting
      ? entry.target.classList.remove("animate-certificate")
      : entry.target.classList.add("animate-certificate");
  });
};

const handleNavBars = function () {
  navLinks.classList.toggle("show-nav-links");
  navLinks.classList.contains("show-nav-links")
    ? (navBarButton.children[0].src = "../icons/close.svg")
    : (navBarButton.children[0].src = "../icons/bars.svg");
};

// Observer
const aboutObserver = new IntersectionObserver(handleIntersectionAbout);
aboutObserver.observe(aboutTarget);

const projectObserver = new IntersectionObserver(handleIntersectionProject);
projectTarget.forEach((eachItem) => {
  projectObserver.observe(eachItem);
});

const certificateObserver = new IntersectionObserver(
  handleIntersectionCertificate
);
certificateTarget.forEach((eachItem) => {
  certificateObserver.observe(eachItem);
});

// Event Handlers
navBarButton.addEventListener("click", handleNavBars);
navLinks.addEventListener("click", function (e) {
  if (e.target.href) {
    handleNavBars();
  }
});
