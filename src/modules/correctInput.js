const correctInput = function () {
    const body = document.querySelector('body');
    body.addEventListener('input', () => {
        let target = event.target,
            idTarget = target.id;
        if (/name$/.test(idTarget) || /message$/.test(idTarget)) {
            target.value = target.value.replace(/[^А-Яа-яёЁ\s]/mgi, '');
        }            
    });
};

export default correctInput;