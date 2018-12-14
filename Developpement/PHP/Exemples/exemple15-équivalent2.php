<?php

$random = rand(min, max); // renvoi un entier aléatoire entre min et max

array_push($tab, $value); // push une valeur $value dans un tableau $tab

count($tab); // compte le nombre d'element dans un tableau comme .length en JS


$array = array('lastname', 'email', 'phone');
$comma_separated = implode(",", $array);

echo $comma_separated; // lastname,email,phone

// Chaîne vide lors de l'emploi d'un tableau vide :
var_dump(implode('hello', array())); // string(0) ""

?>
