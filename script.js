//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const checkbox = document.getElementById('checkbox');
      const existingBtn = document.getElementById('existing');

      // Show "Login as existing user" if credentials exist
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        existingBtn.style.display = 'block';
      }

      document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        // Update visibility after login
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
          existingBtn.style.display = 'block';
        } else {
          existingBtn.style.display = 'none';
        }
      });

      existingBtn.addEventListener('click', function () {
        const existingUsername = localStorage.getItem('username');
        if (existingUsername) {
          alert(`Logged in as ${existingUsername}`);
        }
      });
    });