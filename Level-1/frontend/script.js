document.getElementById('fetchBtn').addEventListener('click', fetchUsers);

async function fetchUsers() {
    const userContainer = document.getElementById('userList');
    userContainer.innerHTML = 'Loading...'; // Loading state

    try {
        // Task 2 wali API ka URL yahan use karein
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();

        userContainer.innerHTML = ''; // Clear loading text

        data.forEach(user => {
            const card = document.createElement('div');
            card.className = 'user-card';
            card.innerHTML = `<strong>ID:</strong> ${user.id} <br> <strong>Name:</strong> ${user.name}`;
            userContainer.appendChild(card);
        });
    } catch (error) {
        userContainer.innerHTML = 'Error: API server start nahi hai!';
        console.error('Fetching error:', error);
    }
}