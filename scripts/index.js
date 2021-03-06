// header template 
var template = document.getElementById('header');
var clone = document.importNode(template.content, true);
document.getElementsByClassName('flex-header')[0].appendChild(clone);