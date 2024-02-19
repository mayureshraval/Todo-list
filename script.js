const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
 if(inputBox.value==''){
    alert('Enter a Task!');
 }   
 else{
    let li =  document.createElement('li');
    li.innerHTML = inputBox.value;
    let span = document.createElement('span');
    span.innerHTML='\u00d7';
    li.appendChild(span);
    listContainer.appendChild(li);
 }
 inputBox.value='';
 saveData();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
})

inputBox.addEventListener('keydown',(e)=>{
    if (e.key==='Enter') {
        addTask();
    }
});

function saveData() {
    localStorage.setItem('tasks',listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML=localStorage.getItem('tasks');
}

showData();