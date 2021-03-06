// fetch the header from index.html and use it in postslist.html page
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

// function to delete post on listening to modal value "Yes"
  function deletePost(id) {
      var post = document.getElementById(id);
      var btnYes = document.getElementsByClassName('btn-yes')[0];

      btnYes.addEventListener('click', function() {
          post.parentNode.removeChild(post);
      });
  }