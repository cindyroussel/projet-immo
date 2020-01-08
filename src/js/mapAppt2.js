function initMap(listener) {
    // les coordonnées de Lille
    let lille = {
        lat : 50.638863,
        lng: 3.065166
    };

    let appt2 ={
        lat : 50.652224,
        lng : 3.077951
    };

    let content = '<p><img src="../src/img/nom.png" alt="logo" id="logo1" </p> <p> 20 Rue de la Clef</p><p>59800 Lille</p>';
    let content2 = "<h5>Réf. 456 Appt2</h5> <p>105 rue Jean Bart</p><p>59110 La Madeleine</p>";

    let affichePlace = document.querySelector("#maps");

    let map = new google.maps.Map( affichePlace, {
        zoom: 16,
        center: lille


    });



    let marker = new google.maps.Marker({
        position: lille,
        map: map
    });

    let marker1 = new google.maps.Marker({
        position: appt2,
        map: map
    });



    let infos = new google.maps.InfoWindow({
        content: content,
        position: lille,

    });

    let infos2 = new google.maps.InfoWindow({

        content: content2,
        position: appt2
    });



    /* marker.addListener("click", function () {
         infos.open(map);
     });
     */
    marker.addListener("click", () => {
        infos.open(map);
    });
    marker1.addListener("click", () => {
        infos2.open(map);
    });

    //itineraire

    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({'map':map});
    let request ={
        origin: lille,
        destination : appt2,
        travelMode: google.maps.DirectionsTravelMode.WALKING,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC
    };

    directionsService.route(request,function(response,status){
        if (status== google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({'supressMarkers':true});
        }
    });



}
$(function(){
    initMap();
});