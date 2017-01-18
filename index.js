window.onload = function() {
	// init API key and URL, and XMLHttpRequest
	var api_key = '7cf4478f4b20d12374e1923c805298612b880080';
	var api_URL = 'https://api.github.com/repositories?time=0access_token=' + api_key;
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
};
