<?php

function securisation($dataForm){
    $dataForm = trim($dataForm);
    $dataForm = stripslashes($dataForm);
    $dataForm = strip_tags($dataForm);
    return $dataForm;
};
?>