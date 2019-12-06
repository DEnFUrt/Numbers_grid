function createNumbersButtons(data, container) {
    for(let row = 0; row < data.length; row++) {
        const rowComponent = document.createElement('div');
        rowComponent.className = 'row';
        btnsContainer.appendChild(rowComponent);
        const button = document.createElement('button');
        button.className = 'btn';
        //button.style.backgroundColor = cells[cellId].color;
        button.innerText = data[row];

            // button.addEventListener('mouseenter', function() {
            //     colorField.style.backgroundColor = cells[cellId].color;
            // })
            // button.addEventListener('mouseleave', function() {
            //     colorField.style.backgroundColor = '#fff';
            // })

        rowComponent.appendChild(button);
        
    }
}

createNumbersButtons(panelsNumbers, btnsContainer);