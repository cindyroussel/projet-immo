$(document).ready(function() {
    function check_form(id_input,regex,msg_vide,erreur) {
        valid = true;
        if ($("#"+id_input).length === 0)
            return false;
        if($("#"+id_input).val() === "") {
            $("#"+id_input).next(".form_error").fadeIn().text(msg_vide);
            valid = false;
        }
        else if(!$("#"+id_input).val().match(regex)) {
            valid = false;
            $("#"+id_input).next(".form_error").fadeIn().text(erreur);
        }
        else
            $("#"+id_input).next(".form_error").fadeOut();
        return valid;
    }

    $("#cwp_form").submit(function(event) {
        var res = check_form("name", /^[A-Za-z0-9ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ]{3,}/,"Champ vide", "3 carac min, chiffres et lettres");
        res = check_form("mail", /^[a-z0-9\-_.]+@[a-z0-9\-_.]+\.[a-z]{2,3}$/i,"Champ vide", "Adresse mail non valide !") && res;
        res = check_form("message", /./ ,"Champ vide", "") && res;
        return res;
    });
});