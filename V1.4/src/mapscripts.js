//config. geral do mapa

var map = L.map('map', { zoomControl: false }).setView([-23.499931, -47.397767], 15.5);

//layer do mapa

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

////marca um limite que o usuário pode ver do mapa ao todo

var corner1 = L.latLng(-23.5057, -47.4037);
var corner2 = L.latLng(-23.4921, -47.3845);
var bound = L.latLngBounds(corner1, corner2);
map.setMaxBounds(bound);

// //zoom mínimo para que não seja exibido nada além da uniso

map.setMinZoom(17);

//navegacao e aquisicao de geolocalizacao

//carrossel funcional 
var btn_blocos = document.getElementById("show-blocos");
var btn_pracas = document.getElementById("show-pracas");
var btn_cantinas = document.getElementById("show-cantinas");
var btn_banheiros = document.getElementById("show-banheiros");
var btn_bikes = document.getElementById("show-bikes");
var btn_locate = document.getElementById("locate-user");

var carrosselGroup = L.layerGroup().addTo(map);

//VER NO MAPA BOTÃO
let verNoMapaLat = parseFloat(localStorage.getItem('verNoMapaLat'));
let verNoMapaLng = parseFloat(localStorage.getItem('verNoMapaLng'));
if (verNoMapaLat || verNoMapaLng) {
    L.marker([verNoMapaLat, verNoMapaLng]).addTo(carrosselGroup);
    map.flyTo([verNoMapaLat, verNoMapaLng], 19);
    localStorage.clear();

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


let foodTrucksBoolean = localStorage.getItem('foodTruckBool');
if (foodTrucksBoolean) {
    foodTrucksLocations.forEach((latlng, index) => {
        let ftruckmarker = L.marker(latlng).addTo(carrosselGroup);
        ftruckmarker.bindPopup(foodTrucksNames[index]);
    });
    localStorage.clear();
}
//coordenadas simulando banco de dados
var blocos = {
    //os numeros de 1 a 4 representam os apoios,
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
    "1": [-23.500718, -47.39882],
    "2": [-23.501323, -47.398104],
    "3": [-23.499828, -47.400384],
    "4": [-23.499983, -47.400977],
    "ADM": [-23.499985, -47.398938],
    "LIB": [-23.500172, -47.398603],
    "VET": [-23.499092, -47.395036]
}
var banheiros = {
    "A": [-23.500293, -47.39816],
    "B": [-23.500664, -47.397863],
    "C": [-23.500991, -47.397552],
    "D": [-23.501405, -47.397364],
    "E": [-23.499552, -47.400663],
    "F": [-23.49903, -47.39985],
    "1": [-23.500718, -47.39882],
    "2": [-23.501323, -47.398104],
    "3": [-23.499828, -47.400384],
    "4": [-23.499983, -47.400977],
    "ADM": [-23.499985, -47.398938],
    "LIB": [-23.500172, -47.398603],
    "VET": [-23.499092, -47.395036]
};

var pracas = {
    0: [-23.500453, -47.398957],
    1: [-23.500635, -47.398563],
    2: [-23.500822, -47.398278],
    3: [-23.50106, -47.398024],
    4: [-23.501375, -47.397828],
    5: [-23.500049, -47.400172],
    6: [-23.498711, -47.399381],
    7: [-23.500143, -47.398262],
    8: [-23.500391, -47.397884],
    9: [-23.50074, -47.39753],
    10: [-23.501141, -47.397289]
}

var bikes = [
    [-23.499153915305634, -47.399862259626396],
    [-23.5000439060214, -47.3988254533606],
    [-23.50020356158956, -47.398306197610516],
    [-23.50051105961971, -47.39797400097359],
    [-23.50084333612775, -47.397660878036746],
    [-23.501207375821163, -47.39743020806146],
    [-23.499221740963403, -47.39790245889253],
    [-23.49950812064287, -47.40022704005243],
    [-23.500685108623053, -47.398640513420105]
];

var cantinascd = {
    "A": [-23.500293, -47.39816],
    "B": [-23.500664, -47.397863],
    "C": [-23.500991, -47.397552],
    "D": [-23.501405, -47.397364],
    "F": [-23.49903, -47.39985],
    "ADM": [-23.499985, -47.398938],
    "CNL": [-23.499552789187188, -47.40033306779302],
    "LIB": [-23.500172, -47.398603],

};


// var popup = L.popup();

// function onMapClick(e) {
//     let latitude = e.latlng.lat;
//     let longitude = e.latlng.lng;
//     console.log(`[${latitude}, ${longitude}],`);
//     navigator.clipboard.writeText(`[${latitude}, ${longitude}],`);
// }

// map.on('click', onMapClick);

var CarrosselIcon = L.Icon.extend({
    options: {
        iconSize: [28, 32],
        shadowSize: [50, 64],
        iconAnchor: [15, 25],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

var bathRoomIcon = new CarrosselIcon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/900/900689.png' });
var cantinaIcon = new CarrosselIcon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/129/129255.png' });
var predioIcon = new CarrosselIcon({ iconUrl: 'https://www.iconpacks.net/icons/1/free-building-icon-1062-thumb.png' });
var parkIcon = new CarrosselIcon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/3277/3277529.png' });
var bikeIcon = new CarrosselIcon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/384/384144.png' });
var userLocationIcon = L.icon({
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-person-2087092-1759762.png',


    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


function add_several_marker(dict, picon) {
    //will iterate and create a marker for every single markergroup(objects)
    carrosselGroup.clearLayers();

    for (k in dict) {
        var coord = dict[k];
        var bloco_marker = L.marker(coord, { icon: picon }).addTo(carrosselGroup);
    }
}
function add_several_marker_list(list, picon) {
    //will iterate and create a marker for every single markergroup(objects)
    carrosselGroup.clearLayers();

    for (item of list) {
        let lat = item[0];
        let lng = item[1];
        L.marker([lat, lng], { icon: picon }).addTo(carrosselGroup);
    }
}


//adicionando markers para cada botão do carrossel, pode ser simplificado mas eu achei desnecessário
//pois deixaria o código mais "dificil" de ler
var hasMarker = false;


btn_blocos.onclick = () => {
    add_several_marker(blocos, predioIcon);
    // add_several_marker(blocos);
}
btn_pracas.onclick = () => {
    add_several_marker(pracas, parkIcon);
}
btn_banheiros.onclick = () => {
    add_several_marker(banheiros, bathRoomIcon);
}
btn_bikes.onclick = () => {
    add_several_marker_list(bikes, bikeIcon);
}
btn_cantinas.onclick = () => {
    add_several_marker(cantinascd, cantinaIcon);
}



//limpa todos os marcadores visíveis
var btn_limpar = document.getElementById("show-clear").addEventListener("click", () => {
    //limpa o mapa, tirando markers e rotas.
    carrosselGroup.clearLayers();
    if (controlOfRoutes) {
        map.removeControl(controlOfRoutes);
        markerGroup.clearLayers();
    }
});
//
//Rotas ao clique 1.4.1
let marker;
let secondMarker;
//1.3.3 HOTFIX : flag "exists = false" se tornou inútil
// let exists = false;
// let control;

let markerGroup = L.layerGroup().addTo(map);

//Função antiga para receber a localização do usuário

//Coloquei todos os marcadores dentro da layer markerGroup(se quiser que eles não desapareçam
//com cliques, crie ou coloque-os em uma layer diferente

// map.on('click', function (e) {
//     //sempre quando o mapa for clicado, todas os marcadores que foram adicionados a layer markerGroup sertão removidos
//     markerGroup.clearLayers();
//     carrosselGroup.clearLayers();
//     function success_click(pos) {
//         const lat = pos.coords.latitude;
//         const lng = pos.coords.longitude;
//         //se as rotas existirem, remove as rotas
//         if (control) {
//             map.removeControl(control);
//         }


//         marker = L.marker([lat, lng]).addTo(markerGroup);
//         map.setView([lat, lng])

//         secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(markerGroup);

//         control = L.Routing.control({
//             router: osrRouter,
//             formatter: L.routing.formatterORS({

//                 language: 'pt',     // language of instructions & control ui                
//                 steptotext: true,   // force using internal formatter instead of ORS instructions

//             }),
//             waypoints: [
//                 L.latLng(marker.getLatLng()),
//                 L.latLng(secondMarker.getLatLng())
//             ]
//         }).on('routesfound', function (e) {
//             e.routes[0].coordinates.forEach(function (coord, index) {
//                 setTimeout(() => {
//                     marker.setLatLng([coord.lat, coord.lng])
//                 }, 1000);

//             })
//         }).addTo(map);

//         //V1.3 -- remove aquele quadrado com as instruções 
//         control._container.style.display = "None";
//     }

//     function error(err) {
//         if (err.code === 1) {
//             alert("Por favor, habilite sua localização!")
//         } else {
//             alert("Não foi possível identificar sua localização.")
//         }
//     }
//     navigator.geolocation.getCurrentPosition(success_click, error);
// });

//localização do usuário que agora podem ser facilmente acessados.
var userLat;
var userLng;
var userLatLng;
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
function sucess(pos) {
    const crd = pos.coords;

    userLat = crd.latitude;
    userLng = crd.longitude;
    userLatLng = L.latLng(userLat, userLng);
    console.log(userLatLng);
}
function error(err) {
    alert("Habilite a localização para desfrutar de todas as funções.");
}
navigator.geolocation.getCurrentPosition(sucess, error, options);

//função de rotas por clique simplificada e mais legível.
var controlOfRoutes;
function drawRouteFromUser(e) {
    if (userLat && userLng) {
        clickCoord = e.latlng;
        //Converte as coordenadas do usuario para as coord do leaflet.
        let userCoord = L.latLng(userLat, userLng);
        carrosselGroup.clearLayers();
        if (controlOfRoutes) {
            //mantém apenas uma rota por clique.
            map.removeControl(controlOfRoutes);
        }
        controlOfRoutes = L.Routing.control({
            router: osrRouter,
            waypoints: [userCoord, clickCoord],
        }).addTo(map);

        controlOfRoutes._container.style.display = "None";
    } else {
        alert("Habilite sua localização para poder criar rotas.");
        // navigator.geolocation.getCurrentPosition(sucess, error);

    }
}

map.on('click', drawRouteFromUser);

//botão de mostrar o usuário no mapa.
btn_locate.onclick = () => {
    carrosselGroup.clearLayers();
    if (controlOfRoutes) {
        map.removeControl(controlOfRoutes);
    }
    navigator.geolocation.getCurrentPosition(sucess, error, options);
    if (userLat || userLng) {
        L.marker([userLat, userLng], { icon: userLocationIcon }).addTo(carrosselGroup);
        map.flyTo(userLatLng, 19,);
    }

}

//1.4.1 barra de pesquisa adicionada
// Pesquisando No Mapa

// Primeiro, obtenha a barra de pesquisa pelo seu ID ou classe

var searchInput = document.querySelector('.search-input');

// Em seguida, adicione um evento de escuta para o evento 'keydown'
//

function carregarJson(nome) {
    //busca dentro do banco de dados um item correspondente da barra de pesquisa.
    fetch('dados.json')
        .then((response) => response.json())
        .then((json) => {
            let quantMarcador = 0;
            carrosselGroup.clearLayers();
            //flag pra repetição
            let predioone = '';
            let prediotwo;
            let bloco_marker;
            let lat;
            let lng;
            for (item of json) {
                if (nome == 'neas') {
                    map.flyTo([-23.496780373766796,
                    -47.3887855194163])
                }
                if (item.predio && item.nome && item.tipo && item.descricao && item.numero && nome != '') {
                    if (item.predio.includes(nome) || item.nome.includes(nome) || item.tipo.includes(nome) || item.descricao.includes(nome) || item.numero.includes(nome)) {
                        prediotwo = item.predio;
                        //previne markers repetidos
                        if (predioone !== prediotwo) {
                            //o predio um só altera se o predio 2 for diferente, e quando eles são diferentes aparece um marcador.
                            lat = item.lat;
                            lng = item.lng;
                            bloco_marker = L.marker([lat, lng]).addTo(carrosselGroup);
                            quantMarcador += 1;
                            predioone = item.predio;
                            // console.log(item.nome);
                        }

                    }

                }
            }
            if (quantMarcador < 2 && lat && lng) {
                map.flyTo([lat, lng], 19);

            }
            console.log(`quantidade de marcador adicionado pela search ${quantMarcador}`);

        });

    // console.log(dados);
}


function removeAcento(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    return text;
}

searchInput.addEventListener('keydown', function (e) {
    // Verifique se a tecla pressionada foi 'Enter'
    if (e.key === 'Enter') {
        // Evite que o formulário seja enviado (se a barra de pesquisa estiver em um formulário)
        // e.preventDefault();

        // // Obtenha o valor da barra de pesquisa
        // var address = searchInput.value + ' uniso';
        // console.log(address);
        // // Agora você pode usar o endereço para buscar o local no mapa
        // searchLocationOnMap(a    ddress);

        let variavel = searchInput.value.toLowerCase().trim();
        let variavel_sem_acento = removeAcento(variavel);
        // console.log(variavel.includes('a'));

        carregarJson(variavel_sem_acento);


    }
});

//FIM DA 1.4.1

// ROUTING
// the plugin allow to setting the requesting format
// but at this time, gpx doesn't works.
const apikey = "5b3ce3597851110001cf6248e8413cb883f24898a6c56af40e2b8051";
const osrRouter = new L.Routing.OpenRouteService(apikey, {
    "timeout": 30 * 1000, // 30",
    "format": "json",                           // default, gpx not yet supported
    "host": "https://api.openrouteservice.org", // default if not setting
    "service": "directions",                    // default (for routing) 
    "api_version": "v2",                        // default
    "profile": "foot-walking",                  // default
    "routingQueryParams": {
        "attributes": [
            "avgspeed",
            "percentage"
        ],
        "language": "fr-fr",
        "maneuvers": "true",
        "preference": "recommended",
    }
});
