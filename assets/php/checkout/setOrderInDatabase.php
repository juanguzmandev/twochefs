<?php 
	
	$dbC = mysqli_connect("127.0.0.1", "root", "", "twochefs");

	$pedido = json_decode(file_get_contents("php://input"));
	
	$setOrderQuery = 'INSERT INTO pedidos(nombre, apellido, telefono, direccion, fecha, pedido, total) VALUES("'.$pedido->nombre.'", "'.$pedido->apellido.'", "'.$pedido->telefono.'", "'.$pedido->direccion.'","'.date("Y-m-d, h:m:s").'", \''.json_encode($pedido->pedido).'\', "'.$pedido->total.'")';

	function setOrderInDatabase($dbC, $pedido, $setOrderQuery) {

		if($order = mysqli_query($dbC, $setOrderQuery)) {

			return true;

		} else {

			return false;
		}

	}

	if(setOrderInDatabase($dbC, $pedido, $setOrderQuery)) {
		echo 'OK';
	} else {
		
		echo 'NO';
	}

 ?>