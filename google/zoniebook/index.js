fetch = require('node-fetch');

let tcity = "dublin";
let ttime = "2020-10-10T18:18:16.589Z";
let lcity = "brooklyn";

function dateParser(input) {
	// function is passed a date and parses it to create a unix timestamp
	// removing the '.000N' from input
	let finalDate = input.substring(0, input.length - 5);
	return new Date(finalDate.split(' ').join('T')).getTime();
}

const getCoord = async (addr) =>{
	await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + addr + '&key=AIzaSyBFZgNTdNsGohi__dS5UuDu5J1gsJa41y4')
		.then(response => response.json())
		.then(data => getZone(data));
};

const getZone = async (coData) => {
	let lat = (coData.results[0].geometry.location.lat);
	let lng = (coData.results[0].geometry.location.lng);
	let time = dateParser(ttime);
	let timestr = time.toString();
	let timems = timestr.substr(0,timestr.length -3);
	await fetch('https://maps.googleapis.com/maps/api/timezone/json?location='+lat+','+lng+'&timestamp='+timems+'&key=AIzaSyBFZgNTdNsGohi__dS5UuDu5J1gsJa41y4')
		.then(response => response.json())
		.then(data => console.log(data.timeZoneName));
};


getCoord(tcity);

