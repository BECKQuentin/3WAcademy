<?php

class PaymentController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */


	}

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
		$dataJson = json_decode($_POST['order']);
		var_dump($dataJson);

		$meal = new MealModel();  

		foreach ($dataJson as $key) {
			$data = $meal->mealElement($key->idProduct);
			var_dump($data);
			$key->safePrice = $data['SalePrice'];
		}

		$orders = new OrderModel();  
 		$orderData =  $orders-> newOrder($_SESSION['id']);

	}
}
?>