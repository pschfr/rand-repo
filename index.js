// get API token from Chrome options, init request
chrome.storage.sync.get('api_token', function(data) {
	var api_token = data['api_token'];
	githubRequest(api_token);
});

function githubRequest(api_token) {
	// init API key and XMLHttpRequest
	var api_URL = 'https://api.github.com/repositories?time=0access_token=' + api_token;
	var xmlhttp = new XMLHttpRequest();

	// begin connection to GitHub
	xmlhttp.open('GET', api_URL, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				// parse JSON response, get URL from first repo
				var response = JSON.parse(xmlhttp.responseText);
				var rnd_url = response[0].html_url;

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
		}
	};

	// Close connection
	xmlhttp.send(null);
}
