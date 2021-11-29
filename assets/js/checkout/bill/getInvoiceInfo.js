
invoiceElement = document.getElementById('invoice-holder');

const getInvoiceInfo = () => {

	var invoice = JSON.parse(sessionStorage.getItem('invoice'));

	invoiceElement.innerHTML = '<h1 class="fw-bold d-flex justify-content-center">Factura Nro. 0001</h1><span class="fw-bold d-flex justify-content-center">Nombre: Juan</span><span class="d-flex justify-content-center">Apellido: Guzman</span><span class="d-flex justify-content-center">Número de teléfono: 04126945077</span><span class="d-flex justify-content-center">Dirección exacta: 04126945077</span><span class="d-flex justify-content-center">Método de pago: 04126945077</span>';


};

document.addEventListener('DOMContentLoaded', getInvoiceInfo);