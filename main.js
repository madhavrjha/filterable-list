const filterInput = document.querySelector('#filter-input');
filterInput.addEventListener('keyup', filterName);

function filterName() {
    const filterValue = filterInput.value.toUpperCase();

    const ul = document.querySelector('#name');
    const list = document.querySelectorAll('#name li.collection-item');

    list.forEach((li, index) => {
        const currentName = li.firstElementChild.textContent;
        if (currentName.toUpperCase().indexOf(filterValue) > -1) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
}
