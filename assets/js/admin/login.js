
const makeRequest = (login) => {
	
};

function validate (...args) {

	var validated = false;

	args.map(arg => {

		if(arg.value == '') {

			alert('Campo '+arg.key+' vacío');
			validated = true;

		} 
	});

	return validated;
};

const getCredentials = () => {

	var user = document.getElementsByName('user')[0].value;
	var pw = document.getElementsByName('pw')[0].value;

	const validation = validate(
		{key: 'usuario', value: user},
		{key: 'contraseña', value: pw}
	);

	return validation ? {user: user, pw: pw} : false;
};

const login = () => {

	const credentials = getCredentials();

	const request = credentials ? makeRequest(credentials) : false;
	
	const result = request ? goHome() : showError();
};