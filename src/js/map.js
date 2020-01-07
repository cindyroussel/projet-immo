function initMap(listener) {
    // les coordonnées de Lille
    let lille = {
        lat : 50.629453,
        lng: 3.058317
    };

    let appt1 ={
        lat : 50.627959,
        lng : 3.059784
    };

    let content = '<p><img src="../src/img/nom.png" alt="logo" id="logo1" </p> <p>Rue de la Clef</p><p>59800 Lille</p>';
    let content1 = "<h5>Réf. 123 Appt1</h5> <p>10 rue des Pyramides</p><p>59800 Lille</p>";

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
        position: appt1,
        map: map
    });



    let infos = new google.maps.InfoWindow({
        content: content,
        position: lille,

    });

    let infos2 = new google.maps.InfoWindow({

        content: content1,
        position: appt1
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


}

initMap();