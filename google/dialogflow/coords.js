fetch = require('node-fetch');

let tcity = "dublin";
let ttime = "2020-10-10T18:18:16.589Z";


function dateParser(input) {
	// function is passed a date and parses it to create a unix timestamp
	// removing the '.000N' from input
	let finalDate = input.substring(0, input.length - 5);
	return new Date(finalDate.split(' ').join('T')).getTime();
}

function getCoord(addr) {
	fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+addr+'&key=AIzaSyBFZgNTdNsGohi__dS5UuDu5J1gsJa41y4')
		.then(response => response.json())
		.then(data => getZone(data))
}

function getZone(dt) {
	// console.log(JSON.stringify(dt,null, 4))
	let lat = (dt.results[0].geometry.location.lat);
	let lng = (dt.results[0].geometry.location.lng);
	let time = dateParser(ttime);
	let timestr = time.toString();
	let timems = timestr.substr(0,timestr.length -3);
	fetch('https://maps.googleapis.com/maps/api/timezone/json?location='+lat+','+lng+'&timestamp='+timems+'&key=AIzaSyBFZgNTdNsGohi__dS5UuDu5J1gsJa41y4')
		.then(response => response.json())
		.then(data => console.log(data.timeZoneName));

}

getCoord(tcity);




