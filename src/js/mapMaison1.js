function initMap(listener) {
    // les coordonnées de Lille
    let lille = {
        lat : 50.638863,
        lng: 3.065166
    };

    let maison1 ={
        lat : 50.638111,
        lng : 3.069785
    };

    let content = '<p><img src="../src/img/nom.png" alt="logo" id="logo1" </p> <p> 20 Rue de la Clef</p><p>59800 Lille</p>';
    let content3 = "<h5>Réf. 789 Maison 1</h5> <p>21 rue du vieux Faubourg</p><p>59800 Lille</p>";

    let affichePlace = document.querySelector("#maps");

    let map = new google.maps.Map( affichePlace, {
        zoom: 16,
        center: lille


    });



    let marker = new google.maps.Marker({
        position: lille,
        map: map,
        icon:"../src/img/home.png"
    });

    let marker1 = new google.maps.Marker({
        position: maison1,
        map: map,
        icon:"../src/img/maison.png"
    });



    let infos = new google.maps.InfoWindow({
        content: content,
        position: lille,

    });

    let infos2 = new google.maps.InfoWindow({

        content: content3,
        position: maison1
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
        destination : maison1,
        travelMode: google.maps.DirectionsTravelMode.WALKING,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC
    };

    directionsService.route(request,function(response,status){
        if (status== google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions({'suppressMarkers':true});
        }
    });



}
$(function(){
    initMap();
});