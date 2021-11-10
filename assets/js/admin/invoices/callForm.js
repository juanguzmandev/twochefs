
var invoicesHolder = document.getElementsByClassName('invoices-holder')[0];

var addState = false;

const callForm = use => {

	use == 'add' ? addState = true : addState = false;

	if (addState) {

		invoicesHolder.innerHTML = "<p>Hi, add element!</p>";

	} else {

		invoicesHolder.innerHTML = "<p>Hi, list element!</p>";

	}
	
};

callForm('list');