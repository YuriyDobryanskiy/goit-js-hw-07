const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  const name = e.target.value.trim();

  nameOutput.textContent = name ? name : "Anonymous";
});
