const links = document.querySelectorAll('.nav-list');

links.forEach(link =>{
    link.addEventListener('click', function() {
        links.forEach(nav => nav.classList.remove('active'));
        this.classList.add("active");
    });
});