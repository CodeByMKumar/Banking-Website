// === Contact Us JS ===
document.getElementById('submit-button').addEventListener('click', function () {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
  
    let isValid = true;
  
    // Reset Error Messages
    document.querySelectorAll('.error-msg').forEach((error) => {
      error.innerText = '';
      error.style.display = 'none';
    });
  
    // Validate Required Input Fields Such As Name
    if (firstName.value.trim() === '') {
      const error = document.getElementById('error-first-name');
      error.innerText = 'First Name required.';
      error.style.display = 'block';
      isValid = false;
    }
  
    // Validate Required Input Fields Such As Last Name
    if (lastName.value.trim() === '') {
      const error = document.getElementById('error-last-name');
      error.innerText = 'Last Name required.';
      error.style.display = 'block';
      isValid = false;
    }
  
    // Validate Required Input Fields Such As Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      const error = document.getElementById('error-email');
      error.innerText = 'Invalid email format.';
      error.style.display = 'block';
      isValid = false;
    }
  
    // Validate Required Input Fields Such As Subject
    if (subject.value.trim() === '') {
      const error = document.getElementById('error-subject');
      error.innerText = 'Subject required.';
      error.style.display = 'block';
      isValid = false;
    }
  
    // Validate Required Input Fields Such As Messages
    if (message.value.trim() === '') {
      const error = document.getElementById('error-message');
      error.innerText = 'Message required.';
      error.style.display = 'block';
      isValid = false;
    }
  
    // If Success It Is Valid If Not Proceed 
    if (isValid) {
      alert('Form submitted!');
      // Only Reset The Form If Needed
      document.getElementById('contact-form').reset();
    }
  });
  