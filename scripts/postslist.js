fetch("../index.html")
  .then(response => {
    return response.text();
  })
  .then(data => {
        var parser = new DOMParser();
        var parsedData = parser.parseFromString(data, 'text/html');
        var template = parsedData.getElementById('header');
        var clone = document.importNode(template.content, true);
        document.getElementById('header').appendChild(clone);
  });