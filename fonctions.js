function tect_alpha(ch){
    ch=ch.toUpperCase();
    i=0;
    test=true;
    while ((test==true) && (i<ch.length)){
        if(ch.charAt(i)<"A" ||ch.charAt(i)>"Z"){
            test=false
        }i++

    }
    return test;

}
function tect_num(ch){ 
    i=0;
    test=true;
    while ((test==true) && (i<ch.length)){
        if(ch.charAt(i)<0 ||ch.charAt(i)>9){
            test=false
        }i++

    }
    return test;

}
function verif(){
    np=document.getElementById("np").value;
    age=document.getElementById("age").value;
    spi=document.getElementById("spi").value;
    liste=document.getElementById("liste").selctedIndex;
    if((tect_alpha(np)==false) || (tect_alpha(spi)==false)||(np.length==0)||(spi.length==0)){
        alert("saisir votre np ou spi")
    }
    if(Number(age)<16 ||Number(age)>60){
        alert("saisr votre age entr 16 et 60")
    }
    if(tect_num(tel)==false || tel.length!=8){
        alert("saisir votre tel")
    }
    if(liste==0){
        alert("choisir  un diplome ")
    }
}