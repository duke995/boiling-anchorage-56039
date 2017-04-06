<?php
    $nome=$_POST["name"];
    $cognome = $_POST["surname"];
    $data = $_POST["date"];
    $password = $_POST["password"];
    /*print("$nome, $cognome, $data, $password");*/

$inp = array($nome, $cognome, $data, $password);
$file = "save.php";


$fp = fopen($file, "a");
fwrite($fp, "\n");

foreach($inp as $i)
{
    $i = trim($i);
    $i = addslashes($i);
    fwrite($fp, $i." ");
}



fclose($fp);
header('Location: Pagina1.html');
?>