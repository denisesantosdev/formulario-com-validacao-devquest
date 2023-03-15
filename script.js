const submitBtn = document.querySelector(".submit-btn");
const inputFields = document.querySelectorAll(".field");
const invalidInputMessage = document.querySelectorAll(".invalid-input-message");

submitBtn.addEventListener("click", checkInputs);

function checkInputs() {
  inputFields.forEach((input) => {
    if (!input.value) {
      input.classList.add("invalid-input");
      input.classList.remove("valid-input");

      invalidInputMessage.forEach((message) => {
        if (message.parentElement === input.parentElement) {
          message.classList.remove("hidden");
        }
      });
    } else {
      input.classList.add("valid-input");
      input.classList.remove("invalid-input");

      invalidInputMessage.forEach((message) => {
        if (message.parentElement === input.parentElement) {
          message.classList.add("hidden");
        }
      });
    }
  });
}
