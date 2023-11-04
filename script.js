import axios from 'axios';


const options = {
  method: 'GET',
  url: 'https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies',
  headers: {
    'X-RapidAPI-Key': '78559492c2mshae7e73506b12476p1382e7jsnfa33ce985a0e',
    'X-RapidAPI-Host': 'hobbies-by-api-ninjas.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
