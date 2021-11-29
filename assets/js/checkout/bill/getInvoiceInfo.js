
invoiceElement = document.getElementById('invoice-holder');

const saveInvoiceInDb = invoice => {

	var invoiceInfo = new FormData();

	invoiceInfo.append('nombre', invoice.name);
	invoiceInfo.append('apellido', invoice.lastName);
	invoiceInfo.append('telefono', invoice.phone);
	invoiceInfo.append('direccion', invoice.address);
	invoiceInfo.append('metodo', invoice.method);
	invoiceInfo.append('carrito', invoice.cart);
	invoiceInfo.append('total', invoice.total);

	axios.post('../../assets/php/admin/add_invoice.php', invoiceInfo).then(response => {
		console.log(response);
	});
};

const getInvoiceNumber = () => {

};

const getInvoiceInfo = () => {

	var invoice = JSON.parse(sessionStorage.getItem('invoice'));
	//var invoiceNumber = getInvoiceNumber();

	saveInvoiceInDb(invoice);

	invoiceElement.innerHTML = '<h1 class="fw-bold d-flex justify-content-center">Factura Nro. 0001</h1><span class="fw-bold d-flex justify-content-center">Nombre: Juan</span><span class="d-flex justify-content-center">Apellido: Guzman</span><span class="d-flex justify-content-center">Número de teléfono: 04126945077</span><span class="d-flex justify-content-center">Dirección exacta: 04126945077</span><span class="d-flex justify-content-center">Método de pago: 04126945077</span>';


};

document.addEventListener('DOMContentLoaded', getInvoiceInfo);