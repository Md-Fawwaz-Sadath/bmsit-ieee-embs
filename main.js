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