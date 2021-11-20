
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

	axios.post('../../assets/php/admin/get.php', modeData).then(response => {
		displayGetProductItems(response.data);
	});
};

const addItem = section => {};
const delItem = section => {};

const callForm = (section, use) => {

	var holder = document.getElementsByClassName(section+'-holder')[0];

	switch (use) {
 
		case 'add':

			holder.innerHTML = "<p>Hi, add element!</p>";

			break;

		case 'list':

			//holder.innerHTML = "<p>Hi, list element!</p>";
			getItems(section);

			break;

		case 'update':

			holder.innerHTML = "<p>Hi, update element!</p>";

			break;

		case 'del':

			holder.innerHTML = "<p>Hi, del element!</p>";

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