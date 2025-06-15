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
const name = nameInput.value.trim();
    const category = categoryInput.value;
    const timestamp = new Date().toLocaleString();

    // Create guest list item
    const li = document.createElement('li');
    li.classList.add('guest-item'); // Common styling
    li.classList.add(category.toLowerCase()); // Category color styling

        li.innerHTML = `
  <div class="guest-row">
    <span class="guest-name">${name}</span>
    <span class="guest-category">(${category})</span>
    <span class="timestamp">${timestamp}</span>
    <button class="edit-btn">Edit</button>
    <button class="rsvp-btn">Not Attending</button>
    <button class="remove-btn">Delete</button>
  </div>
`;

    guestList.appendChild(li);
    nameInput.value = '';
  });

  guestList.addEventListener('click', function (e) {
    const li = e.target.closest('li');

    if (e.target.classList.contains('remove-btn')) {
      li.remove();
    }

    if (e.target.classList.contains('rsvp-btn')) {
      const btn = e.target;
      const isAttending = btn.textContent === 'Attending';
