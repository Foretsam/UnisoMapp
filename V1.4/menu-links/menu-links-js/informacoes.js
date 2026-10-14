filterCards("all");
function setCoordLocalStorage(lat, lng) {
    console.log("merda de linguagem lixo do kacete");
    let latstr = lat.toString();
    let lngstr = lng.toString();

    localStorage.setItem("verNoMapaLat", latstr);
    localStorage.setItem("verNoMapaLng", lngstr);
    window.location.assign("/index.html");
}
var blocos = {
    //as letras depois de f representam os apoios,
    //tomei a liberdade de coloca-los no mesmo botão blocos por pura conveniência ja que
    //um talvez aluno novo nem saiba qual seja a diferença entre eles, e também iria deixar
    //o carrossel bem grande com vários botões. 
    //Caso queira eu posso separar tb.
    "LIB": [-23.499985, -47.398938],
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
    "ADM": [-23.500172, -47.398603],
    "VET": [-23.499092, -47.395036],
    "neas": [-23.496780373766796, -47.3887855194163],
    "quadra": [-23.50205, -47.39731],
    "lapec": [-23.50228, -47.39798],
};

const verNoMapaButtons = document.querySelectorAll('.eventos-vernomapaBtn');
const blocosList = Object.values(blocos);
console.log(verNoMapaButtons);
verNoMapaButtons.forEach((button, index) => {
    button.addEventListener('click', () => { setCoordLocalStorage(blocosList[index][0], blocosList[index][1]) });
});

function filterCards(c) {
    var x, i;
    x = document.getElementsByClassName("cards");
    if (c === "all") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
        return;
    }
    for (i = 0; i < x.length; i++) {
        if (!x[i].classList.contains(c)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
    }
}