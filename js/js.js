
let myMap;
const tilesProviders ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

$(face1).click(function (e) { 
    e.preventDefault();
    restart();
    
    myMap = L.map('myMap').setView([41.3870500, 2.1699700],16.2);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleHlzIiwiYSI6ImNrcXVxZXphbDA0a2MybnBjbGJqaWltZWIifQ.NY3lpwnAtMucydtRvmA6nA'
    }).addTo(myMap);



});

$(face2).click(function (e) { 
    
    e.preventDefault();
    restart();
    myMap = L.map('myMap').setView([41.386999, 2.1638504],16.2);
    var marker = L.marker([41.386999, 2.1638504]).addTo(myMap);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWxleHlzIiwiYSI6ImNrcXVxZXphbDA0a2MybnBjbGJqaWltZWIifQ.NY3lpwnAtMucydtRvmA6nA'
        }).addTo(myMap);
    
      
});

$(face3).click(function (e) { 
    e.preventDefault();
    restart();
    myMap = L.map('myMap').setView([41.386999, 2.1638504],16.2);
    var marker = L.marker([41.386999, 2.1638504]).addTo(myMap);
    marker.bindPopup("<b>Restaurant Centfocs</b><br>restaurante mediterraneo<br>Calle Balmes, 16,08007 Barcelona.").openPopup();
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWxleHlzIiwiYSI6ImNrcXVxZXphbDA0a2MybnBjbGJqaWltZWIifQ.NY3lpwnAtMucydtRvmA6nA'
        }).addTo(myMap);
    
    
});

function restart() {
    if(myMap != undefined || myMap != null){
        myMap.off();
        myMap.remove();
    }
}