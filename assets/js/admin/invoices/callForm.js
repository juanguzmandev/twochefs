
const getItems = section => {

	var modeData = new FormData();
	modeData.append('type', section);
	modeData.append('action', 'list');

	axios.post('../../assets/php/admin/get.php', modeData).then(response => {
		console.log(response);
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