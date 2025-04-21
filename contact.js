
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});



function sendEmail() {
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!fullName ||!email ||!message) {
    alert('Please fill in all fields');
    return;
  }

  const emailBody = `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`;
  const emailUrl = `mailto:shahid.kontakt@gmail.com?subject=Contact%20Us&body=${encodeURIComponent(emailBody)}`;

  console.log(`Sending email to ${emailUrl}`);
  location.href = emailUrl;
}


