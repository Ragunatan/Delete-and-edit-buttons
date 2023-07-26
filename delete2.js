// console.log(newelement)
var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')

//form submit event 
form.addEventListener('submit',addItem);

//delete event
itemlist.addEventListener('click' , removeItem)

   


function removeItem(e){
    if(e.target.classList.contains('delete')){
            var l1 = e.target.parentElement;
            itemlist.removeChild(l1)
    }

}

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item'
    //add text node 
    li.appendChild(document.createTextNode(newItem));
    //add delete button
    var deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)
    itemlist.appendChild(li);

    

}

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'btn btn-danger btn-sm float-right edit-button';

    var newcls = document.querySelectorAll('.list-group-item');
    for (var i = 0; i < newcls.length; i++) {
      // Create a new "Edit" button for each list item
      var editBtnClone = editButton.cloneNode(true);

      // Append the "Edit" button to the current listed item
      newcls[i].appendChild(editBtnClone);

     
    }

    
    
