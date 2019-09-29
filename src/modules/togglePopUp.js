const togglePopUp = () => {
    let popUp = document.querySelector('.popup'),
        popUpTab = document.querySelector('.popup-content'),
        service = document.querySelector('.service');


    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {


        service.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-btn')) {
                popUp.style.display = 'block';
                popUpTab.style.top = `-${popUpTab.offsetHeight}px`;
                let i = -popUpTab.offsetHeight,
                    showUpTab,

                    tabAnimate = () => {
                        showUpTab = requestAnimationFrame(tabAnimate);
                        i += 10;
                        if (i < 60) {
                            popUpTab.style.top = i + 'px';
                        } else {
                            cancelAnimationFrame(showUpTab);
                        }
                    };
                requestAnimationFrame(tabAnimate);
            }
        });

        popUp.addEventListener('click', () => {
            const tabBelow = popUpTab.offsetHeight + popUpTab.offsetTop;
            let j = popUpTab.offsetTop,
                closeUpTab,
                target = event.target,
                tabAnimate = () => {
                    closeUpTab = requestAnimationFrame(tabAnimate);

                    if (j > -(tabBelow)) {
                        popUpTab.style.top = j + 'px';
                        j -= 10;
                    } else {
                        cancelAnimationFrame(closeUpTab);
                        popUp.style.display = 'none';

                        //Очищаем данные после завершения анимации
                        let elementsForm = popUpTab.querySelectorAll('.form-name, .form-phone, .form-email'),
                            toDel = popUpTab.querySelector('.toDel');
                        elementsForm.forEach((item) => {
                            item.value = '';
                            item.classList.remove('success');
                            item.classList.remove('error');
                            //Удалаяем стили
                            if (item.nextElementSibling &&
                                item.nextElementSibling.classList.contains('validator-error')) {
                                item.nextElementSibling.remove();
                            }
                            //удаляем лого загрузки
                            if (toDel) {
                                toDel.remove();
                            }
                        });
                    }
                };


            if (target.classList.contains('popup-close')) {
                requestAnimationFrame(tabAnimate);
            } else {
                target = target.closest('.popup-content');

                if (!target) {
                    requestAnimationFrame(tabAnimate);
                }
            }


        });

    } else {
        service.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-btn')) {
                popUp.style.display = 'block';
            }
        });

        //Добавляем общее
        popUp.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if (!target) {
                    popUp.style.display = 'none';
                }
            }
        });

    }
};

export default togglePopUp;