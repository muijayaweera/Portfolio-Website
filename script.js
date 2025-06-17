// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Add CSS for dark theme
document.head.insertAdjacentHTML('beforeend', `
<style>
  .dark-theme {
    --bg-color: #121212;
    --text-color: #f5f5f5;
  }
</style>
`);

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const msg = document.getElementById('form-msg');

  if (name.value && email.value && message.value) {
    msg.textContent = 'Message sent successfully!';
    msg.style.color = 'green';
    this.reset();
  } else {
    msg.textContent = 'Please fill all the fields.';
    msg.style.color = 'red';
  }
});
