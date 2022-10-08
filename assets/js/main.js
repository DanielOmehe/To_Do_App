
const inputItem = document.querySelector('.input-value');
const addTaskButton = document.querySelector('#add-task');

let taskList = [];

addTaskButton.addEventListener('click', () => {
     let localItems =  JSON.parse(localStorage.getItem('localItem'));

     if(localItems === null){
          taskList = [];
     }else{
          taskList = localItems;
     }

     taskList.push(inputItem.value)
     localStorage.setItem('localItem', JSON.stringify(taskList));
});

function showList(){
     let outPut = '';
     let showTasklist = document.querySelector('#todolistitem');
     let localItems = JSON.parse(localStorage.getItem('localItem'))

     if(localItems === null){
          taskList = []
     }else{
          taskList = localItems;
     }

     taskList.forEach((data, index) => {
          outPut += `
               <li class="task">
                    <p class="text">Code</p>
                    <button class="remove-task"><i class="fas fa-times">${index}</i></button>
               </li>
          `
     })

     showTasklist.innerHTML = outPut;
}

showList();

function deleteTask(index){
     let localItems = JSON.parse(localStorage.getItem('localItem'));
     taskList.splice(index, 1)
     localStorage.setItem('localItem', JSON.stringify(taskList))
     showList();
}