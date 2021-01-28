
// var gender;

fetch('https://randomuser.me/api/')
	.then((apiData) => {
		return apiData.json();
	})
	.then((actualData) => {

		let fullName = actualData.results[0].name.first + " " + actualData.results[0].name.last;
		let gender = actualData.results[0].gender;
		let age = actualData.results[0].dob.age;
		let country = actualData.results[0].location.country;

		document.getElementById("name").innerHTML = fullName;
		document.getElementById("gender").innerHTML = gender;
		document.getElementById("age").innerHTML = age;
		document.getElementById("country").innerHTML = country;
		document.getElementById("img").src = `https://joeschmoe.io/api/v1/${gender}/random`;

	})
	.catch((error) => {
		console.log("There is an Error occur Please Try Again!");
	});