<?php 

	$db = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');

	$seccion = $_POST['seccion'];

	function delete_client() {

		echo 'Función para eliminar clientes';
	}

	function delete_invoice() {
		
		echo 'Función para eliminar facturas';
	}

	function delete_product($db) {

		$nombre_producto = $_POST['nombre_producto'];

		$eliminar_producto_sql = 'DELETE FROM productos WHERE nombre LIKE "%'.$nombre_producto.'%"';

		if($add_product_query = mysqli_query($db, $eliminar_producto_sql)) {

			echo 'OK';

		} else {

			echo mysqli_error($db);
		}


	}

	switch ($seccion) {

		case 'products':
			
			delete_product($db);

			break;
		
		case 'invoices':
			
			delete_invoice();

			break;

		case 'clients':

			delete_client();

			break;
	}

?> 