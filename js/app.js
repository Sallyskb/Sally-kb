/* =========================
   APP INITIALIZATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MODALS (LOGIN / SIGNUP)
  ========================= */

  const loginBtn = document.querySelector(".login-btn");
  const signupBtn = document.querySelector(".signup-btn");

  const loginModal = document.getElementById("loginModal");
  const signupModal = document.getElementById("signupModal");

  function openModal(modal) {
    if (modal) modal.classList.add("active");
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove("active");
  }

  if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", () => openModal(loginModal));
  }

  if (signupBtn && signupModal) {
    signupBtn.addEventListener("click", () => openModal(signupModal));
  }

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) closeModal(loginModal);
    if (e.target === signupModal) closeModal(signupModal);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(loginModal);
      closeModal(signupModal);
    }
  });

  /* =========================
     BACK TO TOP BUTTON
  ========================= */

  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* =========================
     SPACE ENGINE (OPTIMIZED)
  ========================= */

  const meteorsContainer = document.getElementById("meteors");

  let meteorCount = 0;
  const MAX_METEORS = 15;

  function createMeteor() {
    if (!meteorsContainer) return;

    if (meteorCount >= MAX_METEORS) {
      meteorsContainer.removeChild(meteorsContainer.firstChild);
      meteorCount--;
    }

    const meteor = document.createElement("div");

    meteor.style.position = "absolute";
    meteor.style.width = "2px";
    meteor.style.height = "70px";
    meteor.style.background =
      "linear-gradient(180deg, white, rgba(255,255,255,0))";

    meteor.style.top = Math.random() * window.innerHeight + "px";
    meteor.style.left = Math.random() * window.innerWidth + "px";
    meteor.style.opacity = Math.random();

    meteor.style.transform = "rotate(45deg)";
    meteor.style.pointerEvents = "none";

    meteorsContainer.appendChild(meteor);
    meteorCount++;

    let x = parseFloat(meteor.style.left);
    let y = parseFloat(meteor.style.top);

    const speed = Math.random() * 3 + 2;

    const interval = setInterval(() => {
      x -= speed * 2;
      y += speed * 2;

      meteor.style.left = x + "px";
      meteor.style.top = y + "px";

      if (x < -100 || y > window.innerHeight + 100) {
        meteor.remove();
        meteorCount--;
        clearInterval(interval);
      }
    }, 30);
  }

  /* =========================
     STARS GENERATION
  ========================= */

  function createStars(layerId, count, size) {
    const layer = document.getElementById(layerId);
    if (!layer) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");

      star.style.position = "absolute";
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.background = "white";
      star.style.borderRadius = "50%";

      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.opacity = Math.random();

      fragment.appendChild(star);
    }

    layer.appendChild(fragment);
  }

  /* =========================
     INIT SPACE
  ========================= */

  window.addEventListener("load", () => {

    createStars("stars-small", 60, 1);
    createStars("stars-medium", 40, 2);
    createStars("stars-large", 20, 3);

    setInterval(() => {
      if (!document.hidden) {
        createMeteor();
      }
    }, 4000);

  });

});
let adminMode = false;

function toggleAdmin() {
  adminMode = !adminMode;

  document.getElementById("admin-panel").classList.toggle("hidden");

  alert(adminMode ? "Admin Mode ON 🔥" : "Admin Mode OFF ❌");
}

function createBook() {
  let title = document.getElementById("bookTitle").value;

  if (!title) return;

  let container = document.getElementById("books-container");

  let div = document.createElement("div");
  div.classList.add("book");

  div.innerHTML = `
    <h3>${title}</h3>
    ${adminMode ? '<button onclick="this.parentElement.remove()">حذف</button>' : ''}
  `;

  container.appendChild(div);

  document.getElementById("bookTitle").value = "";
}
