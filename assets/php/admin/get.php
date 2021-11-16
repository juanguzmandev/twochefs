<?php	

	$type_js = $_POST['type'];
	$action_js = $_POST['action'];

	$db = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');

	function type($type_of_request) {

		switch ($type_of_request) {

			case 'products':
				
				break;

			case 'clients':
				
				break;

			case 'invoices':
				
				break;

			default:
				
				break;
		}
	}

	type($type_js);
?>