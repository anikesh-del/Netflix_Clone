// FAQ Toggle
const faqs = document.querySelectorAll(".faqbox");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
    });
});

// Email Validation on Red Buttons (hero and bottom)
document.querySelectorAll(".btn-red").forEach(button => {
    button.addEventListener("click", () => {
        const input = button.previousElementSibling;
        if (input && input.tagName === "INPUT") {
            const email = input.value.trim();
            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
            } else {
                alert(`Thanks, ${email}! Redirecting to sign-up...`);
            }
        }
    });
});

// Language Select Alert
const langSelect = document.querySelector(".language-select");
if (langSelect) {
    langSelect.addEventListener("change", (e) => {
        alert(`Language switched to: ${e.target.value}`);
    });
}

// Smooth Scroll (if you use anchor links like #faq or #contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
