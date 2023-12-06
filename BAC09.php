<?php
$nom_prenom=$_POST["nom"];
$age=$_POST["age"];
$diplome=$_POST["diplome"];
$specialite=$_POST["specialite"];
$tel=$_POST["tel"];
require("config.php");
$conn=mysqli_connect($server,$username,$password,$db) or die ("probleme de connxion au serveur");
$sql="insert into users values('$nom','$age','$diplome','$specialite','$tel');";
mysqli_query($conn,$sql);
?>
