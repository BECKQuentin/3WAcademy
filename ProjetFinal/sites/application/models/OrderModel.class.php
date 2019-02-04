<?php

class OrderModel {
    private $orders;

    public function newOrder ($id){
        $dataMeal = new DataBase();

		$orders = $dataMeal->query(
            'INSERT INTO `Orders`(`User_Id`, `CreationTimestamp`, `Status`) 
            VALUES (?, NOW(), "no paid")',[$id]);

    }



}



?>