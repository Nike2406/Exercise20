const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        body = document.querySelector('body');

    body.addEventListener('click', (event) => {
        let target = event.target;

        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

            if (target.classList.contains('menu') || target.closest('.menu')) {
                menu.classList.toggle('active-menu');
            } else if (menu.classList.contains('active-menu') && !(target.closest('.active-menu'))) {
                menu.classList.toggle('active-menu');
            } else if (target.closest('.active-menu') && !(target.classList.contains('active-menu'))) {
                menu.classList.toggle('active-menu');
            }

        } else {
            if (target.classList.contains('menu') || target.closest('.menu')) {
                menu.style.transform = `translate(0)`;
            } else if (target.closest('menu') && !(target.classList.contains('menu'))) {
                menu.style.transform = `translate(-100%)`;
            }

        }

    });

};

export default toggleMenu;