const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'


var titles = document.getElementsByClassName('titles')
titles[0].style.fontWeight = 'bold'
titles[0].style.color = 'green'

var items = document.getElementsByClassName('list-group-item')
items[2].style.backgroundColor = 'green'
for(i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold'
}
