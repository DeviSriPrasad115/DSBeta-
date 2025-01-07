document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      card.classList.toggle('flipped');
    });
  });