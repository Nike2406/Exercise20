const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total'),

        countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            } else if (calcCount.value >= 0 && calcCount.value < 1) {
                countValue = 0;
            }

            if (calcDay.value == '') {
                dayValue *= 0;
            } else if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            if (total > 0) {
                let startTotal = 0,
                    totalAnimation = setInterval(() => {
                        if (startTotal > total) {
                            clearInterval(totalAnimation);
                            totalValue.textContent = Math.floor(total);
                            return;
                        }
                        totalValue.textContent = startTotal += (Math.pow(10, total.toString().length) / 1000);
                    }, 8);
            } else {
                totalValue.textContent = Math.floor(total);
            }


        };




    calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;