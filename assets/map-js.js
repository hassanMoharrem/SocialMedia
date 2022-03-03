
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoibWF4eW9zaGlkYSIsImEiOiJja3NuM3RqdnAzZDdlMnZvZGhhbGc1NjlvIn0.ENTz8z1A3g_ROwJ7g-rR_g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-65.017, -16.457],
    zoom: 5
});

var el = document.createElement('div');
el.className = 'marker';

var marker1 = new mapboxgl.Marker(el)
    .setLngLat([-67.29223632812499, -18.28151823530889])
    .addTo(map);

var marker2 = new mapboxgl.Marker(el.cloneNode())
    .setLngLat([-63.29223632812499, -18.28151823530889])
    .addTo(map);
var marker3 = new mapboxgl.Marker(el.cloneNode())
    .setLngLat([-65.29223632812499, -18.28151823530889])
    .addTo(map);

// for map, but marker2
// for marker1
map.on("click", function (e) {
    if (e.originalEvent.target === marker1.getElement()) {
        $('.width-250').toggleClass('d-block m-0');
    }
});

// for marker2
map.on("click", function (e) {
    if (e.originalEvent.target === marker2.getElement()) {
        alert('marker2');
    }
});
