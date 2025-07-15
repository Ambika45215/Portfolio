let card = document.querySelectorAll(".cards");
card.forEach((e) => {
    e.addEventListener("click", () => {
        e.classList.toggle("rotate");
    });
});