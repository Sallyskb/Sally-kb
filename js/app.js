// رسالة ترحيب
console.log("مرحباً بك في Sally KB Library");

// تأثير بسيط عند الضغط على الأزرار
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});
