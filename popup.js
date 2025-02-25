document.getElementById('insertText').addEventListener('click', function () {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		chrome.scripting.executeScript({
			target: {tabId: tabs[0].id},
			files: ['content.js']
		}, (results) => {
			if (chrome.runtime.lastError) {
				console.error(chrome.runtime.lastError.message);
			} else {
				console.log('Script executed successfully');
			}
		});
	});
});
