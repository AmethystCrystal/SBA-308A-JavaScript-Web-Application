export async function fetchData() {
	const url = 'https://famous-quotes4.p.rapidapi.com/random?category=friendship&count=2';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '78559492c2mshae7e73506b12476p1382e7jsnfa33ce985a0e',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	  }
	};

	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  const quotesContainer = document.querySelector('#quotes-container');

	  if (Array.isArray(result) && result.length > 0) {
		const firstQuote = result[0];
		const quoteCard = document.createElement('div');
		quoteCard.classList.add('quote-card');
		quoteCard.innerHTML = 
		  `<b>Author:</b> ${firstQuote.author}<br><br>
		  <i>"${firstQuote.text}"</i>`
		;
        quotesContainer.innerHTML = " ";
		quotesContainer.appendChild(quoteCard);
	  } else {
		console.error('No quotes found.');
	  }
	} catch (error) {
	  console.error('Error:', error);
	}
  }

fetchData();