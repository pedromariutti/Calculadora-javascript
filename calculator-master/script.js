const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'C') {
            result.value = '';
        } else if (value === '=') {
            try {
                result.value = eval(result.value);
            } catch {
                result.value = 'Erro';
            }
        } else {
            result.value += value;
        }
    });
});