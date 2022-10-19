window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //prevents default behaviour which is reloading the page

        const task = input.value;
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div'); //create task element div
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text'; //define task_input_element type
        task_input_el.value = task; //stores value in task element
    })
});