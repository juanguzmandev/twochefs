<?php	

	$type_js = $_POST['type'];
	$action_js = $_POST['action'];

	$db = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');

	function makeQueries($db, $query) {

		$result = mysqli_query($db, $query);

		$items = Array();

		while($result_array = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			array_push($items, $result_array);
		}

		return json_encode($items);

	}

	function get($type) {

		switch ($type) {

			case 'products':

				$sql = 'SELECT * FROM productos';

				break;

			case 'clients':

				$sql = 'SELECT * FROM clientes';
				
				break;

			case 'invoices':

				$sql = 'SELECT * FROM facturas';
				
				break;

		}

		

		echo makeQueries(mysqli_connect('127.0.0.1', 'root', '', 'twochefs'), $sql);
	
	}
	
	get($type_js, $action_js);
?>