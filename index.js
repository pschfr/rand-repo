// targets header nav
var header_nav = document.getElementsByClassName('header-nav');

// creates LI element, adds classes
var random_li = document.createElement('li');
random_li.className += 'header-nav-item';

// creates A element, adds classes, href, and innerHTML
var random_a = document.createElement('a');
random_a.className += 'header-nav-link';
random_a.href = 'https://github.com/?random';
random_a.innerHTML = 'Random';

// Appends elements to document
random_li.appendChild(random_a);
header_nav[0].appendChild(random_li);
