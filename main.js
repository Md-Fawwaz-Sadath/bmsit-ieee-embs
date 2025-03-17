    //change navbar styles on scroll

    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
    })




    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');


            const icon = faq.querySelector('.faq__icon i');
            if(icon.className === 'fa-duotone fa-solid fa-plus') {
                icon.className = 'fa-duotone fa-solid fa-minus'
            } else {
                icon.className = 'fa-duotone fa-solid fa-plus'
            }
        })
    })

    // Mobile Menu Toggle
const menu = document.querySelector('.nav_menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () => {
    menu.classList.add('active');
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
});