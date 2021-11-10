
var addState = false;

const callForm = (section, use) => {

	var invoicesHolder = document.getElementsByClassName(section+'-holder')[0];

	use == 'add' ? addState = true : addState = false;

	if (addState) {

		invoicesHolder.innerHTML = "<p>Hi, add element!</p>";

	} else {

		invoicesHolder.innerHTML = "<p>Hi, list element!</p>";

	}
	
};

callForm('list');