const accordions = document.querySelectorAll('.question')

accordions.forEach((acc) => {
    acc.addEventListener('click', (e) => {
        acc.classList.toggle('active')
        if(acc.classList.contains('active')) {
            acc.childNodes[3].className = 'fas fa-angle-up'
        } else {
            acc.childNodes[3].className = 'fas fa-angle-down'
        }
    })
})