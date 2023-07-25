const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green'

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display = 'none'

var items = document.querySelectorAll('.list-group-item')
items[1].style.color = 'blue'
for(i=0;i<items.length;i++){
    if(i%2 ===1){
        items[i].style.backgroundColor = 'green'
    }
}