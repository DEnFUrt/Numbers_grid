startButton.addEventListener('click', () => {
    if (!+inputValue.value) {
        return;
    }

    clearContainer(btnsContainer);

    let panelsNumbers = new Int8Array(+inputValue.value);
    window.crypto.getRandomValues(panelsNumbers);
        
    createNumbersButtons(panelsNumbers, btnsContainer);
});

inputValue.addEventListener('input', (e) => {
    if (e.target.nodeName == 'INPUT') {
        !checkInputValue(e.target) ? setOnErrorBorderInput(e.target) : setOffErrorBorderInput(e.target);
    }
});

function clearContainer(btnsContainer) {
    btnsContainer.innerHTML = '';
}

function createNumbersButtons(data, container) {
    for (let col of data) {
        const rowComponent = document.createElement('div');
        rowComponent.className = 'row';
        container.appendChild(rowComponent);

        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = col;
        button.setAttribute('data-number', col);
                
        button.addEventListener('mouseenter', function () {
            numbersField.textContent = button.getAttribute('data-number');
        });
        
        button.addEventListener('mouseleave', function () {
            numbersField.textContent = '---';
        });

        rowComponent.appendChild(button);
    }
}

function checkInputValue (inputTarget) {
    if (!-inputTarget.value && -inputTarget.value !== 0) {
        return false; //setOnErrorBorderInput(inputTarget);
    } else {
        return true; //setOffErrorBorderInput(inputTarget);
    }
};

// проверяем наличие класса errInput в элементе inputTarget формы и если класса нет, ставим его

function setOnErrorBorderInput (inputTarget) {
    if (!inputTarget.classList.contains(errInput)) {
        inputTarget.classList.toggle(errInput);
    }
};

// проверяем наличие класса errInput в элементе inputTarget формы и если класс есть, удаляем его 

function setOffErrorBorderInput (inputTarget) {
    if (inputTarget.classList.contains(errInput)) {
        inputTarget.classList.toggle(errInput);
    }
};

