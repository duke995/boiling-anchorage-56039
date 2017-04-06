<?php
   /* $nome=$_POST["name"];
    $cognome = $_POST["surname"];
    $data = $_POST["date"];
    $password = $_POST["password"];
    print("$nome, $cognome, $data, $password");*/

$file = "file.txt";


$fp = fopen($file, "a");


fputs($fp, htmlspecialchars($_POST["name"]) . " " . htmlspecialchars($_POST["surname"]) . " " . htmlspecialchars($_POST["date"]) . " " . htmlspecialchars($_POST["password"]). "\r\n");

fclose($fp);
?>