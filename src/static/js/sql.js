async function loadPets() {
  try {
    const request = await fetch('/api/pets');
    const pets = await request.json();
    const petsList = document.getElementById('petsList');
    petsList.innerHTML = '';
    for (const pet of pets) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="pet-id">${pet.id}</span>
        <span class="pet-info">${pet.name}</span>
        <span class="pet-owned-by">Owned by: </span>
        <span class="pet-owner">${pet.owner}</span>
      `;
      petsList.appendChild(li);
    }
  } catch (err) {
    alert(err.message);
  }
}

// Load pets after page load
document.addEventListener('DOMContentLoaded', () => {
  loadPets();
});

document.getElementById('clearButton').addEventListener('click', () => {
  fetch('/api/pets', {
    method: 'DELETE',
  }).then(() => {
    loadPets();
  });
});

document.getElementById('petForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const errorContainer = document.getElementById('error-container');
  errorContainer.innerText = '';

  const petNameInput = document.getElementById('petName');
  const petName = petNameInput.value;

  try {
    const request = await fetch('/api/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: petName }),
    });

    loadPets();

    if (request.ok) {
      petNameInput.value = '';
    } else {
      errorContainer.innerText = await request.text();
    }
  } catch (err) {
    errorContainer.innerText = err.message;
  }
});
