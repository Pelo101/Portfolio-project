document.addEventListener('DOMContentLoaded', function() {
    var importButton = document.getElementById('importButton');
    var fileInput = document.getElementById('fileInput');

importButton.addEventListener('click', function() {
	fileInput.click();
});
