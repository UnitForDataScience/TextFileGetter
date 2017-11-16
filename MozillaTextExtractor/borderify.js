var body = document.body;
var fileName = window.location.href.split('https://lersearch.inl.gov/TextView.aspx?DOC::')[1].split('.TXT')[0];
var text = body.textContent;
var encodedUri = encodeURI(text);
var link = document.createElement("a");
link.setAttribute("href", 'data:text/csv;charset=utf-8,' + encodedUri);
link.setAttribute("download", fileName + '.csv');
document.body.appendChild(link);
link.click();
