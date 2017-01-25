// Saves options to chrome.storage
function save_options() {
	var api_token  = document.getElementById('api_token').value,
		hide_forks = document.getElementById('hide_forks').checked;
	chrome.storage.sync.set({
		api_token:  api_token,
		hide_forks: hide_forks
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved!';
		// after 3 secs, remove status
		setTimeout(function() {
			status.textContent = '';
		}, 3000);
	});
}

// Restores input values using the preferences stored in chrome.storage, default is empty
function restore_options() {
	chrome.storage.sync.get({
		api_token:  '',
		hide_forks: ''
	}, function(items) {
		document.getElementById('api_token').value    = items.api_token;
		document.getElementById('hide_forks').checked = items.hide_forks;
	});
}

// on DOM load, run restore options
document.addEventListener('DOMContentLoaded', restore_options);

// on save button click, save options :P
document.getElementById('save').addEventListener('click', save_options);
