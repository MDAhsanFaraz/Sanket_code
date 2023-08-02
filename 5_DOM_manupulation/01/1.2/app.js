var items=document.getElementsByTagName('li');
for(let i=0;i<items.length;i++)
{
          const item =items[i];
          let  link=item.querySelector('a');
          link.setAttribute('href','https://www.google.com/search?q='+link.innerText);// this is eguivalent to <a href="www.google.com/search?q='+link.innerText">
          console.log(link);
}

console.log(items);