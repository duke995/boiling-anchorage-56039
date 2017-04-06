<?php
    $nome=$_POST["name"];
    $cognome = $_POST["surname"];
    $data = $_POST["date"];
    $password = $_POST["password"];
    /*print("$nome, $cognome, $data, $password");*/

$inp = array($nome, $cognome, $data, $password);
$file = "C:\Users\Luca-_Martini\Documents\GitHub\boiling-anchorage-56039\save.php";


$fp = fopen($file, "a");
fwrite($file, "\n");

foreach($inp as $i)
{
    $i = trim($i);
    $i = addslashes($i);
    fwrite($file, $i." ");
}


fclose($fp);
header('Location: Pagina1.html');
?>