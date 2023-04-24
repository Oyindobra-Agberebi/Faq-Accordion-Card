let faqs = document.querySelectorAll('.faq');

faqs.forEach(function(faq) {
    const questionbtn = faq.querySelector('.question')
    questionbtn.addEventListener('click', function () {
        faqs.forEach(function(item) {
            if (item !== questionbtn) {
                item.classList.remove('active-faq');
            } else if (item == item) {
                item.classList.toggle('active-faq');
            }
        });

        faq.classList.toggle('active-faq');

         
       
    })
});