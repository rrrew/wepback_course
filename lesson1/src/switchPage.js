export function addListenerShowEl(btn, firstEl, secondEl) {
    btn.addEventListener("click", () => {
        firstEl.classList.toggle ("not-active");
        secondEl.classList.toggle ("not-active");
    });
}