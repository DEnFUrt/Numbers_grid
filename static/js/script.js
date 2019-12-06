function createNumbersButtons(data, container) {
    for(let row = 0; row < data.length; row++) {
        const rowComponent = document.createElement('div');
        rowComponent.className = 'row';
        btnsContainer.appendChild(rowComponent);
        
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = data[row];
        button.('data-number') = data[row];
        rowComponent.appendChild(button);
    }
}

createNumbersButtons(panelsNumbers, btnsContainer);

window.addEventListener('click', (e) => {
    if (e.target.nodeName == 'BUTTON') {
        numbersField.textContent = e.target.getAttribute('data-number') 
    }
});

// button.addEventListener('mouseenter', function() {
//     numbersField.textContent = button.textContent;
//     });
// button.addEventListener('mouseleave', function() {
//     numbersField.textContent = '---';
//     });
