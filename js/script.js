

<script>
var map;
function initMap() {
    // Create a map centered at a specific location
    var myLatLng = {lat: 41.8781, lng: -87.6298};
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'San Francisco, CA'
    });

    // Add a custom info window to the marker
    var infoWindow = new google.maps.InfoWindow({
        content: 'Welcome to San Francisco!'
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Change the map type to satellite
    var satelliteButton = document.getElementById('satellite-button');
    satelliteButton.addEventListener('click', function() {
        map.setMapTypeId('satellite');
    });

    // Change the map type to roadmap
    var roadmapButton = document.getElementById('roadmap-button');
    roadmapButton.addEventListener('click', function() {
        map.setMapTypeId('roadmap');
    });

    // Change the zoom level to 15
    var zoomInButton = document.getElementById('zoom-in-button');
    zoomInButton.addEventListener('click', function() {
        map.setZoom(15);
    });
}
</script>