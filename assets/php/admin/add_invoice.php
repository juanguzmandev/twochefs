<?php 

	$factura_nombre = $_POST['nombre'];
	$factura_apellido =  $_POST['apellido'];
	$factura_telefono = $_POST['telefono'];
	$factura_direccion = $_POST['direccion'];
	$factura_metodo =  $_POST['metodo'];
	$factura_carrito = $_POST['carrito'];
	$factura_total = $_POST['total'];

	$db = mysqli_connect("sdb-r.hosting.stackcp.net", "juanguzman", "Lhp7Py_8D[S£", "twochefs-323036a827");

	$add_invoice_sql = 'INSERT INTO facturas(nombre, apellido, telefono, direccion, metodo, carrito, total) VALUES("'.$factura_nombre.'", "'.$factura_apellido.'", "'.$factura_telefono.'", "'.$factura_direccion.'", "'.$factura_metodo.'", \''.$factura_carrito.'\', '.$factura_total.');';

	if($add_invoice_query = mysqli_query($db, $add_invoice_sql)) {

		echo 'OK';

	} else {

		echo mysqli_error($db);
	}

?>