// script.js
document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="category"]');
    const items = document.querySelectorAll('.item');

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedCategory = this.value;

            items.forEach(item => {
                if (item.getAttribute('data-category') === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

