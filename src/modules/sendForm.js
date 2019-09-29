const sendForm = () => {
    const errorMessage = `<img src = "./images/Status/error.png" width = "100" !important>`,
        loadMessage = `<img src = "./images/Status/loadiiing.gif" width = "100" !important>`,
        succesMessage = '<img src = "./images/Status/Download-Success-PNG-Image.png" width = "100" !important>';

    const bodyForm = document.querySelector('body'),
        statusMessage = document.createElement('div');
    //Добавляем класс для последующего удаления
    statusMessage.classList.add('toDel');
    statusMessage.style.cssText = `margin-top: 10px !important`;

    //Подклюаем к каждой форме
    bodyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        target.appendChild(statusMessage);
        statusMessage.innerHTML = loadMessage;

        const formData = new FormData(target);

        
        postData(formData) 
            .then ((response) => {
                //Обработка ошибки для fetch
                if (response.status !==200) {
                    throw new Error ('status network');
                }

                statusMessage.innerHTML = succesMessage;

                //После отправки формы удаляются значения и стили
                let delData = target.querySelectorAll('input');
                delData.forEach((item) => {
                    item.value = '';
                    item.classList.remove('success');
                });
            })
            .catch((error) => {
                statusMessage.innerHTML = errorMessage;
                console.error(error);
            });
    });



    const postData = (formData) => {
    //Перерабатываем с fetch (ур.19вид)
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });           
    };
};

export default sendForm;