function toggleCard() {
    document.getElementById('card').classList.toggle('flipped');
  }
  
  const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });


    let index = 0;
    const slides = document.getElementById('slides');
    const dots = document.querySelectorAll('.dot');
    function showSlide(i) {
      index = i;
      slides.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[i].classList.add('active');
    }
    function currentSlide(i) {
      showSlide(i);
    }
    showSlide(index);


    const email = document.getElementById('email');
    const password = document.getElementById('password');
    email.addEventListener('input', () => {
      const emailError = document.getElementById('emailError');
      emailError.textContent = email.value.includes('@') ? '' : 'Invalid email';
    });
    password.addEventListener('input', () => {
      const passwordError = document.getElementById('passwordError');
      passwordError.textContent = password.value.length >= 6 ? '' : 'Password too short';
    });