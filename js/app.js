// ===============================
// Sally KB - Space Background
// ===============================

const body = document.body;

// إنشاء النجوم
for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 5 + "s";

    body.appendChild(star);
}

// إنشاء الشهب
function createMeteor() {

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left = Math.random() * window.innerWidth + "px";

    meteor.style.top = "-100px";

    meteor.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    body.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, 5000);
}

// كل عدة ثوان يظهر شهاب
setInterval(() => {

    createMeteor();

}, 3000);

// عند الضغط على زر استكشف الكتب
const exploreBtn = document.querySelector(".hero button");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.querySelector("#books")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}
