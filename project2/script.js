const b = document.querySelectorAll('.simplify');
const res = document.querySelector('#result');

b.forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault()
        const x = parseFloat(document.querySelector('#first').value);
        const y = parseFloat(document.querySelector('#second').value);
        let ans; 
        if (e.target.id === 'add') {
            ans = (x + y).toFixed(4);
        } else if (e.target.id === 'sub') {
            ans = (x - y).toFixed(4);
        } else if (e.target.id === 'mul') {
            ans = (x * y).toFixed(4);
        } else if (e.target.id === 'div') {
            ans = (x / y).toFixed(4);
        }
        res.innerHTML =`<span>${ans}</span>`;
    });
})
