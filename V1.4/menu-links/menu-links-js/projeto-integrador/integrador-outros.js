document.addEventListener('DOMContentLoaded', function () {
    fetch('/menu-links/menu-links-json/outros.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(integradorCronograma) {
            let placeholder = document.querySelector("#data-output");
            let fragment = document.createDocumentFragment();
            for (let dados of integradorCronograma) {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${dados.curso}</td>
                    <td>${dados.predio}</td>
                    <td>${dados.andar}</td>
                    <td>${dados.sala}</td>
                    <td>${dados.professor}</td>
                `;
                fragment.appendChild(tr);
            }
            placeholder.appendChild(fragment);
            addEventListeners();
        });
});

function addEventListeners() {
    const search = document.querySelector('.input-group input'),
        table_rows = document.querySelectorAll('tbody tr'),
        table_headings = document.querySelectorAll('thead th');

    search.addEventListener('input', debounce(searchTable, 300));

    function searchTable() {
        const search_data = removeDiacritics(search.value.toLowerCase());
        table_rows.forEach((row, i) => {
            let table_data = removeDiacritics(row.textContent.toLowerCase());
            row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
            row.style.setProperty('--delay', i / 25 + 's');
        });

        document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
            visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
        });
    }

    table_headings.forEach((head, i) => {
        let sort_asc = true;
        head.onclick = () => {
            table_headings.forEach(head => head.classList.remove('active'));
            head.classList.add('active');

            document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
            table_rows.forEach(row => {
                row.querySelectorAll('td')[i].classList.add('active');
            });

            head.classList.toggle('asc', sort_asc);
            sort_asc = head.classList.contains('asc') ? false : true;

            sortTable(i, sort_asc);
        };
    });

    function sortTable(column, sort_asc) {
        const sortedRows = Array.from(table_rows).sort((a, b) => {
            let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
                second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

            return sort_asc ? (first_row > second_row ? 1 : -1) : (first_row < second_row ? 1 : -1);
        });

        const fragment = document.createDocumentFragment();
        sortedRows.forEach(row => fragment.appendChild(row));
        document.querySelector('tbody').appendChild(fragment);
    }
}

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
