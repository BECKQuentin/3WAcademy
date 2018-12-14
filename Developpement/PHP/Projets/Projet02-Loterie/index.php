<?php
$tab = [];
$min = 1;
$max = 50;

do{
    $nb;
    do {
        $nb = rand($min, $max);
        
    }while(in_array($nb, $tab) == true);

    array_push($tab, $nb);
}
while(count($tab) < 6);
$write_tab = implode(", ", $tab);

include 'index.phtml';

?>