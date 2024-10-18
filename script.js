document.getElementById('resource-btn').addEventListener('click', function() {
    const resourceMessage = document.getElementById('resource-message');
    resourceMessage.textContent = 'Accessing resources...';
    
    // Simulate fetching resources
    setTimeout(() => {
        resourceMessage.textContent = 'Resources on mental health and well-being available at [Link to Resources]';
    }, 2000);
});
