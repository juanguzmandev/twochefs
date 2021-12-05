<?php 

	setlocale(LC_ALL,"es_VE");

	$dbC = mysqli_connect("127.0.0.1", "root", "", "twochefs");

	$pedido = $_POST;

	/*$nombre_captura = $_FILES['captura']['name'] = '';
	$captura = $_FILES['captura']['tmp_name'] = '';*/

	$nombre_captura = $_FILES['captura']['name'];
	$captura = $_FILES['captura']['tmp_name'];

	$save_location = './captures/'.$nombre_captura;

	$setOrderQuery = 'INSERT INTO pedidos(nombre, apellido, telefono, direccion, fecha, pedido, total, captura) VALUES("'.$pedido['nombre'].'", "'.$pedido['apellido'].'", "'.$pedido['telefono'].'", "'.$pedido['direccion'].'","'.date("Y-m-d H:i:s").'", \''.$pedido['pedido'].'\', "'.$pedido['total'].'","'.$save_location.'")';


	function setOrderInDatabase($dbC, $pedido, $setOrderQuery) {

		if($order = mysqli_query($dbC, $setOrderQuery)) {

			return true;

		} else {

			echo mysqli_error($dbC);
		}

	}
	
	if(move_uploaded_file($captura, $save_location)) {

		if(setOrderInDatabase($dbC, $pedido, $setOrderQuery)) {

			echo 'OK';

		} else {
		
			echo 'NO';
		}	
	} else {

		echo "FILE NOT SAVED";

	}

 ?>