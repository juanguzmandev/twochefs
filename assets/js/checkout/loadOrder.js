let setInDatabase = (formData, cart, total) => {

	/*console.log(formData);
	console.log(cart);
	console.log(total);*/
	formData.pedido = cart;
	formData.total = total;

	axios.post('../assets/php/checkout/setOrderInDatabase.php', formData)
	.then((response) => {

		console.log(response);

		if (response.data == 'OK') {

			document.getElementById('orderAlert').innerHTML = 'El pedido se procesó correctamente. Se realizará una llamada para confirmar su orden';

			$('#orderModal').modal();

		} else {

			document.getElementById('orderAlert').innerHTML = 'El pedido no pudo ser procesado. Intente más tarde';

			$('#orderModal').modal();
		}
	});

};

let getDataFromForm = () => {

	var name = document.getElementsByName('nombre')[0].value;
	var lastName = document.getElementsByName('apellido')[0].value;
	var phone = document.getElementsByName('telefono')[0].value;
	var email = document.getElementsByName('correo')[0].value;
	var address = document.getElementsByName('direccion')[0].value;
	var capture = document.getElementsByName('captura')[0].value;
	var reference = document.getElementsByName('referencia')[0].value;

	var orderData = {
		nombre: name,
		apellido: lastName,
		telefono: phone,
		email: email,
		direccion: address,
		captura: capture,
		referencia: reference
	};

	return orderData;
	
};

let processData = () => {

	var cart = JSON.parse(localStorage.getItem('cart'));
	var total = localStorage.getItem('total');

	var formData = getDataFromForm();

	setInDatabase(formData, cart, total);
};

let setCheckoutTable = (cart, total) => {

	var tableElement = document.getElementById('tableBody');

	var tableRows = '';

	cart.forEach((item) => {

		var tableRow = '<tr><td>'+item.nombre+'</td><td></td><td>'+item.precio+'$</td></tr>';

		tableRows = tableRows + tableRow;
	});

	tableRows+= '<tr><th>Total</th><td></td><td class="text-success font-weight-bold">'+parseInt(total)+'$</td></tr>';
	tableElement.innerHTML = tableRows;
};

let loadOrder = () => {

	if (!localStorage.getItem('cart')) {

		alert('No hay productos en la orden');
		location.href='/twochefs/shop';

	} else {

		var cart = JSON.parse(localStorage.getItem('cart'));
		var total = localStorage.getItem('total');

		//console.log(total);
		setCheckoutTable(cart, total);	

	}
};

loadOrder();