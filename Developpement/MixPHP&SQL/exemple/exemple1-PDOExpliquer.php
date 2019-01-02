<?php

//cONSTRUCTEUR PDO
//Faire cette requette a cahque page
$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');
/*connextion entre le site web et la base de donée à 
host=localhost => remplacer par la lien de la base de donne 
dbname=classicmodels'=> nom de la base de donnée
'root' => identifiant
'troiswa' => mot de passe
*/

//METHODE EN OBJET PHP
//quel type de caractére est utiliser
$pdo->exec('SET NAMES UTF8');


//Requete SQL 
$query = $pdo->prepare 
(
	'SELECT * FROM offices'
);


//Executer le PDO 
$query->execute();

//stockage sans une variable 
$offices = $query->fetchAll(PDO::FETCH_ASSOC);

//=> range en tableau d'objet


?>