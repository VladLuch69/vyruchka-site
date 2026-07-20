document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт "Выручка" успешно загружен!');
    
    // Пример: приветствие при клике на кнопку
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Спасибо, что выбрали Выручку!');
        });
    }
});
