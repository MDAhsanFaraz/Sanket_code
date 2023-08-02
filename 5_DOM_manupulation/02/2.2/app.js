function changeTheme()
{
          let head =document.getElementsByTagName('head')[0];
 
// select the curent link css tag
let linkTag= document.getElementById('css');
console.log(linkTag);
console.log(head);
// remove the css link tag
head.removeChild(linkTag);
// create  a new link tag
let newLinkTag= document.createElement('link');
newLinkTag.setAttribute('id','cssnew');
newLinkTag.setAttribute('rel','stylesheet'); 
// add the new href
newLinkTag.setAttribute('href','darktheme.css');
console.log(newLinkTag);

// append it to the head
head.appendChild(newLinkTag);
console.log(event);
}


