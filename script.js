// script.js
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[name="category"]');
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');
    const resetFiltersButton = document.getElementById('reset-filters');

    function filterCards() {
        const selectedCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        cards.forEach(card => {
            const cardCategories = card.getAttribute('data-category').split(',');
            if (selectedCategories.length === 0 || selectedCategories.some(category => cardCategories.includes(category))) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function resetFilters() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        filterCards();
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterCards);
    });

    resetFiltersButton.addEventListener('click', resetFilters);

    // Initial display setting
    filterCards();

    // Modal functionality
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
