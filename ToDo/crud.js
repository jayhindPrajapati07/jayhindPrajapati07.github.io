let addbtn=document.querySelector('#addBtn');
// let input=document.querySelector('#input')
addbtn.addEventListener('click',addToDo);
let parentList=document.getElementById('parentList')
function addToDo(e){
    
    let currentBtn=e.currentTarget;
    let input=currentBtn.previousElementSibling
    let currentList=input.value;

    if(currentList !=""){
        if(parentList.children[0].className=="center"){
            parentList.children[0].remove();
        }
        let newLi=document.createElement('li')
        newLi.className="list-group-item d-flex justify-content-between";
        newLi.innerHTML=`<h3 class="flex-grow-1">${currentList}</h3> 
        <button  class="btn btn-warning me-2" onclick="editList(this)">Edit</button>
        <button  class="btn btn-danger" onclick="removeList(this)">Remove</button>`;
        parentList.appendChild(newLi);
        input.value="";
    } 
}

function removeList(currentElement){
    
    currentElement.parentElement.remove();
    if(parentList.children.length<=0){
        let newEmptyMsg=document.createElement("h4")
        newEmptyMsg.textContent="Nothing to do for now . . .";
        newEmptyMsg.className="center";
        parentList.appendChild(newEmptyMsg)
    }
}

function editList(currentElement){
    if(currentElement.textContent=="Done"){
        currentElement.textContent="Edit";
        let currentList=currentElement.previousElementSibling.value;
        let currentHeading=document.createElement('h3');
        currentHeading.textContent=currentList;
        currentHeading.className="flex-grow-1";
        currentElement.parentElement.replaceChild(currentHeading,currentElement.previousElementSibling)
    }else{
        currentElement.textContent="Done"
    let currentList=currentElement.previousElementSibling.textContent;
    let currentInput=document.createElement('input');
    currentInput.type="text";
    currentInput.placeholder="List";
    currentInput.className="form-control me-3";
    currentInput.value=currentList;
    currentElement.parentElement.replaceChild(currentInput,currentElement.previousElementSibling)
    }
    

}
