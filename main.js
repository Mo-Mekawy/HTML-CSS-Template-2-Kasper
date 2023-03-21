// slide landing image
const beforeBtn = document.querySelector("[data-slide-to=before]");
const afterBtn = document.querySelector("[data-slide-to=after]");
const landingImgs = document.querySelectorAll("[data-landing-img]");
const bullets = document.querySelector(".bullets");

beforeBtn.onclick = (e) => {
  const activeBullet = document.querySelector(".bullet.active");
  landingImgs.forEach((img) => {
    if (+img.dataset.landingImg === 1) {
      img.dataset.landingImg = 2;
      img.dataset.active = true;
    } else if (+img.dataset.landingImg === 2) {
      img.dataset.landingImg = 3;
      img.dataset.active = true;
    } else if (+img.dataset.landingImg === 3) {
      img.dataset.landingImg = 1;
      img.dataset.active = false;
    }
  });
  activeBullet.classList.remove("active");

  if (bullets.firstElementChild === activeBullet)
    bullets.lastElementChild.classList.add("active");
  else activeBullet.previousElementSibling.classList.add("active");
};

afterBtn.onclick = (e) => {
  const activeBullet = document.querySelector(".bullet.active");
  landingImgs.forEach((img) => {
    if (+img.dataset.landingImg === 1) {
      img.dataset.landingImg = 3;
      img.dataset.active = false;
    } else if (+img.dataset.landingImg === 2) {
      img.dataset.landingImg = 1;
      img.dataset.active = true;
    } else if (+img.dataset.landingImg === 3) {
      img.dataset.landingImg = 2;
      img.dataset.active = true;
    }
  });
  activeBullet.classList.remove("active");

  if (bullets.lastElementChild === activeBullet)
    bullets.firstElementChild.classList.add("active");
  else activeBullet.nextElementSibling.classList.add("active");
};

// scroll to top btn
const scrollToTopBtn = document.querySelector("[data-button=scrollToTop]");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight)
    scrollToTopBtn.classList.add("visible");
  else scrollToTopBtn.classList.remove("visible");
});

// filter gallery
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const allImages = document.querySelectorAll("[data-image-type]");

const filterWork = (imgType) => {
  const filteredImages =
    imgType === "all"
      ? Array.from(document.querySelectorAll("[data-image-type]"))
      : Array.from(document.querySelectorAll(`[data-image-type=${imgType}]`));

  allImages.forEach((work) => {
    work.classList.remove("fade-in");
    work.classList.add("fade-out");

    if (filteredImages.includes(work)) {
      work.classList.add("fade-in");
      work.classList.remove("fade-out");
    }
  });
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    filterWork(e.target.dataset["filterBtn"]);
  });
});

// increase progress on scroll
const skillsSection = document.querySelector("[data-skills-container]");
const progressBars = document.querySelectorAll("[data-progress-width]");

progressBars.forEach((bar) => {
  bar.style.setProperty("--percent", bar.dataset.progressWidth + "%");
  bar.style.setProperty("--percent-int", bar.dataset.progressWidth);
});

window.onscroll = (e) => {
  if (window.scrollY >= skillsSection.offsetTop - window.innerHeight + 200) {
    progressBars.forEach((bar) => {
      bar.style.setProperty("--scale-x", "1");
      window.onscroll = null;
    });
  }
};
