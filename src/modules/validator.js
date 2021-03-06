const validator = () => {

class Validator {
    constructor({
        selector,
        pattern = {},
        method
    }) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
                item.type !== 'button';
        });
        this.elementsButtons = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() == 'button' ||
                item.type == 'button';
        });
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', e => {
            this.elementsForm.forEach(elem => this.checkIt({
                target: elem
            }));
            if (this.error.size) {
                e.preventDefault();
            }
        });
    }

    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {
                return pattern.test(elem.value);
            }
        };

        if (this.method) {
            const method = this.method[elem.id];

            if (method) {
                return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            }
        } else {
            console.warn('Необходимо передать id полей ввода и метода этих полей!');
        }

        return true;
    }

    checkIt(event) {
        const target = event.target;
        if (this.isValid(target)) {
            this.showSucces(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
        if (this.error.size) {
            if (!this.disabled) {
                this.elementsButtons.forEach((item) => {
                    item.setAttribute('disabled', 'true');
                });
            } 
        } else {
            this.elementsButtons.forEach((item) => {
                item.disabled = false;
            });
        }
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSucces(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
            elem.nextElementSibling.remove();
        }
    }

    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
        input.success {
          border: 2px solid green !important
        }
        input.error {
            border: 2px solid red !important
        }
        .validator-error {
            font-size: 12px;
            font-family:sans-serif;
            color: red;
        }
        `;
        document.head.appendChild(style);
    }
    setPattern() {
        if (!this.pattern.phone) {
            this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
        }
        if (!this.pattern.email) {
            this.pattern.email = /^\w+@\w+\.\w{2,}$/;
        }
    }
}

const valid1 = new Validator({
    selector: '#form1', 
    pattern: {
      name: /^[А-Яа-яЁё\s]+$/,
      phone: /^\+?[78]\d{10}$/
    },
    method: {
        'form1-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
    ],
        'form1-email': [
            ['notEmpty'],
            ['pattern', 'email']
    ],
        'form1-name':[
            ['notEmpty'],
            ['pattern', 'name']
        ]
    }
  });

  const valid2 = new Validator({
    selector: '#form2', 
    pattern: {
      name: /^[А-Яа-яЁё\s]+$/,
      phone: /^\+?[78]\d{10}$/
    },
    method: {
        'form2-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form2-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form2-name':[
            ['notEmpty'],
            ['pattern', 'name']
        ]
    }
  });

  const valid3 = new Validator({
    selector: '#form3', 
    pattern: {
      name: /^[А-Яа-яЁё\s]+$/,
      phone: /^\+?[78]\d{10}$/
    },
    method: {
        'form3-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
    ],
        'form3-email': [
            ['notEmpty'],
            ['pattern', 'email']
    ],
        'form3-name':[
            ['notEmpty'],
            ['pattern', 'name']
        ]
    }
  });

  valid1.init();
  valid2.init();
  valid3.init();
};