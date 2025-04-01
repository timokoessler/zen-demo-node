document.getElementById("urlForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const errorContainer = document.getElementById("error-container");
  const resultContainer = document.getElementById("result-container");
  errorContainer.innerText = "";
  resultContainer.innerText = "";

  const url = document.getElementById("url").value;

  const submitBtn = document.querySelector("button[type=submit]");

  try {
    submitBtn.disabled = true;
    const request = await fetch("/api/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (request.ok) {
      resultContainer.innerText = await request.text();
    } else {
      errorContainer.innerText = await request.text();
    }
  } catch (err) {
    errorContainer.innerText = err.message;
  }

  submitBtn.disabled = false;
});
