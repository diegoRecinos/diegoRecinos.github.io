// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Parse the JSON from the response
    .then(users => {
        const userList = document.getElementById('user-list');

        // Loop through each user and create an li element for each one
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
