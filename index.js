// get API token and other settings from Chrome options, begin request
chrome.storage.sync.get(['api_token', 'hide_forks'], function(data) {
	githubRequest(data['api_token'], data['hide_forks']);
});

function githubRequest(api_token, hide_forks) {
	// generate random id between 1 and 70 million, API URL, and begin XMLHttpRequest
	var rand_id = Math.floor(Math.random() * 70000000);
	var api_URL = 'https://api.github.com/repositories?since=' + rand_id + '&access_token=' + api_token;
	var xmlhttp = new XMLHttpRequest();

	// begin connection to GitHub
	xmlhttp.open('GET', api_URL, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// store JSON response
			var response = JSON.parse(xmlhttp.responseText);

			// loop through items in array, removing those that are forks
			if (hide_forks == true) {
				var length = response.length;
				while (length--) {
					if (response[length].fork) {
						response.splice(response.indexOf(response[length]), 1);
					}
				}
			}

			// get URL from random repo
			var rndrepo = Math.floor(Math.random() * response.length);
			var rnd_url = response[rndrepo].html_url;
			
			// targets header nav
			var header_nav = document.getElementsByClassName('header-nav');

			// creates LI element, adds classes
			var random_li = document.createElement('li');
			random_li.className += 'header-nav-item';

			// creates A element, adds classes, href, and innerHTML
			var random_a = document.createElement('a');
			random_a.className += 'header-nav-link';
			random_a.href = rnd_url;
			random_a.innerHTML = 'Random';

			// Appends elements to document
			random_li.appendChild(random_a);
			header_nav[0].appendChild(random_li);
		}
	};

	// Close connection
	xmlhttp.send(null);
}
