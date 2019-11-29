const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://www.crous-lille.fr/restaurant/r-u-chatillon-lille-centre/';

axios(url)
  .then(response => {
	const html = response.data;
	const $ = cheerio.load(html);
	const statsTable = $('ul.slides');
	topPremierLeagueScorers = [];

	statsTable.each(function () {
	  const date = $(this).find('h3').text().replace(/\s\s+/g, ' ').split(/(?=[A-Z])/);
	  const moment_day = $(this).find('h4').text().split(/(?=[A-Z])/).slice(3);
	  const service = $(this).find('span').text().split(/(?=[A-Z])/).slice(3);
	  const plats = $(this).find('ul.liste-plats').text();


	const moments_array = [];
	  date.forEach(element => {
		  tmp_arr = []
		  service.forEach(elem => {
			tmp_arr.push({moment: elem , content: "content"})
		})
		moments_array.push(tmp_arr)
		})

	//parse each days
	date.forEach(element => {
		  topPremierLeagueScorers.push({
		  date: element,
		  moment: moments_array,
		  plats,
		});
	  })
	  statsTable.each(function () {
	  })
	});

	//console.log(topPremierLeagueScorers);
  })
  .catch(console.error);

//const statsTable = $('ul.slides', html).text().replace(/\s\s+/g, ' ');