<?php


$title = $_POST['title'];
$descript = $_POST['descript'];
$date = $_POST['date'];
$priority = $_POST['priority'];

function add($title, $descript, $date, $priority){
    $line= [$title, $descript, $date, $priority];
    $file = fopen('doc.csv', 'a');
    fputcsv($file, $line);
    fclose($file);
}

function recup (){
    $file = fopen('doc.csv', 'a+');
    $linecreate = fgetcsv($file);
    fclose($file);
    return $linecreate;
}

$si = recup ();
var_dump($si);


?>