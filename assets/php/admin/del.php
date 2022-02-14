<?php 

	$db = mysqli_connect("sdb-r.hosting.stackcp.net", "juanguzman", "Lhp7Py_8D[S£", "twochefs-323036a827");

	$seccion = $_POST['seccion'];

	function delete_client($db) {

		$client_id = $_POST['id'];

		$eliminar_cliente_sql = 'DELETE FROM clientes WHERE id = '.$client_id;

		if($delete_client_query = mysqli_query($db, $eliminar_cliente_sql)) {

			echo 'OK';

		} else {

			echo mysqli_error($db);
		}		
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

			delete_client($db);

			break;
	}

?> 