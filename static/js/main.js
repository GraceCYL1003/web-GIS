import * as Basics from './basic_op.js';

var map = L.map('mapid', {doubleClickZoom: false, editable: true}).setView([22.999, 120.220], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 21,
	tileSize: 512,
  	zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZ3JhY2VjbCIsImEiOiJjbGVoanRjOXMwZDVhM3hveWhnZnc4aGN4In0.8DZd8XdDSFOhAOTHekaKIw'
}).addTo(map);

export var layerGroup = L.layerGroup().addTo(map);
Basics.setButtonCallback(map, layerGroup);
