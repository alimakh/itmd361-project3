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
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Chicago, IL'
    });
    
    var searchInput = document.getElementById('search-input');
    var autocomplete = new google.maps.places.Autocomplete(searchInput);

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
        } else {
          alert("The place has no geometry!");
        }
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

    var geolocateButton = document.getElementById('geolocate-button');
    geolocateButton.addEventListener('click', function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            var myLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(myLatLng);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Your location'
            });
        });
    });
}