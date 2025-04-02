let lis = document.querySelectorAll('li');
let experiment = document.querySelector('.experiment');



if (window.localStorage.getItem('bg')) {
    experiment.style.background = window.localStorage.getItem('bg');
    lis.forEach((item) => {
        item.classList.remove('active');
    })
    document.querySelector(`[data-color="${window.localStorage.getItem('bg')}"]`).classList.add('active')
};


lis.forEach(function(li) {
    li.addEventListener('click',function() {
        lis.forEach((item) => {
            item.classList.remove('active')
        })
        li.classList.add('active')
        let colo = li.dataset.color
        experiment.style.background = colo;
        localStorage.setItem('bg',colo)
    })
})


