document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});

document.querySelector('.sidebar').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        let closestLink = event.target.closest('a'); 
        console.log('You clicked on:', closestLink.textContent);

        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.remove('active');
        });
        
        closestLink.classList.add('active')
    }
})