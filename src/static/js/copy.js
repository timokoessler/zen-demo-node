document.addEventListener("DOMContentLoaded", () => {
  const exampleElements = document.getElementsByClassName("example");
  const inputElement = document.querySelector("input[type=text]");

  Array.from(exampleElements).forEach((element) => {
    element.addEventListener("click", function () {
      if (inputElement) {
        inputElement.value = this.textContent.trim();

        this.style.backgroundColor = "#ffeb3b";
        setTimeout(() => {
          this.style.backgroundColor = "";
        }, 200);
      }
    });

    element.style.cursor = "pointer";
  });
});
