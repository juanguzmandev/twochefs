
const callForm = (section, use) => {

	var holder = document.getElementsByClassName(section+'-holder')[0];

	switch (use) {

		case 'add':

			holder.innerHTML = "<p>Hi, add element!</p>";

			break;

		case 'list':

			holder.innerHTML = "<p>Hi, list element!</p>";

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

//callForm('list');