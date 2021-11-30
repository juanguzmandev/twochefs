
invoiceElement = document.getElementById('invoice-holder');

var invoiceNumber;

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

	axios.post('../../assets/php/admin/get_invoice_last_register.php').then(response => {
		invoiceNumber = response.data;
	});	

};

const getInvoiceInfo = () => {

	var invoice = JSON.parse(sessionStorage.getItem('invoice'));

	saveInvoiceInDb(invoice);

	getInvoiceNumber();

	invoiceElement.innerHTML = '<h1 class="fw-bold d-flex justify-content-center">Factura de pedido</h1><span class="fw-bold d-flex justify-content-center p-2">Nombre: '+invoice.name+'</span><span class="d-flex justify-content-center p-2">Apellido: '+invoice.lastName+'</span><span class="d-flex justify-content-center p-2">Número de teléfono: '+invoice.phone+'</span><span class="d-flex justify-content-center p-2">Dirección exacta: '+invoice.address+'</span><span class="d-flex justify-content-center p-2">Método de pago: '+invoice.method+'</span>';


};

document.addEventListener('DOMContentLoaded', getInvoiceInfo);

document.getElementById('cap-button').addEventListener('click', () => {

	domtoimage.toBlob(document.body)
	.then(function(blob) {
		saveAs(blob, 'factura.png');
    });

});
