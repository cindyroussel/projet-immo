function initMap(listener) {
    // les coordonnées de Lille
    let lille = {
        lat : 50.629453,
        lng: 3.058317
    };

    let content = "<h5>Blue Home</h5> <p>Rue de la Clef</p><p>59800 Lille</p>";

    let affichePlace = document.querySelector("#maps");

    let map = new google.maps.Map( affichePlace, {
        zoom: 13,
        center: lille
    });


    let marker = new google.maps.Marker({
        position: lille,
        map: map
    });

    let infos = new google.maps.InfoWindow({
        content: content,
        position: lille
    });

    /* marker.addListener("click", function () {
         infos.open(map);
     });
     */
    marker.addListener("click", () => {
        infos.open(map);
    });

}

initMap();