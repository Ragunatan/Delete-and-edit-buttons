// console.log(newelement)
var form = document.getElementById('addForm')
var itemlist = document.getElementById('items')

//form submit event 
form.addEventListener('submit',addItem);

//delete event
itemlist.addEventListener('click' , removeItem)

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Sure?')){
            var l1 = e.target.parentElement;
            itemlist.removeChild(l1)
        }
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
    itemlist.appendChild(li)   
}


