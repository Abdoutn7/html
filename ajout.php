<?php
mysql_connect("localhost","root","");
mysql_select_db("tic2009s1");
$cin=$_POST["T1"];
$nom=$_POST["T2"];
$prn=$_POST["T3"];
$q1=$_POST["D1"];
$q2=$_POST["R1"];
$q31=$_POST["T4"];
$q32=$_POST["T5"];
$q33=$_POST["T7"];
$note=0;
if($q1=='2') $note+=4; 
if($q2=='V3') $note+=4;
if($q31=='2') $note+=4;
if($q32=='1') $note+=4;
if($q33=='3') $note+=4;
$r="insert into Examen Values('$cin','$nom','$prn','$note');";
$res=mysql_query($r);
echo mysql_affected_rows()." ligne insérée dans la base";
mysql_close();
?>