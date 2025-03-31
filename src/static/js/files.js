document
  .getElementById('readFileForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const errorContainer = document.getElementById('error-container');
    errorContainer.innerText = '';
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerText = '';

    const path = document.getElementById('path').value;

    try {
      const request = await fetch('/api/readfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }),
      });

      if (!request.ok) {
        errorContainer.innerText = await request.text();
      } else {
        resultContainer.innerText = await request.text();
      }
    } catch (err) {
      errorContainer.innerText = err.message;
    }
  });
