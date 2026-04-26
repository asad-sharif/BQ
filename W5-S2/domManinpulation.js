// select button
const btn = document.getElementById('btn');

let todos = [];

// click event listener
btn.addEventListener('click', function () {

    // fetch todos
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            todos = data;

            // remove old list if exists
            const oldList = document.querySelector('ul');
            if (oldList) oldList.remove();

            // create ul
            const ul = document.createElement('ul');

            // loop todos and create li
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.title;
                ul.appendChild(li);
            });

            // append ul to body
            document.body.appendChild(ul);
        });

});