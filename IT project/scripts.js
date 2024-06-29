document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
  
      if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        event.preventDefault();
      } else {
        alert('Form submitted successfully!');
       
      }
      
      event.preventDefault(); 
    });
  });
  
  