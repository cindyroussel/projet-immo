


    // On initialise la latitude et la longitude de Lille(centre de la carte)
    var lat = 50.629756;
    var lon = 3.057460;
    var macarte = null;
    


    var adresses={
          "Blue Home <br> 20 rue de la clé <br> 59000 Lille":{"lat":50.638863,"lon": 3.065166},
          "Appartement 1 <br> 10 rue des Pyramides <br> 59000 Lille":{"lat":50.652224,"lon": 3.077951}
    };
    // Fonction d'initialisation de la carte
    function initMap() {
        // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
        macarte = L.map('map').setView([lat, lon], 11);
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);

        //on parcours les différentes adresses
        for(adresse in adresses){
              //on crée le marqueur et on lui assigne une pop up
            var marker = L.marker([adresses[adresse].lat,adresses[adresse].lon]).addTo(macarte);
            marker.bindPopup("<p>"+adresse+"</p>");
            marker.on('mouseover', function (e) {
                this.openPopup();
            });
            marker.on('mouseout', function (e) {
                this.closePopup();
            });
        }

    }


    window.onload = function(){
        // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
        initMap();
    };