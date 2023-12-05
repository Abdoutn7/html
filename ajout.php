<?php
$np=$_POST["np"];
$age=$_POST["age"];
$liste=$_POST["liste"];
$spi=$_POST["spi"];
$tel=$_POST["tel"];
require(recherche.php);
$sql= Inser Into Value("$np","$age","$liste","$spi","$tel");
echo $sql;


?>