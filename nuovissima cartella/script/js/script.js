const fmrlist = document.getElementById('mylist');
const insertItem = document.getElementById('insertItem');
const btninsert = document.getElementById('btninsert');
const list = document.getElementById('list');
const listItem = [];

btninsert.addEventListener('click', function (e) {
    e.preventDefault();
    popolateArray();
    printList();
    fmrlist.reset();
})

function popolateArray() {
    listItem.push(insertItem.value);
}

function printList() {
    list.innerHTML = ''; /*per eliminare ogni volta prima di inserire un altro nome*/
    for (let i = 0; i < listItem.length; i++) {
        let newlist = document.createElement('list');
        newlist.innerText = listItem[i];
        let btnDelete= document.createElement('button');
        btnDelete.setAttribute('type', 'nutton');
        btnDelete.setAttribute('onclick', 'deleteItem');
       newlist.appendChild(btnDelete);
        list.appendChild(newlist);
    }
}


function deleteItem(index){
    listItem.splice(index, 1);
    printList();
}