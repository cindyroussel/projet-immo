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
         let mailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
         let test3 = mailReg.test(mail);
         if (mail == ""|| test3 == false){
             $("#Mail").css("border-color", "red");
             $("#mail_error").show();
         }else {
             $("#Mail").css("border-color", "green");
         };

         let tel = $("#Tel").val();
         let telReg = /[0-9]/;
         let test4 = telReg.test(tel);
         if (tel == ""|| test4 == false){
             $("#Tel").css("border-color", "red");
             $("#tel_error").show();
         }else {
             $("#Tel").css("border-color", "green");
         };

         let ref = $("#Ref").val();
         if (ref == ""){
             $("#Ref").css("border-color", "red");
             $("#ref_error").show();
         }else {
             $("#Ref").css("border-color", "green");
         };




         let dde = $("#Demande").val();
         if (dde == ""){
             $("#Demande").css("border-color", "red");
             $("#dde_error").show();
         }else {
             $("#Demande").css("border-color", "green");
         };
     });
 }

 $('#Nom').click(function(){
    $('#error_nom').hide(); 
    
});

 verif();

 


 