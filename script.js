// Initialize Lucide icons
lucide.createIcons();

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    /* Updated header scroll background for dark theme */
    header.style.backgroundColor = "rgba(17, 34, 64, 0.95)";
    header.style.backdropFilter = "blur(10px)";
    header.style.boxShadow =
      "0 1px 3px 0 rgba(100, 255, 218, 0.1), 0 1px 2px 0 rgba(100, 255, 218, 0.06)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
    header.style.boxShadow = "none";
  }
});

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Animate progress bars when skills section comes into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        bar.classList.add("animate");
      });
    }
  });
}, observerOptions);

// Observe experience section instead
const experienceSection = document.getElementById("experience");
if (experienceSection) {
  observer.observe(experienceSection);
}


// Add some entrance animations on scroll
const animateOnScroll = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Apply animation to sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  animateOnScroll.observe(section);
});

// Hero section should be visible immediately
document.querySelector("section").style.opacity = "1";
document.querySelector("section").style.transform = "translateY(0)";
