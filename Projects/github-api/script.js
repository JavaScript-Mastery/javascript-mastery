function fetchUserProfile() {
    const username = document.getElementById('username').value;
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
          if (data.message === "Not Found") {
            clearProfile();
            showError('User not found.');
          } else {
            clearError();
            displayProfile(data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          showError('An error occurred while fetching the user profile.');
        });
    } else {
      showError('Please enter a GitHub username.');
    }
  }

  function clearProfile() {
    document.getElementById('avatar').src = '';
    document.getElementById('name').textContent = '';
    document.getElementById('bio').textContent = '';
    document.getElementById('website').textContent = '';
    document.getElementById('location').textContent = '';
    document.getElementById('followers').textContent = '';
    document.getElementById('following').textContent = '';
    document.getElementById('public-repos').textContent = '';
  }

  function clearError() {
    const errorElement = document.getElementById('error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  function showError(errorMessage) {
    clearProfile();
    clearError();
    const errorElement = document.createElement('p');
    errorElement.id = 'error';
    errorElement.textContent = errorMessage;
    errorElement.style.color = 'red';
    document.querySelector('.container').appendChild(errorElement);
  }

  function displayProfile(data) {
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.name;
    document.getElementById('bio').textContent = data.bio;
    document.getElementById('website').innerHTML = `<a href="${data.blog}" target="_blank">${data.blog}</a>`;
    document.getElementById('location').textContent = `Location: ${data.location}`;
    document.getElementById('followers').textContent = `Followers: ${data.followers}`;
    document.getElementById('following').textContent = `Following: ${data.following}`;
    document.getElementById('public-repos').textContent = `Public Repositories: ${data.public_repos}`;
  }
