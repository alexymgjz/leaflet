const tilesProviders ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let myMap = L.map('myMap').setView([41.386999, 2.1638504],16.2);

let marker = L.marker([41.386999, 2.1638504],16).addTo(myMap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleHlzIiwiYSI6ImNrcXVxZXphbDA0a2MybnBjbGJqaWltZWIifQ.NY3lpwnAtMucydtRvmA6nA'
    }).addTo(myMap);

    
var popup = L.popup();

    


    // function onMapClick(e) {
    //     let polyline=L.layerGroup(marker).addTo(myMap); 
    //     layer=L.marker([e.latlng.lat, e.latlng.lng]).bindPopup("I am a Marker");
    //      if (polyline!== []) {
    //          polyline=L.layerGroup([marker]).clearLayers();
    //      }
       
        
    //     //var polyline=L.polyline([[marker]], {color: 'red',weight:8}).bindPopup("I am a Polyline");
      
          
    //    popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(myMap)
    //         storage = L.marker([e.latlng.lat, e.latlng.lng],16).addTo(myMap); 
           
    //         L.popup()
    //         .setLatLng([e.latlng.lat, e.latlng.lng],16)
    //         .setContent("Estamos en: " + e.latlng.lat.toString()+' ' + e.latlng.lng.toString())
    //         .openOn(myMap);
            
    //         layer = L.marker([e.latlng.lat, e.latlng.lng],16).addTo(myMap);
            
           
    // }
    
    // myMap.on('click', onMapClick); 


    myMap.on('click', function(e) {
        if(marker) myMap.removeLayer(marker)
        var center = e.latlng;

        //console.log(center);
        marker = L.marker(center).bindPopup("Mis coordenadas son:<br><b>Lat: "+e.latlng.lat+" Lng: "+e.latlng.lng+"</b>").addTo(myMap);
        myMap.setView(center, 18);
        //alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

    