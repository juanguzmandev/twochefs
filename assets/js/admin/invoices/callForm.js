const addProductItems = () => {

	alert('Hola');

	const name = document.getElementsByName('nombre')[0].value;
	const description = document.getElementsByName('descripcion')[0].value;
	const price = document.getElementsByName('precio')[0].value;
	const category = document.getElementsByName('categoria')[0].value;
	const availability = document.getElementsByName('disponible')[0].value;
	const image = document.getElementsByName('imagen_producto')[0].files[0];

	//console.log(name, description, price, category, availability, image);

	var productInfo = new FormData();

	productInfo.append('nombre', name);
	productInfo.append('descripcion', description);
	productInfo.append('precio', price);
	productInfo.append('categoria', category);
	productInfo.append('disponible', availability);
	productInfo.append('imagen', image);

	axios.post('../../assets/php/admin/add.php', productInfo).then(response => {
		console.log(response);
	});



};

const displayGetProductItems = products => {

	var tableOpenTag = '<table class="table"><thead><tr><th scope="col">Nombre</th><th scope="col">Link</th><th scope="col">Precio</th><th scope="col">Descripción</th><th scope="col">Categoría</th><th scope="col">Disponible</th></tr></thead><tbody>';
	var tableCloseTag = '</tbody></table>';

	products.forEach(product => {

		var productRow = '<tr><th>'+product.nombre+'</th><td>'+product.link+'</td><td>'+product.precio+'</td><td>'+product.descripcion+'</td><td>'+product.categoria+'</td><td>'+product.disponible+'</td></tr>';

		tableOpenTag = tableOpenTag + productRow;
	});

	tableOpenTag = tableOpenTag + tableCloseTag;

	var holder = document.getElementsByClassName('products-holder')[0];

	holder.innerHTML = tableOpenTag;

};

const getItems = section => {

	var modeData = new FormData();
	modeData.append('type', section);
	modeData.append('action', 'list');

	switch (section) {

		case 'products':

			axios.post('../../assets/php/admin/get.php', modeData).then(response => {
				displayGetProductItems(response.data);
			});

			break;

		case 'clients':

			axios.post('../../assets/php/admin/get.php', modeData).then(response => {
				displayGetClientItems(response.data);
			});			

			break;

		case 'invoices':

			axios.post('../../assets/php/admin/get.php', modeData).then(response => {
				displayGetInvoiceItems(response.data);
			});			
 
			break;

	}
};

const addItem = (section, holder) => {

	switch (section) {

		case 'products':

			holder.innerHTML = '<div class="container d-flex justify-content-center flex-column"><div class="row p-4"><div class="col"><label for="nombre">Nombre</label><input type="text" name="nombre" class="form-control"></div><div class="col"><label for="descripcion">Descripción</label><input type="text" name="descripcion" class="form-control"></div></div><div class="row p-4"><div class="col"><label for="precio">Precio (USD)</label><input type="number" name="precio" class="form-control"></div><div class="col"><label for="categoria">Categoría</label><select name="categoria" id="categoria" class="form-control"><option value="bebidas">Bebidas</option><option value="comidas">Comidas</option><option value="postres">Postres</option></select></div></div><div class="row p-4"><div class="col"><label for="disponible">Disponibilidad</label><select name="disponible" id="disponible" class="form-control"><option value="1">Disponible</option><option value="0">No Disponible</option></select></div><div class="col"><label for="imagen_producto">Imagen del producto</label><input type="file" name="imagen_producto" class="form-control"></div></div><div class="row p-4"><div class="col d-flex justify-content-center mt-4"><button class="btn btn-success" id="add-button">Agregar</button></div></div></div>';

			document.getElementById('add-button').addEventListener('click', addProductItems);

			break;

		case 'invoices':

			break;

		case 'clients':

			break;
	}
};
const delItem = section => {};

const callForm = (section, use) => {

	var holder = document.getElementsByClassName(section+'-holder')[0];

	switch (use) {
 
		case 'add':
			
			addItem(section, holder);

			break;

		case 'list':

			//holder.innerHTML = "<p>Hi, list element!</p>";
			getItems(section);

			break;

		case 'update':

			holder.innerHTML = "<p>Hi, update element!</p>";

			break;

		case 'del':

			delItem(section);

			break;

		default:

			holder.innerHTML = "<p>Hi, list element!</p>";

	}	
};

var actualSection = location.href.split('/')[5];

document.addEventListener('DOMContentLoaded', () => {
	callForm(actualSection, 'list');
});

//callForm('list');