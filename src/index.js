document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guest-form');
  const guestList = document.getElementById('guest-list');
  const nameInput = document.getElementById('guest-name');
  const categoryInput = document.getElementById('guest-category');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (guestList.children.length >= 10) {
      alert("Guest list limit of 10 reached!");
      return;
    }
