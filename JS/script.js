const url = 'https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78559492c2mshae7e73506b12476p1382e7jsnfa33ce985a0e',
		'X-RapidAPI-Host': 'hobbies-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

