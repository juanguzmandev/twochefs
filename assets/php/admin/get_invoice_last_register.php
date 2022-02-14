<?php
	
	$db = mysqli_connect("sdb-r.hosting.stackcp.net", "juanguzman", "Lhp7Py_8D[S£", "twochefs-323036a827");

	$lr_sql = 'SELECT * FROM facturas ORDER BY id DESC LIMIT 1';

	$items = Array();

	if($result = mysqli_query($db, $lr_sql)) {

		while($result_array = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			array_push($items, $result_array);
		}

		return json_encode($items);

	} else {

		echo mysqli_error($db);
	}


?>