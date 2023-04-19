var map;
function initMap() {
    
    var myLatLng = {lat: 41.8781, lng: -87.6298};
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Chicago, IL',
        draggable: true
    });
    
    marker.addListener('dragend', function() {
        console.log('Marker dropped at:', marker.getPosition());
    });
    
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Chicago, IL'
    });
    
    var infoWindow = new google.maps.InfoWindow({
        content: 'Welcome to Chicago!'
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    
    var satelliteButton = document.getElementById('satellite-button');
    satelliteButton.addEventListener('click', function() {
        map.setMapTypeId('satellite');
    });

    
    var roadmapButton = document.getElementById('roadmap-button');
    roadmapButton.addEventListener('click', function() {
        map.setMapTypeId('roadmap');
    });
}

