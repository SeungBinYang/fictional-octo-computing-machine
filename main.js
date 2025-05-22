let inputBox = document.getElementById('inputField'); // 할 일 입력창
let addToDo = document.getElementById('addToDo'); // 버튼
let toDoList = document.getElementById('toDoList'); // 할 일 리스트창

// 저장된 항목 불러오기
window.addEventListener('load', function () {
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  savedTasks.forEach(function (task) {
    const list = document.createElement('li');
    list.innerText = task;
    toDoList.appendChild(list);

    list.addEventListener('click', function () {
      list.style.textDecoration = 'line-through';
    });
    list.addEventListener('dblclick', function () {
      toDoList.removeChild(list);

      // 삭제 시 localStorage도 업데이트
      const updatedTasks = JSON.parse(
        localStorage.getItem('tasks') || '[]'
      ).filter((t) => t !== task);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    });
  });
});

addToDo.addEventListener('click', function () {
  var list = document.createElement('li');

  if (!inputBox.value) {
    alert('내용을 입력해 주세요!');
  } else {
    list.innerText = inputBox.value;
    toDoList.appendChild(list);

    // localStorage에 저장
    const task = inputBox.value;
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    inputBox.value = '';
  }

  list.addEventListener('click', function () {
    list.style.textDecoration = 'line-through';
  });
  list.addEventListener('dblclick', function () {
    toDoList.removeChild(list);

    // localStorage에서 제거
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter((t) => t !== list.innerText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
});
