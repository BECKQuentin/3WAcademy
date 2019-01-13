<?php
if(extension_loaded("PDO")){

    $pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');
 
    $pdo->exec('SET NAMES UTF8');
    $query = $pdo->prepare
    (
        'SELECT * FROM offices'
    );

    $query->execute();

    $offices = $query->fetchAll(PDO::FETCH_ASSOC);
        //fetchAll      si recupération de plusieurs element 
        //fetch         si récupération d'un seule élément 

    var_dump($offices);

    }
?>

