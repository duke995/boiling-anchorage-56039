<?php
   /* $nome=$_POST["name"];
    $cognome = $_POST["surname"];
    $data = $_POST["date"];
    $password = $_POST["password"];
    print("$nome, $cognome, $data, $password");*/

$file = "C:\Users\Luca-_Martini\Documents\GitHub\boiling-anchorage-56039\save.php";


$fp = fopen($file, "a");


fputs($fp, htmlspecialchars($_POST["name"]) . " " . htmlspecialchars($_POST["surname"]) . " " . htmlspecialchars($_POST["date"]) . " " . htmlspecialchars($_POST["password"]). "\r\n");

fclose($fp);
header('Location: Pagina1.html');
?>