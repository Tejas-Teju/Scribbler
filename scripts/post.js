// fetch the header from index.html and use it in post.html page
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

 document.getElementsByClassName('btn-edit')[0].addEventListener('click', function() {
      document.getElementsByClassName('btn-edit')[0].style.display = 'none';
      document.getElementsByClassName('btn-save')[0].style.display = 'initial';

      var postTitle = document.getElementById('post-title');
      postTitle.setAttribute('contenteditable', 'true');
      postTitle.style.border = '1px solid #fa3275';

      var postTitle = document.getElementsByClassName('post-content')[0];
      postTitle.setAttribute('contenteditable', 'true');
      postTitle.style.border = '1px solid #fa3275';
  });

 document.getElementsByClassName('btn-save')[0].addEventListener('click', function() {
    document.getElementsByClassName('btn-save')[0].style.display = 'none';
    document.getElementsByClassName('btn-edit')[0].style.display = 'initial';

    var postTitle = document.getElementById('post-title');
    postTitle.setAttribute('contenteditable', 'false');
    postTitle.style.border = 'none';

    var postTitle = document.getElementsByClassName('post-content')[0];
    postTitle.setAttribute('contenteditable', 'false');
    postTitle.style.border = 'none';
});
