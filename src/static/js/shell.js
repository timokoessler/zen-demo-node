document
  .getElementById('commandForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const errorContainer = document.getElementById('error-container');
    errorContainer.innerText = '';

    const userCommand = document.getElementById('userCommand').value;

    try {
      const request = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userCommand }),
      });

      if (!request.ok) {
        errorContainer.innerText = await request.text();
      } else {
        // This should not happen
        alert(await request.text());
      }
    } catch (err) {
      errorContainer.innerText = err.message;
    }
  });
