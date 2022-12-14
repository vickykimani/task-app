window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks'); //main container for all the tasks that we have created

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //prevents default behaviour which is reloading the page

        const task = input.value;
        // task = [];
        var idCount = 1;
        if (task === undefined || task === "" || task?.trim() === "") { //prevent user from adding empty tasks
            alert("Please add a valid task.");
            ({ id: id++, task: task, checked: false });
        }
        // var li = document.createElement("li");
        // //add checkbox
        // var cbox = document.createElement('input');
        // cbox.setAttribute('type', 'checkbox');
        // cbox.addEventListener('change' taskAmount);
        // li.appendChild(cbox);
        // cbox.setAttribute('id', 'box' + idCount);
        // idCount++;

        // function taskAmount() {
        //     var totalTasks = task.length;
        //     var checkedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;

        //     console.log(totalTasks);
        //     console.log(checkedTasks);
        // }

        // var startList = '<ol>';
        // var endList = '</ol>';
        // window.onload = function orderNumbers() {
        //     for (n = 1; n < 10; n++) {
        //         var currentNumber = +1;
        //         $('.orderNumbers : eq(' + (currentNumber - 1) + ')').html = currentNumber + '.';
        //     };
        //     document.getElementById("emptydiv").innerHTML = startList + endList;
        // };

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div'); //create task element div
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input'); //create input field to store the task values
        task_input_el.classList.add('text');
        task_input_el.type = 'text'; //define task_input_element type
        task_input_el.value = task; //store value in task element

        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button')
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_del_el = document.createElement('button')
        task_del_el.classList.add('delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);

        const task_z = document.getElementById("new-task-input");
        const value2 = task_z.value.trim();
        const ol = list_el.querySelector('ol');
        const li = document.createElement('li');

        input.value = ''; //resetting the input form to empty

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });
        task_del_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});

