function importFunction() {
        document.getElementById('file').click();
    }

    document.getElementById('file').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const book = ePub(file);

        const rendition = book.renderTo('epub_container', { width: '1500px', height: '1000px'});
        rendition.display();
    });