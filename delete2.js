// console.log(newelement)
var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter')


//form submit event 
form.addEventListener('submit',addItem);

//delete event
itemlist.addEventListener('click' , removeItem)

//add eventlistener for search key
filter.addEventListener('keyup' , filterItems)


    

function removeItem(e){
    if(e.target.classList.contains('delete')){
            var l1 = e.target.parentElement;
            itemlist.removeChild(l1)
    }
}

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var newitem2 = document.getElementById('item2').value;
    var li = document.createElement('li');
    li.className = 'list-group-item'
    //add text node 
    li.appendChild(document.createTextNode(newItem +" " + newitem2 ));
    //add delete button
    var deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)
    itemlist.appendChild(li);
}  
   


function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var Items = itemlist.getElementsByTagName('li');
    // Convert to an array
    Array.from(Items).forEach(function(item) {
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })
  }
