const buttons = document.querySelectorAll('.btn-primary');
const closeButtons = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonId = e.target.id;
    const modalId = `myModal${buttonId.replace('myBtn', '')}`;
    const modal = document.getElementById(modalId);

    // Periksa apakah modal sudah tampil
    if (
      modal.style.display !== 'block' &&
      !modal.classList.contains('fade-in') &&
      !modal.classList.contains('fade-out')
    ) {
      modal.classList.add('fade-in');
      modal.style.display = 'block';
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modal = button.parentNode.parentNode;
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('fade-out');
    }, 300);
  });
});

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('fade-in');
      modal.classList.add('fade-out');
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
      }, 300);
    }
  });
});

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearForm();
  alert('Pesan Terkirim');
});
