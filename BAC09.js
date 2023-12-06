function verif(){
    nom=document.getElementById("nom").value;
    age=document.getElementById("age").value;
    diplome=document.getElementById("diplome").SelectedIndex;
    spe=document.getElementById("sp").value;
    tel=document.getElementById("tel").value;
    if (verifn(nom)==false){
        alert("votre nom prenom est obligatoire")
    }else if (verifn(spe)==false){
        alert("donner votre specialte")
    }else if (verifa(age)==false){
        alert("votre age invalid")
    }else if (length(tel)!=8){
        alert("verfier votre numero de telephone")
    }
    f1.submit()

}
function verifn(ch){
    if (ch==""){
        return false
    }else{
        return true
    }
}
function verifa(x){
    if ((parseInt(x)<18)|| (parseInt(x)>60)){
        return false
    }else{
        return true
    }
}