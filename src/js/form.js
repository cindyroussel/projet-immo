 function verif() {
     $("#submit").click(function (event) {
         event.preventDefault();
         let nom = $("#Nom").val();      //je récupère la valeur de l'input nom dans une variable
         let nomReg = /[0-9]/;           //je crée une variable nomReg qui sera comprise entre 0 et 9
         let test = nomReg.test(nom);     // je crée une variable test qui testera si mon input nom sera comprise entre 0 et 9
         if (nom == "" || test == true) {     // si input nom est vide et que mon test est vrai donc mon input nom contient au moins un chiffre compris entre 0 et 9
            $("#Nom").css("border-color", "red");  //alors la bordure de mon input devient rouge
             $("#nom_error").show();               // et le message d'erreur s'affiche 
         }else {
             $("#Nom").css("border-color", "green");   // sinon la bordure de l'input devient verte
         };


         
         let prenom = $("#Prenom").val();   //je récupère la valeur de l'input prénom dans une variable
         let prenomReg = /[0-9]/;              //je crée une variable prenomReg qui sera comprise entre 0 et 9
         let test2 = prenomReg.test(prenom);       // je crée une variable test2 qui testera si mon input prénom sera comprise entre 0 et 9
         if (prenom == "" || test2 == true) {     // si input prenom est vide et que mon test2 est vrai donc mon input prenom contient au moins un chiffre compris entre 0 et 9
            $("#Prenom").css("border-color", "red");   //alors la bordure de mon input devient rouge
             $("#prenom_error").show();                // et le message d'erreur s'affiche 
         }else {
             $("#Prenom").css("border-color", "green");    // sinon la bordure de l'input devient verte
         };

         let mail = $("#Mail").val();
         let mailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$]/;
         let test3 = mailReg.test(mail);
         if (mail == "" || test3 == true) {
             $("#Mail").css("border-color", "red");
             $("#mail_error").show();
         }else {
             $("#Mail").css("border-color", "green");
         };


     });
 }

 verif();