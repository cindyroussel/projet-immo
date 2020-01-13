$("#submit").click(function() {
    let nom = $("#nom").val();

    if (nom == "") {
        $("#nom_error").show();
    }
    let nomReg = /^[0-9]$/;

    if (nom == nomReg) {

        $("#nom_error").show();
    }
    else {
        $("#nom").css("border-color", "green");
    }


});