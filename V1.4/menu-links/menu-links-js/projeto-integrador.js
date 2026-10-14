const openButtons = document.querySelectorAll('.eventos-open-btn');
const closeButtons = document.querySelectorAll('.eventos-close');
const popups = document.querySelectorAll('.eventos-popup');
//START - Função de colocar marcador no mapa ao clicar no Ver No Mapa 
function setCoordLocalStorage(lat, lng) {
    let latstr = lat.toString();
    let lngstr = lng.toString();

    localStorage.setItem("verNoMapaLat", latstr);
    localStorage.setItem("verNoMapaLng", lngstr);
    window.location.assign("/index.html");
}

var foodTrucksNames = [
    'Mariano BBQ',
    'Banana Beer',
    'Espetinho Japa',
    'Truckostela Defumados',
    'La Crepe',
    'J Drinks',
    'Ponto Do Pastel',
    'Somos Fast Food Hamb',
    'Gelato Churros e Sorvete',
    'We Donuts',
    'Fresco Sorvete',
    'Sanches Chopp',
    'Rebaixados Dog',
    'Totem do Açaí',
    'Leo Caldo De Cana',
    'Pastel do Le',
    'Roma Lanches',
    'Estação Beer',
    'Garrucha Hambúrger',
    'Kombi ba Brasa Espetinho',
    'Couve Flor Bistô Vegie',
    'Milho Cozido do Roque',
    'Batata Retrô',
    'Soul Pizza'
];



var foodTrucksLocations = [
    [-23.499818049531928, -47.398602962493904],
    [-23.499845106781297, -47.398543953895576],
    [-23.499867244526637, -47.39849030971527],
    [-23.499884462770464, -47.398433983325965],
    [-23.499911520006194, -47.39838570356369],
    [-23.49993857723636, -47.39833742380143],
    [-23.49995825521846, -47.3982784152031],
    [-23.499987772186085, -47.3982247710228],
    [-23.500017289147106, -47.398160398006446],
    [-23.50003942686353, -47.398109436035156],
    [-23.500061564576242, -47.3980638384819],
    [-23.500096001010817, -47.398015558719635],
    [-23.50012797769202, -47.397956550121314],
    [-23.50016241410927, -47.397918999195106],
    [-23.50018701154464, -47.39786803722382],
    [-23.500214068718247, -47.39782243967057],
    [-23.500253424597215, -47.39778220653534],
    [-23.50036411294379, -47.39765882492066],
    [-23.50040346877795, -47.397626638412476],
    [-23.50045020381573, -47.3975944519043],
    [-23.500482180410998, -47.397551536560066],
    [-23.500514156998474, -47.39751398563386],
    [-23.500548593314786, -47.39748179912568],
    [-23.500583029622113, -47.397452294826515]
];

var blocos = {
    //as letras depois de f representam os apoios,
    //tomei a liberdade de coloca-los no mesmo botão blocos por pura conveniência ja que
    //um talvez aluno novo nem saiba qual seja a diferença entre eles, e também iria deixar
    //o carrossel bem grande com vários botões. 
    //Caso queira eu posso separar tb.
    "A": [-23.500293, -47.39816],
    "B": [-23.500664, -47.397863],
    "C": [-23.500991, -47.397552],
    "D": [-23.501405, -47.397364],
    "E": [-23.499552, -47.400663],
    "F": [-23.49903, -47.39985],
    "g": [-23.500718, -47.39882],
    "h": [-23.501323, -47.398104],
    "i": [-23.499828, -47.400384],
    "j": [-23.499983, -47.400977],
    "LIB": [-23.499985, -47.398938],
    "ADM": [-23.500172, -47.398603],
    "VET": [-23.499092, -47.395036],
    "lapec": [-23.50228, -47.39798],
    // "quadra": [-23.50205, -47.39731],
    "estacionamento": [-23.49939, -47.39926],
};

const verNoMapaFoodTrucks = document.getElementById("eventos-vernomapaBtn-foodTrucks");
verNoMapaFoodTrucks.addEventListener('click', function () {
    window.location.assign("/index.html");
    localStorage.setItem('foodTruckBool', 'true');
});


const verNoMapaButtons = document.querySelectorAll('.eventos-vernomapaBtn');
const blocosList = Object.values(blocos);
console.log(verNoMapaButtons);
verNoMapaButtons.forEach((button, index) => {
    button.addEventListener('click', () => { setCoordLocalStorage(blocosList[index][0], blocosList[index][1]) });
});


//END 

openButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup');
        popups.forEach((popup) => {
            if (popup.id === popupId) {
                popup.style.display = 'block';
            } else {
                popup.style.display = 'none';
            }
        });
    });
});

closeButtons.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        popups.forEach((popup) => {
            popup.style.display = 'none';
        });
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('eventos-popup')) {
        popups.forEach((popup) => {
            popup.style.display = 'none';
        });
    }
});



function foodtrucks() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-foodtrucks.html';
};

function blocoa() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-blocoa.html';
};

function blocob() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-blocob.html';
};

function blococ() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-blococ.html';
};

function blocod() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-blocod.html';
};

function blocoe() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-blocoe.html';
};

function blocof() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-blocof.html';
};

function apoios() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-apoios.html';
};

function biblioteca() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-biblioteca.html';
};

function outros() {
    window.location.href = '/menu-links/menu-links-html/projeto-integrador/integrador-outros.html';
};

document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const cards = document.querySelectorAll('.eventos-card');

    cards.forEach(function (card) {
        const title = card.querySelector('.eventos-name');
        const curso = card.querySelector('.eventos-detailed-description');
        const nameTitle = title ? title.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
        const nameCurso = curso ? curso.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
        if (nameTitle.includes(searchValue) || nameCurso.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
