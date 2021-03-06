var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 45.039, lng: 38.971},
zoom: 17,
scrollwheel: false    
});
        
var marker = new google.maps.Marker({
map: map,
place: {
location: {lat: 45.039, lng: 38.971},
query: '350000, Краснодар, ул. Головатого, 100'

},
attribution: {
source: 'Google Maps JavaScript API',
webUrl: 'https://developers.google.com/maps/'
}
});

var infoWindow = new google.maps.InfoWindow({
content: ' <h4>NЁRDSDESIGN STUDIO</h4> <p>350000, Краснодар, ул. Головатого, 100 </p>  <p>тел. +7 (861) 275-75-75</p>'
});

// Opens the InfoWindow when marker is clicked.
marker.addListener('click', function() {
infoWindow.open(map, marker);
});
var styles = [
{
stylers: [
{ hue: "#e5e5e5" },
{ saturation: -100 },
{ lightness: 20 }

]
}
];
map.setOptions({styles: styles});
}
