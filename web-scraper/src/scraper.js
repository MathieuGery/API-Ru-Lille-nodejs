const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://www.crous-lille.fr/restaurant/r-u-chatillon-lille-centre/';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const statsTable = $('ul.slides');
    console.log(statsTable.text());
    topPremierLeagueScorers = [];

    statsTable.each(function () {
      const date = $(this).find('h3').text().replace(/\s\s+/g, ' ').split(/(?=[A-Z])/);
      const moment_day = $(this).find('h4').text().split(/(?=[A-Z])/).slice(3);
      const service = $(this).find('.playerCountry').text();
      const goals = $(this).find('.mainStat').text();

      console.log(moment_day)
      date.forEach(element => {
        moments_array = [];
        moment_day.forEach(element => {
          console.log(element)
        })


        topPremierLeagueScorers.push({ 
          date: element,
          moment: moments_array,
          service,
          goals,
        });
      })
      statsTable.each(function () {
      })
    });

    console.log(topPremierLeagueScorers);
  })
  .catch(console.error);

//const statsTable = $('ul.slides', html).text().replace(/\s\s+/g, ' ');