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

  // On clicking edit button the content is made editable and save button appears
 document.getElementsByClassName('btn-edit')[0].addEventListener('click', function() {
      document.getElementsByClassName('btn-edit')[0].style.display = 'none';
      document.getElementsByClassName('btn-save')[0].style.display = 'initial';

      var postTitle = document.getElementById('post-title');
      postTitle.innerHTML = '<p>'+'UPDATED: ' + postTitle.innerText + '</p>';
      postTitle.setAttribute('contenteditable', 'true');
      postTitle.style.border = '1px solid #fa3275';

      var postContent = document.getElementsByClassName('post-content')[0];
      postContent.innerHTML = '<p>'+'UPDATED: ' + '<br>' + postContent.innerText + '</p>';
      postContent.setAttribute('contenteditable', 'true');
      postContent.style.border = '1px solid #fa3275';
  });

  // On clicking save button the content is uneditable and edit button appears
 document.getElementsByClassName('btn-save')[0].addEventListener('click', function() {
    document.getElementsByClassName('btn-save')[0].style.display = 'none';
    document.getElementsByClassName('btn-edit')[0].style.display = 'initial';

    var postTitle = document.getElementById('post-title');
    var strSplit = postTitle.innerText.split(':');
    var title = strSplit.splice(1, strSplit.length).join(' ');
    postTitle.innerHTML = '<p>'+ title + '</p>';
    postTitle.setAttribute('contenteditable', 'false');
    postTitle.style.border = 'none';

    var postContent = document.getElementsByClassName('post-content')[0];
    var strSplit = postContent.innerText.split(':');
    var content = strSplit.splice(1, strSplit.length).join(' ');
    postContent.innerHTML = '<p>'+ content + '</p>';
    postContent.setAttribute('contenteditable', 'false');
    postContent.style.border = 'none';
});

// To display number of likes and change the text from Like to Liked
var btnLike = document.getElementsByClassName('btn-like')[0]
var likes = 0;

btnLike.addEventListener ('click', function() {
    likes++;
    document.getElementsByClassName('btn-like-text')[0].innerText = 'Liked';

    if (likes === 1) {
        document.getElementsByClassName('like-first')[0].remove();
    }
    
    document.getElementsByClassName('no-of-likes')[0].innerText = likes;
    document.getElementsByClassName('liked')[0].style.display = 'inherit';
});

//To display comments on clicking comment button and latest comment comes 1st
var btnCmt = document.getElementsByClassName('btn-cmt')[0];
btnCmt.addEventListener('click', function() {
    var textComment = document.getElementById('comment');
    if (textComment.value !== "") {
        document.getElementsByClassName('comment-section')[0].style.display = 'inherit';
        var element = document.createElement('p');
        element.className = 'ind-comment';
        element.innerText = textComment.value;
        var individualComment = document.getElementsByClassName('comment-section')[0];
        individualComment.insertBefore(element, individualComment.firstChild);
    }
    textComment.value = '';
});