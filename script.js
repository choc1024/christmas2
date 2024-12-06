document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("numberInput");
    const message = document.getElementById("message");

    numberInput.addEventListener("input", () => {
        if (numberInput.value === "5") {
            numberInput.classList.add("hidden");
            message.classList.remove("hidden");
        }
    });
});
