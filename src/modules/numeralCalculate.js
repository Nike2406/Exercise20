const numeralCalculate = () => {
    const calcBlock = document.querySelector('.calc-block');

    calcBlock.addEventListener('input', (event) => {
        let target = event.target;

        if (target.matches('input')) {
            target.value = target.value.replace(/\D/g, '');
        }
    });

};

export default numeralCalculate;