window.addEventListener('DOMContentLoaded', () => {
    const icon1 = document.querySelector('.down1'),
    icon2 = document.querySelector('.down2'),
    icon3 = document.querySelector('.down3'),
    icon4 = document.querySelector('.down4'),
    label1 = document.querySelector('.label1'),
    label2 = document.querySelector('.label2'),
    label3 = document.querySelector('.label3'),
    label4 = document.querySelector('.label4');

    label1.addEventListener('click', () => {
        icon1.classList.toggle('fa-angle-down_active');
    });
    
    label2.addEventListener('click', () => {
        icon2.classList.toggle('fa-angle-down_active');
    });

    label3.addEventListener('click', () => {
        icon3.classList.toggle('fa-angle-down_active');
    });

    label4.addEventListener('click', () => {
    icon4.classList.toggle('fa-angle-down_active');
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    new WOW().init();
})