const tilesProviders ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let myMap = L.map('myMap').setView([41.386999, 2.1638504],16.2);


var myIcon = L.icon({
    iconUrl: './img/marker.png',
    shadowUrl: '',

    iconSize:     [25, 38], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let marker = L.marker();


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleHlzIiwiYSI6ImNrcXVxZXphbDA0a2MybnBjbGJqaWltZWIifQ.NY3lpwnAtMucydtRvmA6nA'
    }).addTo(myMap);

    
var popup = L.popup();

    myMap.on('click', function(e) {
        if(marker) myMap.removeLayer(marker)
        var center = e.latlng;

        //console.log(center);
        marker = L.marker(center,{icon: myIcon}).bindPopup("Mis coordenadas son:<br><b>Lat: "+e.latlng.lat+" Lng: "+e.latlng.lng+"</b>").addTo(myMap);
        myMap.setView(center, 18);
        //alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

  